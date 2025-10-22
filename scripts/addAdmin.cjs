// scripts/addAdmin.cjs
// Script para agregar administradores al sistema

require('dotenv').config();
const admin = require('firebase-admin');
const readline = require('readline');

// Inicializar Firebase Admin
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function findUserByEmail(email) {
  try {
    // Buscar en Firebase Auth
    const userRecord = await admin.auth().getUserByEmail(email);
    return userRecord;
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return null;
    }
    throw error;
  }
}

async function addAdminRole(userId, email) {
  try {
    // Actualizar o crear el documento del usuario en Firestore
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      await userRef.update({
        isAdmin: true,
        adminGrantedAt: admin.firestore.FieldValue.serverTimestamp(),
        adminGrantedBy: 'system-script',
      });
      console.log(`✅ Usuario actualizado: ${email} ahora es administrador`);
    } else {
      await userRef.set({
        email: email,
        isAdmin: true,
        adminGrantedAt: admin.firestore.FieldValue.serverTimestamp(),
        adminGrantedBy: 'system-script',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`✅ Documento de usuario creado: ${email} ahora es administrador`);
    }

    // También establecer custom claim en Firebase Auth
    await admin.auth().setCustomUserClaims(userId, {admin: true});
    console.log('✅ Custom claims configurados en Firebase Auth');

    return true;
  } catch (error) {
    console.error('❌ Error al agregar rol de admin:', error);
    return false;
  }
}

async function main() {
  const email = process.argv[2];

  if (!email) {
    console.error('❌ Error: Debes proporcionar un email como argumento');
    console.log('Uso: node scripts/addAdmin.js <email>');
    process.exit(1);
  }

  console.log(`\n🔍 Buscando usuario con email: ${email}\n`);

  try {
    // Buscar usuario
    const userRecord = await findUserByEmail(email);

    if (!userRecord) {
      console.log('⚠️  El usuario no existe en Firebase Auth');
      console.log('📝 El usuario debe iniciar sesión al menos una vez antes de ser administrador');
      console.log('   Instrucciones:');
      console.log('   1. Ve a https://www.taichisun.com');
      console.log('   2. Haz clic en "Iniciar Sesión"');
      console.log('   3. Inicia sesión con Google usando: ' + email);
      console.log('   4. Vuelve a ejecutar este script');
      process.exit(1);
    }

    console.log('✅ Usuario encontrado:');
    console.log(`   UID: ${userRecord.uid}`);
    console.log(`   Email: ${userRecord.email}`);
    console.log(`   Display Name: ${userRecord.displayName || 'N/A'}`);
    console.log(`   Creado: ${new Date(userRecord.metadata.creationTime).toLocaleString()}`);
    console.log('');

    // Verificar si ya es admin
    const userDoc = await db.collection('users').doc(userRecord.uid).get();
    if (userDoc.exists && userDoc.data().isAdmin === true) {
      console.log('ℹ️  Este usuario ya es administrador');

      rl.question('¿Deseas confirmar/actualizar sus permisos de admin? (s/n): ', async (answer) => {
        if (answer.toLowerCase() === 's') {
          await addAdminRole(userRecord.uid, userRecord.email);
          console.log('\n✨ Proceso completado exitosamente');
        } else {
          console.log('❌ Operación cancelada');
        }
        rl.close();
        process.exit(0);
      });
    } else {
      rl.question('¿Deseas otorgar permisos de administrador a este usuario? (s/n): ', async (answer) => {
        if (answer.toLowerCase() === 's') {
          const success = await addAdminRole(userRecord.uid, userRecord.email);
          if (success) {
            console.log('\n✨ Proceso completado exitosamente');
            console.log('📝 El usuario debe cerrar sesión y volver a iniciar sesión para que los cambios surtan efecto');
          }
        } else {
          console.log('❌ Operación cancelada');
        }
        rl.close();
        process.exit(0);
      });
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
