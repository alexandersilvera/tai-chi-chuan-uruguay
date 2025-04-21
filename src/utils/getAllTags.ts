import { getCollection } from "astro:content";  


function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // elimina tildes
    .replace(/\s+/g, '-') // espacios a guiones
    .replace(/[^\w-]+/g, ''); // elimina caracteres especiales
}

export async function getAllTags() {
  const posts = await getCollection("blog");
  const tagMap = new Map<string, number>();

  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      const normalizedTag = slugify(tag);
      tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .sort((a, b) => b[1] - a[1]);
}