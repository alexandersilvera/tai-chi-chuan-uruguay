import { adminDB, adminAuth } from '@/lib/firebase/admin.js';

export const prerender = false;

// Función de seguridad para verificar que el solicitante es un administrador
async function verifyAdminAuth(request) {
  // Verificar que Firebase Admin SDK esté disponible
  if (!adminAuth || !adminDB) {
    console.error('Firebase Admin SDK no está inicializado');
    return { error: 'Error de configuración del servidor', status: 500 };
  }

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
    console.error('Error verificando token:', error);
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

    // 2. Obtener el slug del artículo del cuerpo de la solicitud
    const { filename } = await request.json();
    if (!filename || typeof filename !== 'string') {
      return new Response(JSON.stringify({ error: 'Se requiere el nombre del archivo (filename).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Extraer el slug del filename (remover .md)
    const slug = filename.replace(/\.md$/, '');

    // 3. Verificar que el artículo existe en Firestore
    const articleRef = adminDB.collection('articles').doc(slug);
    const articleDoc = await articleRef.get();

    if (!articleDoc.exists) {
      return new Response(JSON.stringify({ error: 'El artículo no existe.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Eliminar el artículo de Firestore
    await articleRef.delete();

    // 5. Opcional: Eliminar comentarios y likes asociados
    // Eliminar comentarios
    const commentsSnapshot = await adminDB.collection('posts').doc(slug).collection('comments').get();
    const commentsBatch = adminDB.batch();
    commentsSnapshot.forEach(doc => {
      commentsBatch.delete(doc.ref);
    });
    await commentsBatch.commit();

    // Eliminar likes
    const likesSnapshot = await adminDB.collection('posts').doc(slug).collection('likes').get();
    const likesBatch = adminDB.batch();
    likesSnapshot.forEach(doc => {
      likesBatch.delete(doc.ref);
    });
    await likesBatch.commit();

    // Eliminar documento del post
    await adminDB.collection('posts').doc(slug).delete();

    return new Response(JSON.stringify({
      success: true,
      message: `Artículo '${slug}' eliminado exitosamente de Firestore.`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error eliminando el artículo:', error);
    console.error('Stack trace:', error.stack);
    return new Response(JSON.stringify({
      error: 'Error en el servidor al eliminar el artículo.',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Métodos no permitidos
export async function GET() {
  return new Response(JSON.stringify({ error: "Método no permitido. Usa DELETE." }), { status: 405 });
}
export async function POST() {
  return new Response(JSON.stringify({ error: "Método no permitido. Usa DELETE." }), { status: 405 });
}
