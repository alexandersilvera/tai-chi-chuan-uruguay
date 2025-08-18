import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const prerender = false;

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

function formatDate(date) {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

function createMarkdownContent(articleData) {
  const { title, description, tags, heroImage, author, content } = articleData;
  const pubDate = formatDate(new Date());
  
  // Sanitizar el contenido para evitar problemas con quotes
  const sanitizedTitle = title.replace(/'/g, "\\'");
  const sanitizedDescription = description.replace(/'/g, "\\'");
  const sanitizedAuthor = author.replace(/'/g, "\\'");
  
  const frontmatter = `---
title: '${sanitizedTitle}'
description: '${sanitizedDescription}'
pubDate: '${pubDate}'
heroImage: '${heroImage || ''}'
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
initialLikes: 0
author: '${sanitizedAuthor}'
---

${content}`;

  return frontmatter;
}

export async function POST({ request }) {
  try {
    // Verify admin authentication (you might want to implement this)
    // const session = await verifyAdminSession(request);
    // if (!session) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' }
    //   });
    // }

    let articleData;
    try {
      const body = await request.text();
      console.log('Raw request body:', body);
      articleData = JSON.parse(body);
      console.log('Parsed article data:', articleData);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return new Response(JSON.stringify({ 
        error: 'Invalid JSON data',
        details: parseError.message 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate required fields
    const { title, description, tags, content } = articleData;
    if (!title || !description || !tags || !content) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: title, description, tags, content' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Validation passed, generating slug...');
    
    // Generate slug and filename
    const slug = generateSlug(title);
    const filename = `${slug}.md`;
    const blogDir = join(process.cwd(), 'src', 'content', 'blog');
    const filePath = join(blogDir, filename);

    console.log('Generated paths:', { slug, filename, blogDir, filePath });

    // Check if file already exists
    if (existsSync(filePath)) {
      console.log('File already exists:', filePath);
      return new Response(JSON.stringify({ 
        error: 'An article with this title already exists' 
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Ensure blog directory exists
    if (!existsSync(blogDir)) {
      console.log('Creating blog directory:', blogDir);
      await mkdir(blogDir, { recursive: true });
    }

    console.log('Creating markdown content...');
    // Create markdown content
    const markdownContent = createMarkdownContent(articleData);
    console.log('Markdown content created, length:', markdownContent.length);

    console.log('Writing file to:', filePath);
    // Write file
    await writeFile(filePath, markdownContent, 'utf8');
    console.log('File written successfully');

    return new Response(JSON.stringify({ 
      success: true, 
      slug,
      filename,
      path: `/blog/${slug}`
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