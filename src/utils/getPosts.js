// src/utils/getPosts.js
import { adminDB } from '@/lib/firebase/admin.js';

export const POSTS_PER_PAGE = 9;

export async function getSortedPosts() {
  try {
    const articlesSnapshot = await adminDB.collection('articles')
      .where('status', '==', 'published')
      .get();

    const posts = await Promise.all(articlesSnapshot.docs.map(async doc => {
      const data = doc.data();

      // Normalizar el slug a minúsculas para buscar en la colección 'likes'
      const normalizedSlug = doc.id.toLowerCase();

      // Obtener el conteo de likes desde la colección 'likes'
      let likesCount = 0;
      try {
        const likesDoc = await adminDB.collection('likes').doc(normalizedSlug).get();
        if (likesDoc.exists) {
          likesCount = likesDoc.data().count || 0;
          console.log(`[getSortedPosts] Article ${doc.id} (normalized: ${normalizedSlug}) has ${likesCount} likes`);
        } else {
          console.log(`[getSortedPosts] No likes document found for ${doc.id} (normalized: ${normalizedSlug})`);
        }
      } catch (error) {
        console.error(`Error getting likes for ${doc.id}:`, error);
      }

      return {
        slug: doc.id,
        data: {
          title: data.title || 'Sin título',
          description: data.description || '',
          pubDate: data.pubDate ? new Date(data.pubDate) : new Date(),
          heroImage: data.heroImage || '/images/banner-web-1.png',
          tags: Array.isArray(data.tags) ? data.tags : [],
          author: data.author || 'Admin',
          initialLikes: likesCount,
          content: data.content || '',
        }
      };
    }));

    return posts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
  } catch (error) {
    console.error('Error getting posts from Firestore:', error);
    return [];
  }
}

export async function getPostsByTag(tag) {
  try {
    const articlesSnapshot = await adminDB.collection('articles')
      .where('status', '==', 'published')
      .get();

    const posts = await Promise.all(articlesSnapshot.docs.map(async doc => {
      const data = doc.data();

      // Normalizar el slug a minúsculas para buscar en la colección 'likes'
      const normalizedSlug = doc.id.toLowerCase();

      // Obtener el conteo de likes desde la colección 'likes'
      let likesCount = 0;
      try {
        const likesDoc = await adminDB.collection('likes').doc(normalizedSlug).get();
        if (likesDoc.exists) {
          likesCount = likesDoc.data().count || 0;
        }
      } catch (error) {
        console.error(`Error getting likes for ${doc.id}:`, error);
      }

      return {
        slug: doc.id,
        data: {
          title: data.title || 'Sin título',
          description: data.description || '',
          pubDate: data.pubDate ? new Date(data.pubDate) : new Date(),
          heroImage: data.heroImage || '/images/banner-web-1.png',
          tags: Array.isArray(data.tags) ? data.tags : [],
          author: data.author || 'Admin',
          initialLikes: likesCount,
          content: data.content || '',
        }
      };
    }));

    const filteredPosts = posts.filter(post =>
      post.data.tags.some(
        (postTag) => postTag.toLowerCase() === tag.toLowerCase()
      )
    );

    return filteredPosts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
  } catch (error) {
    console.error('Error getting posts by tag from Firestore:', error);
    return [];
  }
}

export function getPagination(posts, currentPage) {
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return {
    currentPage: currentPage,
    totalPages: totalPages,
    posts: posts.slice(startIndex, endIndex),
  };
}