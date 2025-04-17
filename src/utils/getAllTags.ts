import { getCollection } from "astro:content";  


export async function getAllTags() {
    const posts = await getCollection("blog");
    const tagMap = new Map();
    
    posts.forEach(post => {
      post.data.tags.forEach(tag => {
        const normalizedTag = tag.toLowerCase();
        tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
      });
    });
    
    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1]);
  }