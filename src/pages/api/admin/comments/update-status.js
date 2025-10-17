
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

export async function POST({ request }) {
  try {
    // 1. Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Obtener datos del cuerpo de la solicitud
    const { articleId, commentId, action } = await request.json();
    if (!articleId || !commentId || !action) {
      return new Response(JSON.stringify({ error: 'Se requiere articleId, commentId y action.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validar la acción - por ahora solo 'approve'
    if (action !== 'approve') {
        return new Response(JSON.stringify({ error: `La acción '${action}' no es válida.` }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const newStatus = 'approved'; // Mapear acción a estado

    // 3. Construir la referencia al documento y actualizarlo
    const commentRef = adminDB.collection('posts').doc(articleId).collection('comments').doc(commentId);
    
    await commentRef.set({ status: newStatus }, { merge: true });

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Comentario '${commentId}' actualizado a '${newStatus}'.`,
      newStatus
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error actualizando estado del comentario:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al actualizar el estado.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
