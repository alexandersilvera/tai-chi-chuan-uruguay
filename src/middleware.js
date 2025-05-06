// src/middleware.js
import { adminAuth, adminDB } from '@/lib/firebase/admin.js';
import { defineMiddleware } from 'astro:middleware';

// Define el middleware
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Si la ruta es del dashboard
  if (url.pathname.startsWith('/dashboard')) {
    console.log(`Middleware: Processing protected route: ${url.pathname}`);
    // Usamos context.cookies.get para obtener la cookie específica, esto sí es estándar en Astro
    const sessionCookie = context.cookies.get("__session")?.value; 

    if (!sessionCookie) {
      // Ajustamos el log para clarificar cómo se hizo la comprobación
      console.log("Middleware: No '__session' cookie found (checked via context.cookies.get). Redirecting to /");
      return context.redirect("/", 302); // Redirige a la página principal si no hay cookie
    }

    // Verificar que las instancias de Admin SDK estén disponibles
    if (!adminAuth || !adminDB) {
      console.error("Middleware: Firebase Admin SDK no está inicializado correctamente (adminAuth o adminDB son null). Revisa src/lib/firebase/admin.js y las variables de entorno.");
      // Devolver un error 503 (Servicio no disponible) podría ser más apropiado que 500
      return new Response("Error de configuración del servidor", { status: 503 });
    }

    try {
      console.log("Middleware: Found '__session' cookie, verifying...");
      // Usar adminAuth importado
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
      console.log("Middleware: Session cookie verified. UID:", decodedClaims.uid);

      // Usar adminDB importado
      const userDocRef = adminDB.collection("users").doc(decodedClaims.uid);
      const userDocSnap = await userDocRef.get();

      if (!userDocSnap.exists || userDocSnap.data()?.isAdmin !== true) {
        console.log(`Middleware: User ${decodedClaims.uid} is not an admin or Firestore doc missing/invalid. Redirecting to /`);
        // Borrar cookie si el usuario ya no es admin o el doc no existe
        context.cookies.delete('__session', { path: '/' });
        return context.redirect("/", 302); // No es admin, redirige
      }

      console.log(`Middleware: User ${decodedClaims.uid} is admin. Allowing access.`);
      // Adjuntar información del usuario al contexto para usar en la página
      context.locals.user = {
         uid: decodedClaims.uid,
         email: decodedClaims.email,
         isAdmin: true,
         // Puedes añadir más datos del token o Firestore si los necesitas en la página
         // Por ejemplo: displayName: userDocSnap.data()?.displayName 
      };

    } catch (error) {
      console.error("Middleware: Error verifying session cookie or checking admin status:", error.message);
      // Podría ser un error de verificación (cookie inválida/expirada) o de Firestore
      console.log("Middleware: Invalidating session and redirecting to /");
      // Borrar la cookie inválida o expirada
      context.cookies.delete('__session', { path: '/' });
      return context.redirect("/", 302); // Redirige si la cookie es inválida/expirada o hay error
    }
  }

  // Continuar con la siguiente función o renderizado de página si no es ruta protegida o si pasó la verificación
  console.log(`Middleware: Allowing request for ${url.pathname} to proceed.`);
  return next();
});
