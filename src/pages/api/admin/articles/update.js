

import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
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
  
  const frontmatter = `---\ntitle: '${title}'
description: '${description}'
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
    // **INICIO DEL PARCHE DE SEGURIDAD**
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    // **FIN DEL PARCHE DE SEGURIDAD**

    const { filename, articleData } = await request.json();
    
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

    if (!existsSync(filePath)) {
      return new Response(JSON.stringify({ 
        error: 'Article not found' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let originalPubDate = null;
    try {
      const existingContent = await readFile(filePath, 'utf8');
      originalPubDate = extractFrontmatter(existingContent);
    } catch (error) {
      console.warn('Could not read existing file for pubDate preservation:', error);
    }

    const markdownContent = createMarkdownContent(articleData, originalPubDate);

    await writeFile(filePath, markdownContent, 'utf8');

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
