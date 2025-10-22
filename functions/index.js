// functions/index.js
const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const {onSchedule} = require("firebase-functions/v2/scheduler");
const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

// Inicializa Firebase Admin solo si no está inicializado
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

// ============================================
// CLOUD FUNCTION: Sincronizar contador de likes automáticamente
// ============================================
// Esta función se ejecuta cada vez que se crea o elimina un like
// en posts/{slug}/likes/{userId} y actualiza el contador en likes/{slug}
exports.syncLikeCounter = onDocumentWritten("posts/{slug}/likes/{userId}",
    async (event) => {
      const slug = event.params.slug;
      const normalizedSlug = slug.toLowerCase(); // Normalizar slug

      try {
        // Contar todos los likes en la subcolección
        const likesSnapshot = await db
            .collection("posts")
            .doc(normalizedSlug)
            .collection("likes")
            .get();

        const count = likesSnapshot.size;

        // Actualizar el contador en la colección 'likes'
        await db.collection("likes").doc(normalizedSlug).set({
          count: count,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
        });

        console.log(`[syncLikeCounter] Updated counter for ${normalizedSlug}: ${count} likes`);
        return null;
      } catch (error) {
        console.error(`[syncLikeCounter] Error updating counter for ${slug}:`, error);
        return null;
      }
    });

// ============================================
// CLOUD FUNCTION: Logging de acciones
// ============================================
// Registra cada like/unlike para auditoría y detección de abuso
exports.logLikeAction = functions.firestore
    .document("posts/{slug}/likes/{userId}")
    .onWrite(async (change, context) => {
      const slug = context.params.slug;
      const userId = context.params.userId;
      const normalizedSlug = slug.toLowerCase();

      let action = "unknown";
      if (!change.before.exists && change.after.exists) {
        action = "like";
      } else if (change.before.exists && !change.after.exists) {
        action = "unlike";
      }

      try {
        // Crear log en la colección likesLog
        await db.collection("likesLog").add({
          action: action,
          userId: userId,
          articleSlug: normalizedSlug,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          metadata: {
            beforeExists: change.before.exists,
            afterExists: change.after.exists,
          },
        });

        console.log(`[logLikeAction] Logged ${action} by ${userId} on ${normalizedSlug}`);
        return null;
      } catch (error) {
        console.error(`[logLikeAction] Error logging action:`, error);
        return null;
      }
    });

// ============================================
// CLOUD FUNCTION: Rate Limiting
// ============================================
/**
 * Verifica si un usuario está haciendo demasiados likes/unlikes
 * @param {string} userId - ID del usuario a verificar
 * @return {Promise<Object>} Resultado con allowed y mensaje
 */
async function checkRateLimit(userId) {
  const now = Date.now();
  const oneMinuteAgo = now - 60000; // 1 minuto atrás

  try {
    // Contar cuántas acciones ha hecho en el último minuto
    const recentActions = await db
        .collection("likesLog")
        .where("userId", "==", userId)
        .where("timestamp", ">", new Date(oneMinuteAgo))
        .get();

    const actionCount = recentActions.size;
    const MAX_ACTIONS_PER_MINUTE = 20; // Límite: 20 acciones por minuto

    if (actionCount >= MAX_ACTIONS_PER_MINUTE) {
      console.warn(`[Rate Limit] User ${userId} exceeded rate limit: ${actionCount} actions in 1 minute`);
      const msg = `Has excedido el límite de ${MAX_ACTIONS_PER_MINUTE} ` +
        `acciones por minuto. Por favor, espera un momento.`;
      return {
        allowed: false,
        message: msg,
        actionsCount: actionCount,
      };
    }

    return {allowed: true, actionsCount: actionCount};
  } catch (error) {
    console.error("[Rate Limit] Error checking rate limit:", error);
    // En caso de error, permitir la acción para no bloquear usuarios legítimos
    return {allowed: true, error: error.message};
  }
}

// ============================================
// CLOUD FUNCTION: Verificar si usuario está bloqueado
// ============================================
/**
 * Verifica si un usuario está bloqueado
 * @param {string} userId - ID del usuario a verificar
 * @return {Promise<Object>} Resultado con blocked y reason
 */
async function checkUserBlocked(userId) {
  try {
    const userDoc = await db.collection("users").doc(userId).get();
    if (userDoc.exists && userDoc.data().blocked === true) {
      return {
        blocked: true,
        reason: userDoc.data().blockReason || "Cuenta bloqueada por administrador",
      };
    }
    return {blocked: false};
  } catch (error) {
    console.error("[Check Blocked] Error checking user status:", error);
    return {blocked: false};
  }
}

