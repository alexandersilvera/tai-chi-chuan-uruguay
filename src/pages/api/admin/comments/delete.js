// API para eliminar comentarios
import { adminDB, adminAuth } from '@/lib/firebase/admin.js';

export async function DELETE({ request }) {
  try {
    // Verificar autenticación
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ 
        error: 'Token de autorización requerido' 
      }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = authHeader.substring(7);
    let decodedToken;
    
    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch (error) {
      console.error('Token inválido:', error);
      return new Response(JSON.stringify({ 
        error: 'Token de autorización inválido' 
      }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar permisos de administrador
    const userDoc = await adminDB.collection('users').doc(decodedToken.uid).get();
    const userData = userDoc.data();
    
    if (!userData?.isAdmin) {
      return new Response(JSON.stringify({ 
        error: 'Permisos de administrador requeridos' 
      }), { 
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener datos de la request
    const { commentId, articleId } = await request.json();

    if (!commentId || !articleId) {
      return new Response(JSON.stringify({ 
        error: 'commentId y articleId son requeridos' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Buscar el comentario
    const commentRef = adminDB.collection('articles').doc(articleId).collection('comments').doc(commentId);
    const commentDoc = await commentRef.get();

    if (!commentDoc.exists) {
      return new Response(JSON.stringify({ 
        error: 'Comentario no encontrado' 
      }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const commentData = commentDoc.data();

    // Eliminar el comentario
    await commentRef.delete();

    // Log de auditoría
    await adminDB.collection('audit_logs').add({
      action: 'comment_delete',
      adminId: decodedToken.uid,
      adminEmail: decodedToken.email,
      commentId: commentId,
      articleId: articleId,
      deletedCommentData: {
        text: commentData.text,
        userId: commentData.userId,
        timestamp: commentData.timestamp
      },
      timestamp: adminDB.FieldValue.serverTimestamp()
    });

    console.log(`✅ Comentario ${commentId} eliminado por ${decodedToken.email}`);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Comentario eliminado exitosamente',
      commentId
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error eliminando comentario:', error);
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor al eliminar el comentario' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 