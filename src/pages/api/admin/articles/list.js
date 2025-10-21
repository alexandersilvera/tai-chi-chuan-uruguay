import { adminDB } from '@/lib/firebase/admin.js';

export const prerender = false;

function calculateReadTime(content) {
  if (!content) return '1 min';
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  return `${readTime} min`;
}

export async function GET() {
  try {
    // Obtener todos los artículos de Firestore
    const articlesSnapshot = await adminDB.collection('articles').get();

    const articles = await Promise.all(
      articlesSnapshot.docs.map(async (doc) => {
        const data = doc.data();
        const slug = doc.id;

        // Obtener conteo de comentarios y likes de la colección posts
        let commentsCount = 0;
        let likesCount = 0;

        try {
          const commentsSnapshot = await adminDB.collection('posts').doc(slug).collection('comments').get();
          commentsCount = commentsSnapshot.size;

          const likesSnapshot = await adminDB.collection('posts').doc(slug).collection('likes').get();
          likesCount = likesSnapshot.size;
        } catch (error) {
          console.warn(`Error obteniendo stats para ${slug}:`, error);
        }

        return {
          id: slug,
          title: data.title || 'Sin título',
          slug,
          description: data.description || '',
          author: data.author || 'Admin',
          publishDate: data.pubDate || null,
          lastModified: data.updatedAt?.toDate?.()?.toISOString() || data.pubDate || new Date().toISOString(),
          status: data.status || 'draft',
          tags: Array.isArray(data.tags) ? data.tags : [],
          readTime: calculateReadTime(data.content),
          image: data.heroImage || '/images/banner-web-1.png',
          likes: likesCount,
          comments: commentsCount,
          views: 0 // TODO: Get from analytics
        };
      })
    );

    // Sort by last modified (newest first)
    articles.sort((a, b) => {
      const dateA = new Date(a.lastModified || 0);
      const dateB = new Date(b.lastModified || 0);
      return dateB - dateA;
    });

    return new Response(JSON.stringify({ articles }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error listing articles:', error);
    return new Response(JSON.stringify({
      error: 'Failed to list articles from Firestore',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}