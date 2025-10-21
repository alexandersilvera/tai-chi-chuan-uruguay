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
    // Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener datos del cuerpo de la solicitud
    const { filename, currentStatus } = await request.json();
    if (!filename || !currentStatus) {
      return new Response(JSON.stringify({ error: 'Se requiere el nombre del archivo (filename) y el estado actual (currentStatus).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Extraer slug del filename
    const slug = filename.replace(/\.md$/, '');

    // Verificar que el artículo existe en Firestore
    const articleRef = adminDB.collection('articles').doc(slug);
    const articleDoc = await articleRef.get();

    if (!articleDoc.exists) {
      return new Response(JSON.stringify({ error: 'El artículo no existe.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Determinar el nuevo estado
    const newStatus = currentStatus === 'draft' ? 'published' : 'draft';

    // Actualizar el estado en Firestore
    const updateData = {
      status: newStatus,
      updatedAt: new Date(),
    };

    // Si se publica, actualizar pubDate si no existe
    if (newStatus === 'published') {
      const currentData = articleDoc.data();
      if (!currentData.pubDate) {
        updateData.pubDate = new Date().toISOString();
      }
    }

    await articleRef.update(updateData);

    return new Response(JSON.stringify({
      success: true,
      message: `El estado del artículo se actualizó a '${newStatus}'.`,
      newStatus
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error actualizando el estado del artículo:', error);
    return new Response(JSON.stringify({
      error: 'Error en el servidor al actualizar el estado.',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