// ============================================
// HTTP FUNCTION: Toggle Like (con autenticación y rate limiting)
// ============================================
exports.toggleLike = functions.https.onCall(async (data, context) => {
  // 1. Verificar autenticación
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "Debes iniciar sesión para dar like.",
    );
  }

  const userId = context.auth.uid;
  const {slug} = data;

  // 2. Validar parámetros
  if (!slug || typeof slug !== "string") {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "El slug del artículo es requerido.",
    );
  }

  const normalizedSlug = slug.toLowerCase();

  // 3. Verificar si el usuario está bloqueado
  const blockedCheck = await checkUserBlocked(userId);
  if (blockedCheck.blocked) {
    throw new functions.https.HttpsError(
        "permission-denied",
        blockedCheck.reason,
    );
  }

  // 4. Verificar rate limiting
  const rateLimitCheck = await checkRateLimit(userId);
  if (!rateLimitCheck.allowed) {
    throw new functions.https.HttpsError(
        "resource-exhausted",
        rateLimitCheck.message,
    );
  }

  // 5. Realizar la acción de like/unlike
  const likeRef = db.collection("posts").doc(normalizedSlug).collection("likes").doc(userId);
  const userLikeRef = db.collection("users").doc(userId).collection("likes").doc(normalizedSlug);

  try {
    // Usar transacción para asegurar consistencia
    const result = await db.runTransaction(async (transaction) => {
      const likeDoc = await transaction.get(likeRef);

      if (likeDoc.exists) {
        // Unlike: Eliminar like
        transaction.delete(likeRef);
        transaction.delete(userLikeRef);
        return {liked: false, action: "unlike"};
      } else {
        // Like: Agregar like
        transaction.set(likeRef, {
          userId: userId,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        transaction.set(userLikeRef, {
          postSlug: normalizedSlug,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        return {liked: true, action: "like"};
      }
    });

    // 6. Obtener el nuevo contador (será actualizado por el trigger syncLikeCounter)
    // Esperamos un momento para que el trigger se ejecute
    await new Promise((resolve) => setTimeout(resolve, 500));

    const likesCountDoc = await db.collection("likes").doc(normalizedSlug).get();
    const newCount = likesCountDoc.exists ? (likesCountDoc.data().count || 0) : 0;

    console.log(`[toggleLike] User ${userId} ${result.action}d article ${normalizedSlug}. New count: ${newCount}`);

    return {
      success: true,
      liked: result.liked,
      likesCount: newCount,
      message: result.liked ? "Like agregado" : "Like eliminado",
    };
  } catch (error) {
    console.error("[toggleLike] Error:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Error al procesar la acción de like.",
        error.message,
    );
  }
});

// ============================================
// HTTP FUNCTION: Obtener estado de like del usuario
// ============================================
exports.getLikeStatus = functions.https.onCall(async (data, context) => {
  const {slug} = data;

  if (!slug || typeof slug !== "string") {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "El slug del artículo es requerido.",
    );
  }

  const normalizedSlug = slug.toLowerCase();

  try {
    // Obtener contador de likes
    const likesCountDoc = await db.collection("likes").doc(normalizedSlug).get();
    const count = likesCountDoc.exists ? (likesCountDoc.data().count || 0) : 0;

    // Si hay usuario autenticado, verificar si dio like
    let userLiked = false;
    if (context.auth) {
      const userId = context.auth.uid;
      const likeDoc = await db
          .collection("posts")
          .doc(normalizedSlug)
          .collection("likes")
          .doc(userId)
          .get();
      userLiked = likeDoc.exists;
    }

    return {
      success: true,
      likesCount: count,
      userLiked: userLiked,
    };
  } catch (error) {
    console.error("[getLikeStatus] Error:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Error al obtener el estado de likes.",
        error.message,
    );
  }
});

// ============================================
// SCHEDULED FUNCTION: Detectar y reportar abuso (cada hora)
// ============================================
exports.detectAbuse = functions.pubsub
    .schedule("every 1 hours")
    .onRun(async (context) => {
      const oneHourAgo = new Date(Date.now() - 3600000);

      try {
        // Buscar usuarios con más de 100 acciones en la última hora
        const logsSnapshot = await db
            .collection("likesLog")
            .where("timestamp", ">", oneHourAgo)
            .get();

        // Contar acciones por usuario
        const userActionsMap = new Map();
        logsSnapshot.forEach((doc) => {
          const userId = doc.data().userId;
          userActionsMap.set(userId, (userActionsMap.get(userId) || 0) + 1);
        });

        // Identificar usuarios sospechosos
        const suspiciousUsers = [];
        const ABUSE_THRESHOLD = 100; // Más de 100 acciones por hora es sospechoso

        userActionsMap.forEach((count, userId) => {
          if (count > ABUSE_THRESHOLD) {
            suspiciousUsers.push({userId, actionCount: count});
          }
        });

        if (suspiciousUsers.length > 0) {
          console.warn("[detectAbuse] Found suspicious users:", suspiciousUsers);

          // Crear reporte de abuso
          await db.collection("abuseReports").add({
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            period: "last_hour",
            suspiciousUsers: suspiciousUsers,
            threshold: ABUSE_THRESHOLD,
          });

          // Opcional: Enviar notificación por email a admins
          // (requiere configurar SendGrid, Mailgun, etc.)
        } else {
          console.log("[detectAbuse] No suspicious activity detected");
        }

        return null;
      } catch (error) {
        console.error("[detectAbuse] Error:", error);
        return null;
      }
    });

// ============================================
// LEGACY: Mantener función anterior por compatibilidad
// ============================================
exports.handleLike = functions.https.onRequest(async (req, res) => {
  // Manejo de CORS
  const allowedOrigins = [
    "https://taichisun.com",
    "https://www.taichisun.com",
    "http://localhost:4321",
    "http://localhost:4322",
  ];
  const origin = req.get("origin");
  if (allowedOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  res.status(200).json({
    success: true,
    message: "Esta función está deprecada. Usa toggleLike en su lugar.",
  });
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.status(200).send("Hello from Firebase!");
});
