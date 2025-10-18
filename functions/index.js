// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inicializa Firebase Admin solo si no está inicializado
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

// --- NUEVA FUNCIÓN handleLike ---
exports.handleLike = functions.https.onRequest(async (req, res) => {
  // --- Manejo de CORS (igual que antes) ---
  const allowedOrigins = [
    "https://taichisun.com",
    "https://www.taichisun.com",
    "http://localhost:4321", // Origen de desarrollo
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
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({success: false, message: "Dominio no autorizado."});
  }
  // --- Fin Manejo de CORS ---

  let slug;
  let userId; // Este será el user.uid real de Firebase Auth

  // Extraer slug y userId (igual que antes)
  if (req.body) {
    if (typeof req.body.slug === "string") {
      slug = req.body.slug;
      if (typeof req.body.userId === "string") {
        userId = req.body.userId;
      }
    } else if (req.body.data && typeof req.body.data.slug === "string") {
      slug = req.body.data.slug;
      if (typeof req.body.data.userId === "string") {
        userId = req.body.data.userId;
      }
    }
  }

  // Validar slug (igual que antes)
  if (typeof slug !== "string" || !slug) {
    return res.status(400).json({success: false, message: "El slug es requerido y debe ser string."});
  }

  const likesCounterRef = db.collection("likes").doc(slug); // Referencia al contador
  const userLikesCollectionRef = db.collection("userArticleLikes"); // NUEVA colección

  // --- Lógica para obtener solo el contador (si no se envía userId) ---
  if (!userId) {
    try {
      const likesDoc = await likesCounterRef.get();
      const count = likesDoc.exists ? (likesDoc.data().count || 0) : 0;
      return res.status(200).json({success: true, newLikes: count});
    } catch (error) {
      console.error("Error fetching like count:", error);
      return res.status(500).json({
        success: false,
        message: "Error al consultar el contador de likes.",
        error: error.message,
      });
    }
  }
  // --- Fin Lógica contador ---


  // --- Lógica principal de Like/Unlike con userId real ---
  if (typeof userId !== "string" || !userId) {
    // Ahora userId es requerido para la acción de like/unlike
    return res.status(400).json({success: false, message: "Se requiere userId para dar o quitar like."});
  }

  // Consulta para ver si este usuario ya dio like a este artículo
  const likeQuery = userLikesCollectionRef
      .where("userId", "==", userId)
      .where("articleId", "==", slug)
      .limit(1);

  try {
    const resultData = await db.runTransaction(async (transaction) => {
      const likeSnapshot = await transaction.get(likeQuery);
      const likesCounterDoc = await transaction.get(likesCounterRef); // Obtenemos el contador dentro de la transacción

      let existingLikeDoc = null;
      if (!likeSnapshot.empty) {
        existingLikeDoc = likeSnapshot.docs[0]; // El documento de like existente
      }

      let finalLikesCount = likesCounterDoc.exists ? (likesCounterDoc.data().count || 0) : 0;
      let liked = false; // Para la respuesta final

      if (existingLikeDoc) {
        // --- Usuario ya dio like -> QUITAR LIKE ---
        transaction.delete(existingLikeDoc.ref); // Eliminar de userArticleLikes
        // Decrementar contador (si existe)
        if (likesCounterDoc.exists && finalLikesCount > 0) {
          transaction.update(likesCounterRef, {count: admin.firestore.FieldValue.increment(-1)});
          finalLikesCount--;
        }
        liked = false; // Se quitó el like
        console.log(`User ${userId} unliked article ${slug}`);
      } else {
        // --- Usuario no ha dado like -> DAR LIKE ---
        const newLikeRef = userLikesCollectionRef.doc(); // Generar nuevo ID para el like
        transaction.set(newLikeRef, {
          userId: userId,
          articleId: slug,
          timestamp: admin.firestore.Timestamp.now(),
        });
        // Incrementar contador
        if (likesCounterDoc.exists) {
          transaction.update(likesCounterRef, {count: admin.firestore.FieldValue.increment(1)});
          finalLikesCount++;
        } else {
          transaction.set(likesCounterRef, {count: 1}); // Crear contador si no existe
          finalLikesCount = 1;
        }
        liked = true; // Se dio el like
        console.log(`User ${userId} liked article ${slug}`);
      }

      // Devolvemos el nuevo contador y el estado del like
      return {success: true, newLikes: finalLikesCount, liked: liked};
    });

    // Enviar respuesta exitosa
    return res.status(200).json(resultData);
  } catch (error) {
    console.error("Error processing like/unlike transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Ocurrió un error al procesar el like/unlike.",
      error: error.message,
    });
  }
});
// --- FIN NUEVA FUNCIÓN handleLike ---

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.status(200).send("Hello from Firebase!");
});
