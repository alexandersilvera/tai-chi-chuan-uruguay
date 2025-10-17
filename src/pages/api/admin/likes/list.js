
import { adminDB, adminAuth } from '@/lib/firebase/admin.js';

export const prerender = false;

// Función de seguridad para verificar que el solicitante es un administrador
async function verifyAdminAuth(request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Token de autenticación requerido', status: 401 };
  }
  const token = authHeader.substring(7);
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userDoc = await adminDB.collection('users').doc(decodedToken.uid).get();
    if (!userDoc.exists || !userDoc.data().isAdmin) {
      return { error: 'Permisos de administrador requeridos', status: 403 };
    }
    return { user: decodedToken };
  } catch (error) {
    return { error: 'Token inválido o expirado', status: 401 };
  }
}

export async function GET({ request }) {
  try {
    // 1. Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Usar una consulta de grupo para obtener todos los likes
    const likesSnapshot = await adminDB.collectionGroup('likes').get();
    
    const likes = [];
    const userCache = new Map();
    const articleCache = new Map();

    for (const doc of likesSnapshot.docs) {
        const likeData = doc.data();
        // Omitir documentos que no tengan un userId (no son likes de posts) o timestamp
        if (!likeData.userId || !likeData.timestamp) continue;

        const articleRef = doc.ref.parent.parent;
        const userId = likeData.userId;

        // Solo procesar likes que están dentro de la colección de posts
        if (articleRef.parent.id !== 'posts') continue;

        // Obtener datos del usuario (con caché)
        let authorData;
        if (userCache.has(userId)) {
            authorData = userCache.get(userId);
        } else {
            const userDoc = await adminDB.collection('users').doc(userId).get();
            authorData = userDoc.exists ? userDoc.data() : null;
            userCache.set(userId, authorData);
        }

        // Obtener datos del artículo (con caché)
        let articleData;
        if (articleCache.has(articleRef.id)) {
            articleData = articleCache.get(articleRef.id);
        } else {
            const articleDoc = await articleRef.get();
            articleData = articleDoc.exists ? articleDoc.data() : null;
            articleCache.set(articleRef.id, articleData);
        }

        likes.push({
            id: doc.id, // El id del like es el userId
            timestamp: likeData.timestamp.toDate().toISOString(),
            article: {
                id: articleRef.id,
                slug: articleRef.id,
                title: articleData ? articleData.title : 'Artículo no encontrado'
            },
            user: {
                id: userId,
                name: authorData ? authorData.displayName : 'Usuario desconocido',
                email: authorData ? authorData.email : '-',
                avatar: authorData ? authorData.photoURL : '/default-avatar.svg'
            }
        });
    }

    // Ordenar por fecha descendente
    likes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return new Response(JSON.stringify({ likes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error listando likes:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al listar los likes.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
