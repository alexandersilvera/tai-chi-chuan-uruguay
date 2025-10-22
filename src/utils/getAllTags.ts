import { adminDB } from "@/lib/firebase/admin";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // elimina tildes
    .replace(/\s+/g, '-') // espacios a guiones
    .replace(/[^\w-]+/g, ''); // elimina caracteres especiales
}

export async function getAllTags() {
  try {
    // Obtener todos los artículos publicados de Firestore
    const articlesSnapshot = await adminDB.collection('articles')
      .where('status', '==', 'published')
      .get();

    const tagMap = new Map<string, number>();

    articlesSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const tags = data.tags;

      if (Array.isArray(tags)) {
        tags.forEach((tag: string) => {
          if (typeof tag === 'string') {
            const normalizedTag = slugify(tag);
            tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
          }
        });
      }
    });

    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1]);
  } catch (error) {
    console.error('Error getting tags from Firestore:', error);
    return [];
  }
}