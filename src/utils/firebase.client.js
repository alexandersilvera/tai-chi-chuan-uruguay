// src/utils/firebase.client.js
import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// Configuración de Firebase usando variables de entorno públicas
// Solo en desarrollo mostramos las variables de entorno

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Inicializar solo si hay API key válida
let appInstance;
if (firebaseConfig.apiKey) {
  appInstance = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
} else {
  console.warn("Falta PUBLIC_FIREBASE_API_KEY, Firebase no se inicializará.");
}
export const app = appInstance;  // undefined si no se inicializa
// Este archivo exporta 'app' para uso en AuthContext y providers sociales.