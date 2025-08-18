// Script para crear un usuario administrador
// Ejecutar con: node create-admin-user.js

// Cargar variables de entorno desde .env
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
        // Remover comillas si existen
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

// Configuración de Firebase Admin
const serviceAccount = {
  projectId: envVars.FIREBASE_PROJECT_ID,
  clientEmail: envVars.FIREBASE_CLIENT_EMAIL,
  privateKey: envVars.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Inicializar Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);
const auth = getAuth(app);

async function createAdminUser() {
  try {
    // Obtener el email del administrador desde variable de entorno
    const adminEmail = envVars.ADMIN_EMAIL;
    
    if (!adminEmail) {
      console.error('❌ Falta la variable de entorno ADMIN_EMAIL');
      console.error('Agrega ADMIN_EMAIL=tu-email@ejemplo.com al archivo .env');
      return;
    }
    
    console.log(`🔍 Buscando usuario con email: ${adminEmail}`);
    
    // Buscar el usuario por email
    let userRecord;
    try {
      userRecord = await auth.getUserByEmail(adminEmail);
      console.log(`✅ Usuario encontrado: ${userRecord.uid}`);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        console.log(`❌ Usuario no encontrado. Primero debes registrarte en la aplicación con el email: ${adminEmail}`);
        console.log('🔧 Pasos a seguir:');
        console.log('1. Ve a tu aplicación web');
        console.log('2. Regístrate con Google usando el email especificado');
        console.log('3. Vuelve a ejecutar este script');
        return;
      }
      throw error;
    }
    
    // Actualizar el documento del usuario en Firestore
    const userDocRef = db.collection('users').doc(userRecord.uid);
    
    // Verificar si el documento existe
    const userDoc = await userDocRef.get();
    
    if (userDoc.exists) {
      // Actualizar usuario existente
      await userDocRef.update({
        isAdmin: true,
        adminSince: new Date(),
      });
      console.log(`✅ Usuario ${adminEmail} configurado como administrador`);
    } else {
      // Crear nuevo documento de usuario
      await userDocRef.set({
        email: userRecord.email,
        displayName: userRecord.displayName || '',
        photoURL: userRecord.photoURL || '',
        isAdmin: true,
        adminSince: new Date(),
      });
      console.log(`✅ Documento de usuario creado y configurado como administrador`);
    }
    
    // Opcional: También configurar custom claims (para reglas que usan request.auth.token.admin)
    await auth.setCustomUserClaims(userRecord.uid, { admin: true });
    console.log(`✅ Custom claims de admin configurados`);
    
    console.log('🎉 ¡Usuario administrador configurado exitosamente!');
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🆔 UID: ${userRecord.uid}`);
    console.log('🔐 Ahora puedes acceder al dashboard');
    
  } catch (error) {
    console.error('❌ Error configurando usuario administrador:', error);
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
createAdminUser(); 