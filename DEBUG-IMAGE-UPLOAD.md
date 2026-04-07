# Debug: Problema con Carga de Imágenes

## Pasos para Diagnosticar

### 1. Verificar la Consola del Navegador

Abre el dashboard y la consola del navegador (F12 → Console):

1. Ve a `/dashboard/articulos`
2. Haz clic en "Nuevo Artículo" o edita uno existente
3. Intenta subir una imagen
4. **Copia y pega TODOS los mensajes de error de la consola**

### 2. Errores Comunes y Soluciones

#### Error: "Token de autenticación requerido"
**Causa**: No estás autenticado o el token expiró
**Solución**: Cierra sesión y vuelve a iniciar sesión

#### Error: "Permisos de administrador requeridos"
**Causa**: Tu usuario no tiene permisos de admin
**Solución**: Verifica que tu email (`suntaichi.uy@gmail.com`) tenga `isAdmin: true` en Firestore

#### Error: "No image file provided"
**Causa**: El archivo no se está enviando correctamente
**Solución**: Verifica que estás seleccionando un archivo de imagen válido

#### Error: "Image upload failed" o error 500
**Causa**: Problema con Firebase Storage
**Solución**: Ver sección "Verificar Firebase Storage" abajo

#### Error CORS
**Causa**: Problema de permisos entre dominios
**Solución**: Verificar configuración de Firebase Storage

### 3. Verificar Firebase Storage

#### Opción A: Firebase Console
1. Ve a https://console.firebase.google.com
2. Selecciona el proyecto: `reino-da-mata-160a9`
3. Ve a Storage en el menú lateral
4. Verifica que el bucket existe y está activo
5. Ve a la pestaña "Rules" (Reglas)
6. Asegúrate de tener reglas como estas:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /articles/{fileName} {
      allow read: if true;
      allow write: if request.auth != null && request.resource.size < 5 * 1024 * 1024;
    }
  }
}
```

#### Opción B: Verificar en Firestore
1. Ve a Firestore Database
2. Busca tu usuario en la colección `users`
3. Verifica que `isAdmin` sea `true`

### 4. Verificar Variables de Entorno (Vercel)

Si estás en producción:

1. Ve a https://vercel.com
2. Selecciona el proyecto
3. Ve a Settings → Environment Variables
4. Verifica que estas variables existen:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`

### 5. Probar en Desarrollo Local

Si el problema solo ocurre en producción:

1. Asegúrate de tener el archivo `.env` con las variables de Firebase
2. Ejecuta `npm run dev`
3. Intenta subir una imagen
4. Si funciona localmente pero no en producción, es un problema de variables de entorno en Vercel

## Información que Necesito para Ayudarte

Por favor proporciona:

1. **Mensaje de error completo** de la consola del navegador
2. **¿Dónde ocurre?** (Producción `www.taichisun.com` o desarrollo local)
3. **Pasos exactos** que seguiste para reproducir el error
4. **Tipo de archivo** que intentaste subir (PNG, JPG, etc.)
5. **Tamaño del archivo** (en MB)

## Script de Verificación Rápida

Ejecuta este comando para verificar que Firebase Admin está configurado:

```bash
node scripts/testFirebaseStorage.cjs
```

Si este archivo no existe, créalo con:

```javascript
require('dotenv').config();
const admin = require('firebase-admin');

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `${serviceAccount.projectId}.appspot.com`
  });
}

const bucket = admin.storage().bucket();

console.log('✅ Firebase Admin inicializado');
console.log('📦 Bucket:', bucket.name);
console.log('🔑 Project ID:', serviceAccount.projectId);

bucket.getFiles({ maxResults: 5 })
  .then(([files]) => {
    console.log('📁 Archivos recientes en Storage:');
    files.forEach(file => console.log(`  - ${file.name}`));
  })
  .catch(error => {
    console.error('❌ Error accediendo a Storage:', error.message);
  });
```

---

**Fecha**: 2025-10-22
**Componente**: ImageUploader
**Endpoint**: `/api/admin/articles/upload-image`
