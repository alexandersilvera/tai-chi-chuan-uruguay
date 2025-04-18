// src/utils/firebase.client.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let functions = getFunctions(app, "us-central1");

// Solo conecta a los emuladores si está en entorno local
if (typeof window !== 'undefined' && window.location.hostname === "localhost") {
  (async () => {
    const { connectFirestoreEmulator } = await import('firebase/firestore');
    connectFirestoreEmulator(db, 'localhost', 8080);
  })();
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export { functions };