// src/pages/api/auth/session.js
// Importar desde el módulo centralizado usando alias
import { adminAuth } from '@/lib/firebase/admin.js';

// Asegura que este endpoint sea renderizado en el servidor
export const prerender = false;

export async function POST({ request, cookies }) {
  // Verificar que adminAuth esté disponible
  if (!adminAuth) {
    console.error("API/session POST: Firebase Admin SDK no está inicializado correctamente (adminAuth es null).");
    return new Response("Error de configuración del servidor", { status: 503 });
  }

  try {
    const body = await request.json();
    const idToken = body.idToken;

    if (!idToken) {
      return new Response('ID token is required', { status: 400 });
    }

    // Establece la duración de la cookie de sesión (ej: 14 días)
    const expiresIn = 60 * 60 * 24 * 14 * 1000; // 14 días en milisegundos

    // Crea la cookie de sesión usando Firebase Admin SDK
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    // Definimos las opciones directamente aquí ahora
    const isProduction = import.meta.env.PROD;
    const cookieOptions = {
      path: "/",
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: isProduction, 
      sameSite: "lax", 
    };

    // Establece la cookie en la respuesta
    cookies.set("__session", sessionCookie, cookieOptions);

    console.log('API: Session cookie created successfully.');
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });

  } catch (error) {
    console.error('API: Error creating session cookie:', error);
    return new Response(`Authentication failed: ${error.message}`, { status: 401 });
  }
}

export async function DELETE({ request, cookies }) {
  // Verificar que adminAuth esté disponible
  if (!adminAuth) {
    console.error("API/session DELETE: Firebase Admin SDK no está inicializado correctamente (adminAuth es null).");
    return new Response("Error de configuración del servidor", { status: 503 });
  }

  try {
    // Obtén el token de sesión de la cookie actual para revocarlo
    const sessionCookie = cookies.get('__session')?.value;
    if (sessionCookie) {
      // Decodifica para obtener el UID y luego revoca las sesiones
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie).catch(() => null); // Ignora error si ya es inválida
      if (decodedClaims) {
        await adminAuth.revokeRefreshTokens(decodedClaims.sub); // 'sub' es el UID
        console.log(`API: Refresh tokens revoked for user ${decodedClaims.sub}`);
      }
    }

    // Elimina la cookie en el cliente
    cookies.delete('__session', { path: '/' });

    console.log('API: Session cookie deleted successfully.');
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });

  } catch (error) {
    console.error('API: Error deleting session cookie:', error);
    // Incluso si falla la revocación, intentamos borrar la cookie
     cookies.delete('__session', { path: '/' });
    return new Response(`Logout failed: ${error.message}`, { status: 500 });
  }
}

// Opcional: Manejar otros métodos (GET, PUT, etc.) si es necesario
export async function ALL({ request }) {
    if (request.method !== 'POST' && request.method !== 'DELETE') {
        return new Response('Method Not Allowed', { status: 405 });
    }
    // Si llegamos aquí, es POST o DELETE pero algo falló antes (improbable)
     return new Response('Internal Server Error', { status: 500 });
}
