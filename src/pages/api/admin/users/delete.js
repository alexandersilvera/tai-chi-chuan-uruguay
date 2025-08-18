// API endpoint para eliminar un usuario y todos sus datos asociados
import { adminDB, adminAuth } from '@/lib/firebase/admin.js';

export const prerender = false;

// Función auxiliar para verificar autenticación de admin
async function verifyAdminAuth(request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Token de autenticación requerido', status: 401 };
  }

  const token = authHeader.substring(7);
  
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    
    // Verificar si el usuario tiene permisos de admin
    const userDoc = await adminDB.collection('users').doc(decodedToken.uid).get();
    if (!userDoc.exists || !userDoc.data().isAdmin) {
      return { error: 'Permisos de administrador requeridos', status: 403 };
    }
    
    return { user: decodedToken, userDoc: userDoc.data() };
  } catch (error) {
    return { error: 'Token inválido', status: 401 };
  }
}

export async function DELETE({ request }) {
  try {
    // Verificar que tenemos conexión con Firebase Admin
    if (!adminDB || !adminAuth) {
      return new Response(JSON.stringify({
        error: "Servicios de Firebase Admin no disponibles. Verifica la configuración."
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({
        error: authResult.error
      }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener datos del request
    const { userId } = await request.json();

    if (!userId || typeof userId !== 'string') {
      return new Response(JSON.stringify({
        error: "Se requiere userId como string."
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prevenir que un admin se elimine a sí mismo
    if (authResult.user.uid === userId) {
      return new Response(JSON.stringify({
        error: "No puedes eliminar tu propia cuenta de administrador."
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar que el usuario existe
    const userDocRef = adminDB.collection('users').doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return new Response(JSON.stringify({
        error: "Usuario no encontrado en la base de datos."
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userData = userDoc.data();
    let deletionSummary = {
      userId: userId,
      userEmail: userData.email || 'Desconocido',
      userName: userData.displayName || 'Sin nombre',
      deletedComments: 0,
      deletedLikes: 0,
      deletedUserLikes: 0,
      deletedBy: authResult.user.email,
      deletedAt: new Date().toISOString(),
      errors: []
    };

    // 1. Eliminar todos los comentarios del usuario en todas las colecciones
    try {
      const commentsQuery = adminDB.collectionGroup('comments').where('userId', '==', userId);
      const commentsSnapshot = await commentsQuery.get();
      
      deletionSummary.deletedComments = commentsSnapshot.size;
      
      // Eliminar cada comentario
      const commentDeletePromises = commentsSnapshot.docs.map(commentDoc => 
        commentDoc.ref.delete()
      );
      await Promise.all(commentDeletePromises);
      
    } catch (error) {
      console.error('Error eliminando comentarios:', error);
      deletionSummary.errors.push('Error al eliminar comentarios');
    }

    // 2. Eliminar todos los likes del usuario en las colecciones globales
    try {
      const likesQuery = adminDB.collectionGroup('likes').where('userId', '==', userId);
      const likesSnapshot = await likesQuery.get();
      
      deletionSummary.deletedLikes = likesSnapshot.size;
      
      // Eliminar cada like
      const likeDeletePromises = likesSnapshot.docs.map(likeDoc => 
        likeDoc.ref.delete()
      );
      await Promise.all(likeDeletePromises);
      
    } catch (error) {
      console.error('Error eliminando likes globales:', error);
      deletionSummary.errors.push('Error al eliminar likes globales');
    }

    // 3. Eliminar la subcollección de likes del usuario
    try {
      const userLikesRef = adminDB.collection('users').doc(userId).collection('likes');
      const userLikesSnapshot = await userLikesRef.get();
      
      deletionSummary.deletedUserLikes = userLikesSnapshot.size;
      
      // Eliminar cada like de la subcollección del usuario
      const userLikeDeletePromises = userLikesSnapshot.docs.map(likeDoc => 
        likeDoc.ref.delete()
      );
      await Promise.all(userLikeDeletePromises);
      
    } catch (error) {
      console.error('Error eliminando likes del usuario:', error);
      deletionSummary.errors.push('Error al eliminar likes del usuario');
    }

    // 4. Eliminar el documento del usuario de Firestore
    try {
      await userDocRef.delete();
    } catch (error) {
      console.error('Error eliminando documento del usuario:', error);
      deletionSummary.errors.push('Error al eliminar documento del usuario');
    }

    // 5. Eliminar el usuario de Firebase Auth
    try {
      await adminAuth.deleteUser(userId);
    } catch (error) {
      console.error('Error eliminando usuario de Auth:', error);
      // No agregamos esto como error crítico porque el usuario podría no existir en Auth
      deletionSummary.errors.push('Usuario no encontrado en Firebase Auth (puede ser normal)');
    }

    // Log de auditoría
    console.log(`Admin ${authResult.user.email} eliminó usuario ${deletionSummary.userEmail} (${userId})`);
    console.log('Resumen de eliminación:', deletionSummary);

    // Verificar si hubo errores críticos
    const criticalErrors = deletionSummary.errors.filter(error => 
      !error.includes('Firebase Auth')
    );

    if (criticalErrors.length > 0) {
      return new Response(JSON.stringify({
        success: false,
        error: "Error parcial al eliminar usuario",
        summary: deletionSummary
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Usuario eliminado exitosamente",
      summary: deletionSummary
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en delete user:', error);
    
    return new Response(JSON.stringify({
      error: "Error interno del servidor al eliminar usuario.",
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Métodos no permitidos
export async function GET() {
  return new Response(JSON.stringify({
    error: "Método no permitido. Usa DELETE."
  }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST() {
  return new Response(JSON.stringify({
    error: "Método no permitido. Usa DELETE."
  }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
} 