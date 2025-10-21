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

    const { filename, articleData } = await request.json();

    const { title, description, tags, content, heroImage, author } = articleData;
    if (!filename || !title || !description || !tags || !content) {
      return new Response(JSON.stringify({
        error: 'Missing required fields: filename, title, description, tags, content'
      }), {
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
      return new Response(JSON.stringify({
        error: 'Article not found'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener datos existentes para preservar campos que no se editan
    const existingData = articleDoc.data();

    // Actualizar documento en Firestore
    const updatedArticleDoc = {
      title,
      description,
      content,
      tags: Array.isArray(tags) ? tags : [],
      heroImage: heroImage || existingData.heroImage || '/images/banner-web-1.png',
      author: author || existingData.author || 'Admin',
      pubDate: existingData.pubDate, // Preservar fecha original de publicación
      status: existingData.status, // Preservar estado
      initialLikes: existingData.initialLikes || 0,
      updatedAt: new Date(),
    };

    await articleRef.update(updatedArticleDoc);

    return new Response(JSON.stringify({
      success: true,
      slug,
      path: `/blog/${slug}`,
      message: 'Artículo actualizado exitosamente en Firestore'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error updating article:', error);
    return new Response(JSON.stringify({
      error: 'Failed to update article',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
