export const prerender = false;

import { getStorage, getDownloadURL } from 'firebase-admin/storage';
import { adminDB, adminAuth, adminApp } from '@/lib/firebase/admin.js'; // MODIFICADO: Añadido adminDB y adminAuth
import { v4 as uuidv4 } from 'uuid';

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

    const formData = await request.formData();
    const imageFile = formData.get('image');

    if (!imageFile) {
      return new Response(JSON.stringify({ error: 'No image file provided.' }), { status: 400 });
    }

    const bucket = getStorage(adminApp).bucket();
    const fileExtension = imageFile.name.split('.').pop();
    const fileName = `articles/${uuidv4()}.${fileExtension}`;
    const file = bucket.file(fileName);

    const buffer = Buffer.from(await imageFile.arrayBuffer());

    await file.save(buffer, {
      metadata: {
        contentType: imageFile.type,
      },
    });

    const publicUrl = await getDownloadURL(file);

    return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });

  } catch (error) {
    console.error('Error uploading image:', error);
    return new Response(JSON.stringify({ error: 'Image upload failed.', details: error.message }), { status: 500 });
  }
}