import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const prerender = false;

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function createMarkdownContent(articleData, originalPubDate = null) {
  const { title, description, tags, heroImage, author, content } = articleData;
  const pubDate = originalPubDate || formatDate(new Date());
  
  const frontmatter = `---
title: '${title}'
pubDate: '${pubDate}'
heroImage: '${heroImage || ''}'
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
initialLikes: 0
author: '${author}'
---

${content}`;

  return frontmatter;
}

function extractFrontmatter(markdownContent) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = markdownContent.match(frontmatterRegex);
  
  if (match) {
    const frontmatterText = match[1];
    const pubDateMatch = frontmatterText.match(/pubDate:\s*['"]([^'"]*)['"]/);
    return pubDateMatch ? pubDateMatch[1] : null;
  }
  
  return null;
}

export async function POST({ request }) {
  try {
    // Verify admin authentication
    // const session = await verifyAdminSession(request);
    // if (!session) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' }
    //   });
    // }

    const { filename, articleData } = await request.json();
    
    // Validate required fields
    const { title, description, tags, content } = articleData;
    if (!filename || !title || !description || !tags || !content) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: filename, title, description, tags, content' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const blogDir = join(process.cwd(), 'src', 'content', 'blog');
    const filePath = join(blogDir, filename);

    // Check if file exists
    if (!existsSync(filePath)) {
      return new Response(JSON.stringify({ 
        error: 'Article not found' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Read existing file to preserve original publication date
    let originalPubDate = null;
    try {
      const existingContent = await readFile(filePath, 'utf8');
      originalPubDate = extractFrontmatter(existingContent);
    } catch (error) {
      console.warn('Could not read existing file for pubDate preservation:', error);
    }

    // Create updated markdown content
    const markdownContent = createMarkdownContent(articleData, originalPubDate);

    // Write updated file
    await writeFile(filePath, markdownContent, 'utf8');

    // Extract slug from filename for response
    const slug = filename.replace('.md', '');

    return new Response(JSON.stringify({ 
      success: true, 
      slug,
      filename,
      path: `/blog/${slug}`
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