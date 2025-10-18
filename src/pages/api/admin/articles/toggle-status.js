
import { readFile, writeFile } from 'fs/promises';
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

// Función para formatear la fecha como YYYY-MM-DD
function getFormattedDate() {
  return new Date().toISOString().split('T')[0];
}

export async function POST({ request }) {
  try {
    // 1. Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Obtener datos del cuerpo de la solicitud
    const { filename, currentStatus } = await request.json();
    if (!filename || !currentStatus) {
      return new Response(JSON.stringify({ error: 'Se requiere el nombre del archivo (filename) y el estado actual (currentStatus).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Construir la ruta y verificar que el archivo existe
    const blogDir = join(process.cwd(), 'src', 'content', 'blog');
    const filePath = join(blogDir, filename);

    if (!existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'El artículo no existe.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Leer el contenido del archivo
    const fileContent = await readFile(filePath, 'utf8');
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
    const match = fileContent.match(frontmatterRegex);

    if (!match) {
        return new Response(JSON.stringify({ error: 'Frontmatter inválido o no encontrado en el artículo.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    let frontmatter = match[1];
    let newStatus = '';
    
    // 5. Modificar el frontmatter según el estado
    if (currentStatus === 'draft') {
      // Publicar: añadir o actualizar pubDate
      newStatus = 'published';
      if (frontmatter.includes('pubDate:')) {
        frontmatter = frontmatter.replace(/pubDate:.*/, `pubDate: '${getFormattedDate()}'`);
      } else {
        frontmatter += `\npubDate: '${getFormattedDate()}'`;
      }
    } else { // currentStatus is 'published'
      // Despublicar: eliminar pubDate
      newStatus = 'draft';
      frontmatter = frontmatter.replace(/pubDate:.*\r?\n?/, '');
    }

    const newFileContent = fileContent.replace(frontmatterRegex, `---\n${frontmatter.trim()}\n---\n`);

    // 6. Escribir el archivo actualizado
    await writeFile(filePath, newFileContent, 'utf8');

    return new Response(JSON.stringify({ 
      success: true, 
      message: `El estado del artículo '${filename}' se actualizó a '${newStatus}'.`,
      newStatus
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error actualizando el estado del artículo:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al actualizar el estado.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
