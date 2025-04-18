// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {Timestamp, FieldValue} = require("firebase-admin/firestore");

// Inicializa Firebase Admin SDK (se ejecuta una sola vez)
admin.initializeApp();

// Obtén una referencia a Firestore desde el SDK de Admin
const db = admin.firestore();

// Solo conecta al emulador de Firestore si está en desarrollo
if (process.env.FUNCTIONS_EMULATOR === "true" || process.env.FIRESTORE_EMULATOR_HOST) {
  db.settings({
    host: "localhost:8080",
    ssl: false,
  });
}

/**
 * Cloud Function para manejar los "likes".
 * Se espera que reciba 'slug' y 'userId' en el cuerpo de la solicitud.
 * Verifica si el usuario ya dio like y, si no, incrementa el contador
 * y registra el like del usuario.
 */
exports.handleLike = functions.https.onCall(async (data, context) => {
  // --- LOGGING --- Añadido para depurar
  // Log properties separately to be extra safe
  functions.logger.info("handleLike received slug:", data.slug);
  functions.logger.info("handleLike received userId:", data.userId);
  // --- FIN LOGGING ---

  const slug = data.slug;
  const userId = data.userId;

  // Asegurarse de que slug y userId son strings
  if (typeof slug !== "string" || typeof userId !== "string" || !slug || !userId) {
    functions.logger.error("Validation Failed: Invalid arguments");
    throw new functions.https.HttpsError("invalid-argument", "El slug y el userId son requeridos y deben ser strings.");
  }

  // Referencia al documento que registra si un usuario ya dio like a un slug
  const likeLogRef = db.collection("likesLog").doc(`${slug}_${userId}`);
  // Referencia al documento que lleva la cuenta total de likes para un slug
  const likesRef = db.collection("likes").doc(slug);

  try {
    // Ejecutamos la lógica dentro de una transacción para asegurar atomicidad
    const resultData = await db.runTransaction(async (transaction) => {
      // Realiza ambas lecturas antes de cualquier escritura
      const likeLogDoc = await transaction.get(likeLogRef);
      const likesDoc = await transaction.get(likesRef);

      if (likeLogDoc.exists) {
        // El usuario ya dio like, lanzamos error

        throw new functions.https.HttpsError(
            "already-exists",
            "Ya has dado like a este artículo.",
        );
      }

      // Si no existe el log, procedemos


      // 1. Registra el like del usuario en likesLog
      transaction.set(likeLogRef, {
        timestamp: Timestamp.now(),
      });

      // 2. Incrementa o inicializa el contador en la colección likes
      let newLikesCount;
      if (likesDoc.exists) {
        // Si existe, incrementamos
        transaction.update(likesRef, {
          count: FieldValue.increment(1),
        });
        newLikesCount = (likesDoc.data().count || 0) + 1; // Calcula el nuevo contador
      } else {
        // Si no existe, lo creamos con contador 1
        transaction.set(likesRef, {count: 1});
        newLikesCount = 1; // El nuevo contador es 1
      }

      // Devolver éxito y el nuevo contador desde la transacción
      return {
        success: true,
        newLikes: newLikesCount,
      };
    }); // Fin de runTransaction

    // La transacción devolvió los datos, así que los retornamos directamente

    return resultData; // Retornar el resultado de la transacción
  } catch (error) {
    functions.logger.error("Error processing like:", error);
    // Si el error es uno que ya lanzamos (como 'already-exists'), relanzarlo
    if (error instanceof functions.https.HttpsError) {
      throw error;
    }
    // Para otros errores inesperados, lanzar un error interno
    throw new functions.https.HttpsError("internal", "Ocurrió un error al procesar el like.", error.message);
  }
});
