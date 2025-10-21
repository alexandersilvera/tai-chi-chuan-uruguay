# Verificar Variables de Entorno en Vercel

## Error actual
Si ves el error "Error en el servidor al eliminar el artículo" o problemas con Firebase Admin SDK, probablemente faltan variables de entorno en Vercel.

## Variables requeridas en Vercel

Debes configurar estas variables de entorno en tu proyecto de Vercel:

### 1. Variables de Firebase Admin SDK (CRÍTICAS)
```
FIREBASE_PROJECT_ID=reino-da-mata-160a9
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-g38ag@reino-da-mata-160a9.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
```

**IMPORTANTE sobre FIREBASE_PRIVATE_KEY**:
- Debe incluir las comillas dobles al inicio y al final
- Los `\n` deben ser literales (no saltos de línea reales)
- Copia exactamente como aparece en tu archivo `.env` local

### 2. Variables de Firebase Client SDK (ya configuradas)
```
PUBLIC_FIREBASE_API_KEY=AIzaSyBRWKqrfQT2LnfJUXJvLFh-jC5_bPjXSPE
PUBLIC_FIREBASE_AUTH_DOMAIN=reino-da-mata-160a9.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=reino-da-mata-160a9
PUBLIC_FIREBASE_STORAGE_BUCKET=reino-da-mata-160a9.firebasestorage.app
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=679062068434
PUBLIC_FIREBASE_APP_ID=1:679062068434:web:59ec0ee86e14d3c1b86cce
```

### 3. Variable de administrador
```
ADMIN_EMAIL=tu-email@gmail.com
```

## Cómo verificar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Click en "Settings" → "Environment Variables"
3. Verifica que TODAS las variables arriba estén configuradas
4. Las variables que empiezan con `PUBLIC_` son visibles en el cliente
5. Las variables sin `PUBLIC_` solo están disponibles en el servidor

## Cómo agregar la clave privada correctamente

### Opción 1: Copiar desde .env local
```bash
# En tu terminal local, ejecuta:
cat .env | grep FIREBASE_PRIVATE_KEY
```
Copia todo el valor (incluidas las comillas) y pégalo en Vercel.

### Opción 2: Desde la consola de Firebase
1. Ve a Firebase Console → Project Settings → Service Accounts
2. Click en "Generate new private key"
3. Descarga el archivo JSON
4. Copia el campo `private_key` del JSON
5. Asegúrate de que los `\n` sean literales, no saltos de línea

## Síntomas de variables faltantes

| Síntoma | Variable faltante |
|---------|-------------------|
| "Error de configuración del servidor" | FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, o FIREBASE_PRIVATE_KEY |
| "DECODER routines::unsupported" | FIREBASE_PRIVATE_KEY mal formateada |
| "auth/unauthorized-domain" | Dominios de Vercel no autorizados en Firebase Console |
| "No estás autenticado" (antes) | AuthProvider no envolvía el componente |
| Error 500 en APIs admin | Cualquiera de las variables de Firebase Admin |

## Después de agregar variables

1. Las variables se aplican automáticamente en el próximo deploy
2. Para aplicarlas inmediatamente, haz un redespliegue:
   - Ve a Deployments
   - Click en los 3 puntos del último deployment
   - Click en "Redeploy"

## Logs de Vercel

Para ver errores detallados:
1. Ve a tu proyecto en Vercel
2. Click en "Deployments"
3. Click en el deployment más reciente
4. Click en "Functions" o "Runtime Logs"
5. Busca errores relacionados con Firebase Admin

## Verificación rápida

Si quieres verificar rápidamente si Firebase Admin está funcionando:
1. Visita: `https://www.taichisun.com/api/admin/articles/list`
2. Si ves una lista de artículos → Las APIs básicas funcionan
3. Si intentas eliminar un artículo y falla → Problema con Firebase Admin Auth

## Contacto

Si después de configurar todas las variables sigues teniendo problemas, revisa los logs de Vercel y comparte el error específico.
