
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

    // 2. Usar una consulta de grupo de colecciones para obtener todos los comentarios
    const commentsSnapshot = await adminDB.collectionGroup('comments').get();
    
    const comments = [];
    for (const doc of commentsSnapshot.docs) {
        const commentData = doc.data();
        // Asegurarse de que el comentario tiene los datos necesarios antes de procesar
        if (!commentData.userId || !commentData.timestamp) continue;

        const articleRef = doc.ref.parent.parent; // Referencia al documento del post
        const userRef = adminDB.collection('users').doc(commentData.userId);

        // Obtener datos del artículo y del usuario
        const articleDoc = await articleRef.get();
        const userDoc = await userRef.get();

        comments.push({
            id: doc.id,
            text: commentData.text,
            timestamp: commentData.timestamp.toDate().toISOString(),
            article: {
                id: articleRef.id,
                slug: articleRef.id, // Asumiendo que el id del post es el slug
                title: articleDoc.exists && articleDoc.data().title ? articleDoc.data().title : 'Artículo no encontrado'
            },
            author: {
                id: userRef.id,
                name: userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : 'Usuario desconocido',
                email: userDoc.exists && userDoc.data().email ? userDoc.data().email : '-',
                avatar: userDoc.exists && userDoc.data().photoURL ? userDoc.data().photoURL : '/default-avatar.svg'
            },
            status: commentData.status || 'pending' // Usar estado real o 'pending' por defecto
        });
    }

    // 3. Ordenar los comentarios manualmente en el servidor
    comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return new Response(JSON.stringify({ comments }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error listando comentarios:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al listar los comentarios.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
