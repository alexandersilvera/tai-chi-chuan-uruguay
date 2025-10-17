
import { unlink } from 'fs/promises';
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

export async function DELETE({ request }) {
  try {
    // 1. Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({ error: authResult.error }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Obtener el nombre del archivo del cuerpo de la solicitud
    const { filename } = await request.json();
    if (!filename || typeof filename !== 'string') {
      return new Response(JSON.stringify({ error: 'Se requiere el nombre del archivo (filename).' }), {
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

    // 4. Eliminar el archivo
    await unlink(filePath);

    // TODO: En una futura mejora, se podrían eliminar los comentarios y likes asociados de Firestore.

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Artículo '${filename}' eliminado exitosamente.`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error eliminando el artículo:', error);
    return new Response(JSON.stringify({ 
      error: 'Error en el servidor al eliminar el artículo.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Métodos no permitidos
export async function GET() {
  return new Response(JSON.stringify({ error: "Método no permitido. Usa DELETE." }), { status: 405 });
}
export async function POST() {
  return new Response(JSON.stringify({ error: "Método no permitido. Usa DELETE." }), { status: 405 });
}
