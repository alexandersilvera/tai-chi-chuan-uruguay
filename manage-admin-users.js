// Script para gestionar usuarios administradores
// Ejecutar con: node manage-admin-users.js [accion]
// Acciones: list, cleanup, remove-orphan

import dotenv from 'dotenv';
import { readFileSync } from 'fs';
dotenv.config();

// Función para leer el archivo .env manualmente
function loadEnvVars() {
  const envContent = readFileSync('.env', 'utf8');
  const envVars = {};
  
  const lines = envContent.split('\n');
  for (const line of lines) {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        let value = valueParts.join('=');
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        envVars[key.trim()] = value;
      }
    }
  }
  return envVars;
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

async function listAdminUsers() {
  console.log('👑 LISTANDO USUARIOS ADMINISTRADORES:\n');
  
  const usersSnapshot = await db.collection('users').where('isAdmin', '==', true).get();
  
  if (usersSnapshot.empty) {
    console.log('❌ No se encontraron usuarios administradores');
    return [];
  }
  
  const adminUsers = [];
  
  for (const doc of usersSnapshot.docs) {
    const userData = doc.data();
    const uid = doc.id;
    
    // Obtener información adicional de Firebase Auth
    let authInfo = null;
    try {
      authInfo = await auth.getUser(uid);
    } catch (error) {
      console.log(`⚠️  Usuario ${uid} existe en Firestore pero no en Firebase Auth`);
    }
    
    const adminUser = {
      uid,
      firestoreData: userData,
      authData: authInfo
    };
    
    adminUsers.push(adminUser);
    
    console.log(`👑 ADMINISTRADOR:`);
    console.log(`   🆔 UID: ${uid}`);
    console.log(`   📧 Email (Firestore): ${userData.email || 'No disponible'}`);
    console.log(`   📧 Email (Auth): ${authInfo?.email || 'No disponible'}`);
    console.log(`   📛 Nombre: ${userData.displayName || authInfo?.displayName || 'No disponible'}`);
    console.log(`   📅 Admin desde: ${userData.adminSince ? userData.adminSince.toDate() : 'No registrado'}`);
    console.log(`   🔍 Estado: ${authInfo ? '✅ Auth OK' : '❌ Solo en Firestore'}`);
    console.log('');
  }
  
  return adminUsers;
}

async function cleanupOrphanAdmin() {
  console.log('🧹 LIMPIANDO USUARIOS ADMINISTRADORES HUÉRFANOS:\n');
  
  const adminUsers = await listAdminUsers();
  const orphanUsers = adminUsers.filter(user => !user.authData);
  
  if (orphanUsers.length === 0) {
    console.log('✅ No se encontraron usuarios administradores huérfanos');
    return;
  }
  
  console.log(`⚠️  Encontrados ${orphanUsers.length} usuarios huérfanos:`);
  
  for (const user of orphanUsers) {
    console.log(`\n🗑️  Eliminando usuario huérfano:`);
    console.log(`   🆔 UID: ${user.uid}`);
    console.log(`   📧 Email: ${user.firestoreData.email || 'No disponible'}`);
    
    // Eliminar documento de Firestore
    await db.collection('users').doc(user.uid).delete();
    console.log(`   ✅ Eliminado de Firestore`);
  }
  
  console.log(`\n🎉 Limpieza completada. Eliminados ${orphanUsers.length} usuarios huérfanos.`);
}

async function removeSpecificUser(uid) {
  if (!uid) {
    console.error('❌ Debes proporcionar un UID para eliminar');
    return;
  }
  
  console.log(`🗑️  Eliminando usuario administrador: ${uid}`);
  
  try {
    // Verificar si existe en Firestore
    const userDoc = await db.collection('users').doc(uid).get();
    if (userDoc.exists) {
      await db.collection('users').doc(uid).delete();
      console.log('✅ Eliminado de Firestore');
    } else {
      console.log('⚠️  Usuario no encontrado en Firestore');
    }
    
    // Verificar si existe en Auth
    try {
      const authUser = await auth.getUser(uid);
      // NO eliminamos de Auth, solo removemos permisos de admin
      await auth.setCustomUserClaims(uid, { admin: false });
      console.log('✅ Permisos de admin removidos de Firebase Auth');
    } catch (error) {
      console.log('⚠️  Usuario no encontrado en Firebase Auth');
    }
    
  } catch (error) {
    console.error('❌ Error eliminando usuario:', error.message);
  }
}

// Función principal
async function main() {
  const action = process.argv[2] || 'list';
  const uid = process.argv[3];
  
  try {
    switch (action) {
      case 'list':
        await listAdminUsers();
        break;
        
      case 'cleanup':
        await cleanupOrphanAdmin();
        break;
        
      case 'remove':
        await removeSpecificUser(uid);
        break;
        
      default:
        console.log('❌ Acción no reconocida');
        console.log('Uso: node manage-admin-users.js [list|cleanup|remove] [uid]');
        console.log('');
        console.log('Acciones:');
        console.log('  list    - Listar todos los usuarios administradores');
        console.log('  cleanup - Eliminar usuarios administradores huérfanos');
        console.log('  remove  - Eliminar usuario específico por UID');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    process.exit(0);
  }
}

main(); 