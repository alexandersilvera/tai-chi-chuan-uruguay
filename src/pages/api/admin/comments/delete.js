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
    const { articleId, commentId } = await request.json();
    if (!articleId || !commentId) {
      return new Response(JSON.stringify({ error: 'Se requiere articleId y commentId.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Construir la referencia al documento y eliminarlo
    const commentRef = adminDB.collection('posts').doc(articleId).collection('comments').doc(commentId);
    
    // Opcional: verificar si el comentario existe antes de borrar
    const doc = await commentRef.get();
    if (!doc.exists) {
        return new Response(JSON.stringify({ error: 'El comentario no existe.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    await commentRef.delete();

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Comentario '${commentId}' eliminado exitosamente del artículo '${articleId}'.`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error eliminando el comentario:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al eliminar el comentario.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}