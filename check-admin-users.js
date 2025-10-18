// Script para verificar usuarios administradores
// Ejecutar con: node check-admin-users.js

// Cargar variables de entorno desde .env
import dotenv from 'dotenv';
dotenv.config();

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Configuración de Firebase Admin
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Inicializar Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);

async function checkAdminUsers() {
  try {
    console.log('🔍 Verificando usuarios administradores...\n');
    
    // Obtener todos los usuarios
    const usersSnapshot = await db.collection('users').get();
    
    if (usersSnapshot.empty) {
      console.log('❌ No se encontraron usuarios en la base de datos');
      console.log('💡 Primero debes registrar usuarios en tu aplicación');
      return;
    }
    
    console.log(`📊 Total de usuarios encontrados: ${usersSnapshot.size}\n`);
    
    let adminCount = 0;
    let regularCount = 0;
    
    // Revisar cada usuario
    usersSnapshot.forEach(doc => {
      const userData = doc.data();
      const isAdmin = userData.isAdmin === true;
      
      if (isAdmin) {
        adminCount++;
        console.log('👑 ADMINISTRADOR:');
      } else {
        regularCount++;
        console.log('👤 Usuario regular:');
      }
      
      console.log(`   📧 Email: ${userData.email || 'No disponible'}`);
      console.log(`   📛 Nombre: ${userData.displayName || 'No disponible'}`);
      console.log(`   🆔 UID: ${doc.id}`);
      console.log(`   🔐 Admin: ${isAdmin ? '✅ SÍ' : '❌ NO'}`);
      
      if (userData.adminSince) {
        console.log(`   📅 Admin desde: ${userData.adminSince.toDate()}`);
      }
      
      console.log(''); // Línea en blanco
    });
    
    // Resumen
    console.log('📈 RESUMEN:');
    console.log(`   👑 Administradores: ${adminCount}`);
    console.log(`   👤 Usuarios regulares: ${regularCount}`);
    console.log(`   📊 Total: ${adminCount + regularCount}`);
    
    if (adminCount === 0) {
      console.log('\n⚠️  NO TIENES USUARIOS ADMINISTRADORES');
      console.log('🔧 Para crear un administrador:');
      console.log('1. Edita el archivo create-admin-user.js');
      console.log('2. Cambia el email por tu email real');
      console.log('3. Ejecuta: node create-admin-user.js');
    } else {
      console.log('\n✅ Tienes usuarios administradores configurados');
      console.log('🔐 Puedes acceder al dashboard con cualquiera de los emails marcados como administrador');
    }
    
  } catch (error) {
    console.error('❌ Error verificando usuarios:', error);
  } finally {
    process.exit(0);
  }
}

// Verificar variables de entorno
if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
  console.error('❌ Faltan variables de entorno de Firebase Admin SDK');
  console.error('Asegúrate de tener configuradas:');
  console.error('- FIREBASE_PROJECT_ID');
  console.error('- FIREBASE_CLIENT_EMAIL');
  console.error('- FIREBASE_PRIVATE_KEY');
  process.exit(1);
}

// Ejecutar la función
checkAdminUsers(); 