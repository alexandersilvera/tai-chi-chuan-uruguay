// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inicializa Firebase Admin solo si no está inicializado
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

exports.handleLike = functions.https.onRequest(async (req, res) => {
  // Permitir CORS para producción y desarrollo local
  const allowedOrigins = [
    "https://taichisun.com",
    "https://www.taichisun.com",
    "http://localhost:4321", // Añadir origen de desarrollo
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

  let slug;
  let userId;
  if (req.body) {
    // Permitir ambos formatos: {slug}, {slug, userId}, {data: {slug}}, {data: {slug, userId}}
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

  if (typeof slug !== "string" || !slug) {
    return res.status(400).json({success: false, message: "El slug es requerido y debe ser string."});
  }

  // Si solo se recibe slug, devolver el contador de likes
  if (!userId) {
    try {
      const likesDoc = await db.collection("likes").doc(slug).get();
      const count = likesDoc.exists ? (likesDoc.data().count || 0) : 0;
      return res.status(200).json({success: true, newLikes: count});
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error al consultar el contador de likes.",
        error: error.message,
      });
    }
  }

  // Si hay userId, sigue la lógica normal de like
  if (typeof userId !== "string" || !userId) {
    return res.status(400).json({success: false, message: "El userId es requerido y debe ser string."});
  }

  // --- Lógica Firestore protegida ---
  const likeLogRef = db.collection("likesLog").doc(`${slug}_${userId}`);
  const likesRef = db.collection("likes").doc(slug);

  try {
    const resultData = await db.runTransaction(async (transaction) => {
      const likeLogDoc = await transaction.get(likeLogRef);
      const likesDoc = await transaction.get(likesRef);

      if (likeLogDoc.exists) {
        return {success: false, message: "Ya has dado like a este artículo."};
      }

      transaction.set(likeLogRef, {timestamp: admin.firestore.Timestamp.now()});
      let newLikesCount;
      if (likesDoc.exists) {
        transaction.update(likesRef, {count: admin.firestore.FieldValue.increment(1)});
        newLikesCount = (likesDoc.data().count || 0) + 1;
      } else {
        transaction.set(likesRef, {count: 1});
        newLikesCount = 1;
      }
      return {success: true, newLikes: newLikesCount};
    });

    if (resultData.success) {
      return res.status(200).json(resultData);
    } else {
      return res.status(409).json(resultData); // 409 Conflict si ya existe
    }
  } catch (error) {
    // Error processing like, logging removido para producción
    return res.status(500).json({
      success: false,
      message: "Ocurrió un error al procesar el like.",
      error: error.message,
    });
  }
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.status(200).send("Hello from Firebase!");
});
