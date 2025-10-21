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

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
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

    const articleData = await request.json();

    const { title, description, tags, content, heroImage, author } = articleData;
    if (!title || !description || !tags || !content) {
      return new Response(JSON.stringify({
        error: 'Missing required fields: title, description, tags, content'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const slug = generateSlug(title);

    // Verificar si ya existe un artículo con este slug
    const articleRef = adminDB.collection('articles').doc(slug);
    const existingArticle = await articleRef.get();

    if (existingArticle.exists) {
      return new Response(JSON.stringify({
        error: 'An article with this title already exists'
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Crear documento en Firestore
    const articleDoc = {
      title,
      description,
      content,
      tags: Array.isArray(tags) ? tags : [],
      heroImage: heroImage || '/images/banner-web-1.png',
      author: author || 'Admin',
      pubDate: new Date().toISOString(),
      status: 'draft',
      initialLikes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await articleRef.set(articleDoc);

    return new Response(JSON.stringify({
      success: true,
      slug,
      path: `/blog/${slug}`,
      message: 'Artículo creado exitosamente en Firestore'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error creating article:', error);
    return new Response(JSON.stringify({
      error: 'Failed to create article',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
