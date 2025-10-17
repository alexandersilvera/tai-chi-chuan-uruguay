
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

export async function DELETE({ request }) {
  try {
    // 1. Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Obtener IDs del cuerpo de la solicitud
    const { articleId, userId } = await request.json();
    if (!articleId || !userId) {
      return new Response(JSON.stringify({ error: 'Se requiere articleId y userId.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Crear referencias a los dos documentos de like
    const postLikeRef = adminDB.collection('posts').doc(articleId).collection('likes').doc(userId);
    const userLikeRef = adminDB.collection('users').doc(userId).collection('likes').doc(articleId);

    // 4. Usar un batch para eliminar ambos documentos de forma atómica
    const batch = adminDB.batch();
    batch.delete(postLikeRef);
    batch.delete(userLikeRef);

    await batch.commit();

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Like del usuario '${userId}' en el artículo '${articleId}' eliminado exitosamente.`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error eliminando el like:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al eliminar el like.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
