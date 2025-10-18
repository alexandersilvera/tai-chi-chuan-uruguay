// src/lib/firebase/admin.js
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Lee las credenciales desde las variables de entorno
// Asegúrate de que estas variables estén disponibles en tu entorno (ej. .env)
const serviceAccount = {
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
  // Asegúrate de que la clave privada en .env maneje correctamente los saltos de línea
  privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Añadir ? por si no está definida
};

// Verifica si las credenciales están completas
if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
  console.error('Firebase Admin SDK: Faltan credenciales en las variables de entorno (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY).');
  // Podrías lanzar un error aquí o manejarlo de otra forma si es crítico
  // throw new Error('Missing Firebase Admin credentials');
}

let app;

// Inicializa Firebase Admin solo si no se ha inicializado antes
if (getApps().length === 0 && serviceAccount.privateKey) { // Solo intentar inicializar si hay clave privada
  try {
    app = initializeApp({
      credential: cert(serviceAccount),
      storageBucket: `${serviceAccount.projectId}.appspot.com`
    });
    // console.log('Firebase Admin SDK inicializado correctamente (desde src/lib/firebase/admin.js).');
  } catch (error) {
    // console.error('Error inicializando Firebase Admin SDK (desde src/lib/firebase/admin.js):', error);
    // Considera cómo manejar este error crítico.
  }
} else if (serviceAccount.privateKey) {
  // Si ya está inicializado, simplemente obtén la instancia existente
  app = getApp();
  // // console.log('Firebase Admin SDK ya estaba inicializado.');
} else {
    console.warn('Firebase Admin SDK no se inicializó porque faltan credenciales.');
}

// Exporta las instancias necesarias (maneja el caso donde app no se inicializó)
export const adminApp = app;
export const adminAuth = app ? getAuth(app) : null;
export const adminDB = app ? getFirestore(app) : null;
