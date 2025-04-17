// src/utils/getPosts.js
import { getCollection } from "astro:content";

export const POSTS_PER_PAGE = 6;

export async function getSortedPosts() {
  const posts = await getCollection("blog");
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getPostsByTag(tag) {
  const posts = await getCollection("blog", (post) =>
    post.data.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase()
    )
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
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