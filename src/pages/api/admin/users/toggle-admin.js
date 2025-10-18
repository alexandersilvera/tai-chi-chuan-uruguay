// API endpoint para cambiar el estado de administrador de un usuario
import { adminDB, adminAuth } from '@/lib/firebase/admin.js';

export const prerender = false;

// Función auxiliar para verificar autenticación de admin
async function verifyAdminAuth(request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Token de autenticación requerido', status: 401 };
  }

  const token = authHeader.substring(7);
  
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    
    // Verificar si el usuario tiene permisos de admin
    const userDoc = await adminDB.collection('users').doc(decodedToken.uid).get();
    if (!userDoc.exists || !userDoc.data().isAdmin) {
      return { error: 'Permisos de administrador requeridos', status: 403 };
    }
    
    return { user: decodedToken, userDoc: userDoc.data() };
  } catch (error) {
    return { error: 'Token inválido', status: 401 };
  }
}

export async function POST({ request }) {
  try {
    // Verificar que tenemos conexión con Firebase Admin
    if (!adminDB || !adminAuth) {
      return new Response(JSON.stringify({
        error: "Servicios de Firebase Admin no disponibles. Verifica la configuración."
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar autenticación de administrador
    const authResult = await verifyAdminAuth(request);
    if (authResult.error) {
      return new Response(JSON.stringify({
        error: authResult.error
      }), {
        status: authResult.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener datos del request
    const { userId, isAdmin } = await request.json();

    if (!userId || typeof isAdmin !== 'boolean') {
      return new Response(JSON.stringify({
        error: "Datos inválidos. Se requiere userId (string) e isAdmin (boolean)."
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prevenir que un admin se quite sus propios permisos
    if (authResult.user.uid === userId && !isAdmin) {
      return new Response(JSON.stringify({
        error: "No puedes quitar tus propios permisos de administrador."
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar que el usuario existe en Firestore
    const userDocRef = adminDB.collection('users').doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return new Response(JSON.stringify({
        error: "Usuario no encontrado en la base de datos."
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verificar que el usuario existe en Firebase Auth
    let authUser;
    try {
      authUser = await adminAuth.getUser(userId);
    } catch (authError) {
      return new Response(JSON.stringify({
        error: "Usuario no encontrado en Firebase Auth."
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Actualizar documento en Firestore
    const updateData = {
      isAdmin: isAdmin,
      adminStatusUpdated: new Date(),
      updatedBy: authResult.user.uid
    };

    // Si se está otorgando permisos de admin, agregar timestamp
    if (isAdmin) {
      updateData.adminSince = new Date();
    } else {
      // Si se están quitando permisos, limpiar adminSince
      updateData.adminSince = null;
    }

    await userDocRef.update(updateData);

    // Actualizar custom claims en Firebase Auth
    await adminAuth.setCustomUserClaims(userId, { 
      admin: isAdmin 
    });

    console.log(`Admin ${authResult.user.email} ${isAdmin ? 'otorgó' : 'quitó'} permisos de admin a ${authUser.email}`);

    return new Response(JSON.stringify({
      success: true,
      message: `Usuario ${isAdmin ? 'promovido a' : 'removido de'} administrador exitosamente.`,
      userId: userId,
      isAdmin: isAdmin,
      timestamp: updateData.adminStatusUpdated.toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en toggle-admin:', error);
    
    return new Response(JSON.stringify({
      error: "Error interno del servidor al cambiar permisos de administrador.",
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Método no permitido
export async function GET() {
  return new Response(JSON.stringify({
    error: "Método no permitido. Usa POST."
  }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
} 