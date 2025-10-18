#!/usr/bin/env node

// Script para sincronizar usuarios de Firebase Auth con Firestore
// Crea documentos en Firestore para usuarios que solo existen en Auth

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Cargar variables de entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });

function loadEnvVars() {
  const requiredVars = ['FIREBASE_PROJECT_ID', 'FIREBASE_CLIENT_EMAIL', 'FIREBASE_PRIVATE_KEY'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('❌ Faltan las siguientes variables de entorno:', missing.join(', '));
    console.error('💡 Asegúrate de que el archivo .env esté configurado correctamente');
    process.exit(1);
  }
  
  return {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  };
}

const envVars = loadEnvVars();

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = {
  projectId: envVars.FIREBASE_PROJECT_ID,
  clientEmail: envVars.FIREBASE_CLIENT_EMAIL,
  privateKey: envVars.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);
const auth = getAuth(app);

async function syncAuthWithFirestore() {
  console.log('🔄 SINCRONIZANDO FIREBASE AUTH CON FIRESTORE\n');
  
  let authUsers = [];
  let nextPageToken;
  
  // Obtener todos los usuarios de Firebase Auth
  do {
    const listUsersResult = await auth.listUsers(1000, nextPageToken);
    authUsers = authUsers.concat(listUsersResult.users);
    nextPageToken = listUsersResult.pageToken;
  } while (nextPageToken);
  
  console.log(`👥 Usuarios en Firebase Auth: ${authUsers.length}`);
  
  // Obtener todos los usuarios de Firestore
  const usersSnapshot = await db.collection('users').get();
  const firestoreUserIds = new Set(usersSnapshot.docs.map(doc => doc.id));
  
  console.log(`📄 Usuarios en Firestore: ${firestoreUserIds.size}\n`);
  
  // Encontrar usuarios que están en Auth pero no en Firestore
  const missingUsers = authUsers.filter(user => !firestoreUserIds.has(user.uid));
  
  if (missingUsers.length === 0) {
    console.log('✅ Todos los usuarios de Auth ya tienen documentos en Firestore');
    return;
  }
  
  console.log(`🔍 Encontrados ${missingUsers.length} usuarios que necesitan sincronización:\n`);
  
  const batch = db.batch();
  let batchCount = 0;
  const maxBatchSize = 500; // Límite de Firestore
  
  for (const authUser of missingUsers) {
    console.log(`📝 Creando documento para: ${authUser.email || authUser.uid}`);
    
    const userDoc = {
      email: authUser.email || null,
      displayName: authUser.displayName || null,
      photoURL: authUser.photoURL || null,
      isAdmin: false, // Por defecto no son admin
      emailVerified: authUser.emailVerified || false,
      createdAt: new Date(authUser.metadata.creationTime),
      lastSignIn: authUser.metadata.lastSignInTime ? new Date(authUser.metadata.lastSignInTime) : null,
      syncedAt: new Date(),
      syncedBy: 'sync-script'
    };
    
    // Agregar al batch
    const userRef = db.collection('users').doc(authUser.uid);
    batch.set(userRef, userDoc);
    batchCount++;
    
    // Si el batch está lleno, ejecutarlo
    if (batchCount >= maxBatchSize) {
      await batch.commit();
      console.log(`✅ Batch de ${batchCount} usuarios creado`);
      batchCount = 0;
      // Crear un nuevo batch
      const newBatch = db.batch();
    }
  }
  
  // Ejecutar el batch restante si hay usuarios pendientes
  if (batchCount > 0) {
    await batch.commit();
    console.log(`✅ Batch final de ${batchCount} usuarios creado`);
  }
  
  console.log(`\n🎉 Sincronización completada!`);
  console.log(`📊 ${missingUsers.length} usuarios sincronizados desde Auth a Firestore`);
  
  // Verificar resultado final
  const finalSnapshot = await db.collection('users').get();
  console.log(`📄 Total de usuarios en Firestore ahora: ${finalSnapshot.size}`);
}

async function showSyncStatus() {
  console.log('📊 ESTADO DE SINCRONIZACIÓN\n');
  
  // Contar usuarios en Auth
  let authCount = 0;
  let nextPageToken;
  
  do {
    const listUsersResult = await auth.listUsers(1000, nextPageToken);
    authCount += listUsersResult.users.length;
    nextPageToken = listUsersResult.pageToken;
  } while (nextPageToken);
  
  // Contar usuarios en Firestore
  const usersSnapshot = await db.collection('users').get();
  const firestoreCount = usersSnapshot.size;
  
  console.log(`👥 Firebase Auth: ${authCount} usuarios`);
  console.log(`📄 Firestore: ${firestoreCount} usuarios`);
  console.log(`🔄 Estado: ${authCount === firestoreCount ? '✅ Sincronizado' : '⚠️ Desincronizado'}`);
  
  if (authCount !== firestoreCount) {
    console.log(`📝 Usuarios faltantes en Firestore: ${authCount - firestoreCount}`);
  }
}

// Ejecutar según el parámetro
const command = process.argv[2];

try {
  if (command === 'status') {
    await showSyncStatus();
  } else if (command === 'sync') {
    await syncAuthWithFirestore();
  } else {
    console.log('🔧 USO DEL SCRIPT:');
    console.log('   node sync-auth-firestore.js status  - Mostrar estado de sincronización');
    console.log('   node sync-auth-firestore.js sync    - Sincronizar usuarios de Auth a Firestore');
    console.log('');
    await showSyncStatus();
  }
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
} 