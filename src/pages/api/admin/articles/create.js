

import { writeFile, mkdir } from 'fs/promises';
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
  
  const sanitizedTitle = title.replace(/'/g, "'\'");
  const sanitizedDescription = description.replace(/'/g, "'\'");
  const sanitizedAuthor = author.replace(/'/g, "'\'");
  
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
    // **INICIO DEL PARCHE DE SEGURIDAD**
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    // **FIN DEL PARCHE DE SEGURIDAD**

    const articleData = await request.json();
    
    const { title, description, tags, content } = articleData;
    if (!title || !description || !tags || !content) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: title, description, tags, content' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const slug = generateSlug(title);
    const filename = `${slug}.md`;
    const blogDir = join(process.cwd(), 'src', 'content', 'blog');
    const filePath = join(blogDir, filename);

    if (existsSync(filePath)) {
      return new Response(JSON.stringify({ 
        error: 'An article with this title already exists' 
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!existsSync(blogDir)) {
      await mkdir(blogDir, { recursive: true });
    }

    const markdownContent = createMarkdownContent(articleData);

    await writeFile(filePath, markdownContent, 'utf8');

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
