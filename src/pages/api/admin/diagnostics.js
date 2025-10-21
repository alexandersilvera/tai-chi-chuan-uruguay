import { adminDB, adminAuth, adminApp } from '@/lib/firebase/admin.js';

export const prerender = false;

export async function GET() {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
    firebaseAdmin: {
      appInitialized: !!adminApp,
      authAvailable: !!adminAuth,
      dbAvailable: !!adminDB,
    },
    environmentVariables: {
      FIREBASE_PROJECT_ID: !!process.env.FIREBASE_PROJECT_ID,
      FIREBASE_CLIENT_EMAIL: !!process.env.FIREBASE_CLIENT_EMAIL,
      FIREBASE_PRIVATE_KEY: !!process.env.FIREBASE_PRIVATE_KEY,
      FIREBASE_PRIVATE_KEY_length: process.env.FIREBASE_PRIVATE_KEY?.length || 0,
      FIREBASE_PRIVATE_KEY_startsCorrectly: process.env.FIREBASE_PRIVATE_KEY?.includes('BEGIN PRIVATE KEY') || false,
    }
  };

  // Test básico de Firebase Admin
  if (adminDB) {
    try {
      // Intentar una operación simple
      const testRef = adminDB.collection('_diagnostics').doc('test');
      await testRef.set({ test: true, timestamp: new Date() });
      diagnostics.firebaseAdmin.writeTest = 'SUCCESS';
    } catch (error) {
      diagnostics.firebaseAdmin.writeTest = 'FAILED';
      diagnostics.firebaseAdmin.writeError = error.message;
    }
  }

  return new Response(JSON.stringify(diagnostics, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
