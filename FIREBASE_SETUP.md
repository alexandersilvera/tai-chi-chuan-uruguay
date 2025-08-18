# 🔥 Guía de Configuración Firebase Auth

## Problemas Comunes y Soluciones

### 1. Error 404/400 en identitytoolkit.googleapis.com

**Causa**: Dominio no autorizado o configuración incorrecta de OAuth.

**Solución**:

#### A. Configurar Dominios Autorizados en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto: `reino-da-mata-160a9`
3. Ve a **Authentication** → **Settings** → **Authorized domains**
4. Agrega estos dominios:
   - `localhost` (para desarrollo)
   - `taichisun.com` (producción)
   - Tu dominio de Vercel (ej: `tu-proyecto.vercel.app`)

#### B. Configurar Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Selecciona el proyecto `reino-da-mata-160a9`
3. Ve a **APIs & Services** → **Credentials**
4. Busca tu **OAuth 2.0 Client ID**
5. Edita las configuraciones:

**Authorized JavaScript origins**:
```
http://localhost:4321
http://localhost:3000
https://taichisun.com
https://tu-dominio.vercel.app
```

**Authorized redirect URIs**:
```
http://localhost:4321/__/auth/handler
https://taichisun.com/__/auth/handler
https://tu-dominio.vercel.app/__/auth/handler
```

### 2. Cross-Origin-Opener-Policy Errors

**Causa**: Headers de seguridad que bloquean ventanas emergentes.

**Solución**: Ya configurado en `vercel.json` y `astro.config.mjs`

### 3. Verificar Configuración Actual

Abre la consola del navegador y busca los logs de debug que muestran:
- ✅ Variables de entorno configuradas
- 🌐 Dominio actual
- 🔧 Modo (desarrollo/producción)

## Pasos de Verificación

### 1. Verificar Variables de Entorno

Asegúrate de que tu archivo `.env` tenga todas estas variables:

```env
PUBLIC_FIREBASE_API_KEY='tu-api-key'
PUBLIC_FIREBASE_AUTH_DOMAIN='tu-proyecto.firebaseapp.com'
PUBLIC_FIREBASE_PROJECT_ID='tu-proyecto-id'
PUBLIC_FIREBASE_STORAGE_BUCKET='tu-proyecto.appspot.com'
PUBLIC_FIREBASE_MESSAGING_SENDER_ID='tu-sender-id'
PUBLIC_FIREBASE_APP_ID='tu-app-id'
PUBLIC_FIREBASE_MEASUREMENT_ID='tu-measurement-id'
```

### 2. Verificar Habilitación de Google Auth

1. Firebase Console → **Authentication** → **Sign-in method**
2. Habilita **Google**
3. Configura el email de soporte del proyecto

### 3. Verificar APIs Habilitadas

En Google Cloud Console, asegúrate de que estas APIs estén habilitadas:
- Identity and Access Management (IAM) API
- Google+ API (si está disponible)
- Identity Toolkit API

## Comandos de Desarrollo

```bash
# Limpiar caché y reinstalar dependencias
npm run build
npm run dev

# Verificar en modo producción local
npm run preview
```

## Debugging

Si sigues teniendo problemas:

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña **Console**
3. Busca los logs de debug de Firebase
4. Revisa los errores específicos y sus sugerencias

## Contacto

Si necesitas ayuda adicional, revisa:
- [Documentación de Firebase Auth](https://firebase.google.com/docs/auth)
- [Troubleshooting Firebase Auth](https://firebase.google.com/docs/auth/web/troubleshooting) 