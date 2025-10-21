# Solución a Errores en Producción

## Resumen de Errores Encontrados

1. ✅ **Error 401 en site.webmanifest** - SOLUCIONADO en código
2. ⚠️ **Error `auth/unauthorized-domain`** - REQUIERE ACCIÓN EN FIREBASE
3. ⚠️ **Variables de entorno faltantes** - REQUIERE ACCIÓN EN VERCEL

---

## 1. Error de Dominio No Autorizado (CRÍTICO)

### Error:
```
Firebase: Error (auth/unauthorized-domain)
```

### Causa:
Firebase está bloqueando la autenticación porque el dominio de Vercel no está en la lista de dominios autorizados.

### Solución:

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto: **reino-da-mata-160a9** (proyecto Firebase usado para tai-chi-chuan-uruguay)
3. En el menú lateral: **Authentication** → **Settings**
4. Haz clic en la pestaña **Authorized domains**
5. Haz clic en **"Add domain"** y agrega estos dominios (UNO POR UNO):

```
tai-chi-chuan-uruguay-3y9535sce-alexandersilveras-projects.vercel.app
taichisun.com
www.taichisun.com
```

**IMPORTANTE:** Si Vercel genera URLs de preview diferentes, deberás agregarlas también. Formato típico:
```
tai-chi-chuan-uruguay-[HASH].vercel.app
```

### Verificación:
Después de agregar los dominios, espera 1-2 minutos y recarga tu sitio. El error `auth/unauthorized-domain` debería desaparecer.

---

## 2. Error 401 en site.webmanifest (SOLUCIONADO)

### Error:
```
Failed to load resource: the server responded with a status of 401 ()
site.webmanifest:1
```

### Causa:
El middleware de autenticación estaba procesando archivos estáticos (CSS, JS, JSON, etc.) y devolvia 401 cuando debería solo proteger rutas del dashboard.

### Solución:
Ya corregido en `src/middleware.js`. El middleware ahora excluye archivos estáticos automáticamente.

### Cambio realizado:
```javascript
// Excluir archivos estáticos del middleware
const staticFileExtensions = ['.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webmanifest', '.xml', '.txt', '.woff', '.woff2', '.ttf', '.eot'];
const isStaticFile = staticFileExtensions.some(ext => url.pathname.endsWith(ext));

if (isStaticFile) {
  return next();
}
```

---

## 3. Variables de Entorno Faltantes en Vercel

### Problema:
Tienes configuradas las variables `PUBLIC_*` pero te faltan las variables **privadas** necesarias para Firebase Admin SDK.

### Variables que DEBES agregar en Vercel:

Ve a tu proyecto en Vercel → **Settings** → **Environment Variables** y agrega:

#### Variable 1: FIREBASE_PROJECT_ID
- **Key:** `FIREBASE_PROJECT_ID`
- **Value:** `reino-da-mata-160a9`
- **Environments:** Production, Preview, Development
- **Sensitive:** NO

#### Variable 2: FIREBASE_CLIENT_EMAIL
- **Key:** `FIREBASE_CLIENT_EMAIL`
- **Value:** `firebase-adminsdk-lc909@reino-da-mata-160a9.iam.gserviceaccount.com`
- **Environments:** Production, Preview, Development
- **Sensitive:** NO

#### Variable 3: FIREBASE_PRIVATE_KEY (MUY IMPORTANTE)
- **Key:** `FIREBASE_PRIVATE_KEY`
- **Value:** (copia EXACTAMENTE, incluyendo las comillas)
```
"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4ni8wwZ7tB4Qb\nSFzDFUb0I/NDMwDueRrfsWF7JEH1KssQchM70SvCRmNz4OjjYRQOjqLxLPa7763+\nTQok66lFQFs3GGesLZo+tHtpQR3YV3bWWGI3Gjt+TBh0M9eE94/Yos+juBoU2Xlt\nsx2P1oywhnav3Trk8ISPLwW2nW1VQo6dNMsO5VEvTP6VN8VtIAQ73D+7xEpR1yhF\nVlT/qN7QhcxUhnOL6sRh9CCn36l1yR2AR6hhWi97M5s1f6pc4VdWl+ILNnOedze5\n7MuDQTxXoCiGPP+pJ5fMIDK8yJjMlJDO5D1ib5ULriYH2hiVs8a0d0FqJyRd9C2G\nvN8o0LvDAgMBAAECggEAHBuKmr/iduWjNtYnDVUoIX53CGmeVYW0Ujn62e6KE44J\nhD5MmwRRxw5uu33oEco+F/3zuof6eWAt24mWJvXcJnInEQsoVD34fbMpFjwhk5u0\nDkE+6XMXJgzm14uXCfmjpGYb+n9KipcWVjMkJ+SQifBcPJKQPLqOVrsK1yPpDpxF\nJKJhN9c9w2x2nnJ8GCUAL+q1RPz73cwcDP9ijbmzqI/DfSvutDz2sp3XhxVGsSEd\ndsSsKHCXigpgvcuhpbE/fY/MQGqvmSEjwE2Sg7wmik2munUG9yAziI6bvOcbuaKW\nhN3OuoHUMmQR8hKWaFkZB2pDISrRMAFgdYDRuMnvuQKBgQDWs8etQqyqfowJUPid\nrpsa2UxN+TlkD9AzXsjRWrqG2PkL0EZ0QgaKyFzA1J7hs73Rk5jTBw8YbuRF9pXE\n9aIusKhqtOEwl3Anqe8szXRd/Bn5sG4Cc+qegulcFT7vDdJ8ewSdEs8jq/IZSunK\nckX/Vnnw+/KrB30tClqGCiDmewKBgQDcIQLiNVExi6TQz3rH374NyAmz7RVu5RpV\n9Bnsp66+Q0LOv9B+4mrUxmMe0jgO938ijTKIMxmuAWUgI9/kMpsUEVT7fGsCihOo\nt9I0ZJ0IZ/IafrxC9fbMUwHZd8Xa5tj2HRIVEUDevCpHuDMq5EuxR9CDCUSXGIGR\ntPRoLGRhWQKBgQCYa90v1Yu7JkfIPWGin9ihQO741Bu4O7m1Hm82oVCWduanSl8a\nHd2DHScsBkYdOXtik4QFHJfM4rzQJnTA9RkESInn5y2PT5NhtTSE+/7G0jimmGgg\n+aXwjkOZCcQ59fgeQz9NO5MuYd1ns1UyUdn7oarEODlYzeJB3X3SdtJQjQKBgQDQ\nP6qqtiYJ6UITCTXuwQzbnNMRFMmiD7vKdRPRfxEhjiA11+E3KJxIjyZWkinWfu4X\nkdysXSt+InO45Dd7eySa54quIBZcYKQYiU6jokutGClCR4NzFZ5VznGBen4DiUDY\nFMh2hcwI65pUHz7I5RF2tandTXdGOjjZz4coxlZwgQKBgQCT+lsWHgemQEWiH9FX\nbXnV59nEeFJRDk1oaqKWPpsHo6IJCTtiSBbXZtSeOhqmsH8fqc9fAuUNuoqKG0EZ\n4n563e2+b7CIGbBTBKxDDfieeU1Qhn3yVYKV/JihT+LE6c1oZEMA951EFNsfr2/Y\nfBZE+po/y08IlCyl3NnlH+NEXA==\n-----END PRIVATE KEY-----\n"
```
- **Environments:** Production, Preview, Development
- **Sensitive:** SÍ (marca esta opción)

#### Variable 4: ADMIN_EMAIL
- **Key:** `ADMIN_EMAIL`
- **Value:** `alexandersilvera@hotmail.com`
- **Environments:** Production, Preview, Development
- **Sensitive:** NO

#### Variable 5: PUBLIC_FIREBASE_MEASUREMENT_ID (si falta)
- **Key:** `PUBLIC_FIREBASE_MEASUREMENT_ID`
- **Value:** `G-PM8GGJ64MR`
- **Environments:** Production, Preview, Development
- **Sensitive:** NO

---

## 4. Pasos para Desplegar las Correcciones

### Opción A: Commit y push (RECOMENDADO)

```bash
git add .
git commit -m "Fix: Corregir middleware para excluir archivos estáticos"
git push origin master
```

Vercel desplegará automáticamente.

### Opción B: Redespliegue manual

1. Ve a Vercel Dashboard → tu proyecto → **Deployments**
2. Haz clic en los 3 puntos (...) del último deployment
3. Selecciona **"Redeploy"**
4. Haz clic en **"Redeploy"** nuevamente

---

## 5. Verificación Final

Después de completar TODOS los pasos anteriores:

### 1. Verificar en Firebase Console
- ✅ Los 3 dominios están en "Authorized domains"

### 2. Verificar en Vercel
- ✅ Las 4 variables privadas están agregadas (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, ADMIN_EMAIL)
- ✅ Las 7 variables públicas están agregadas (todas las PUBLIC_*)

### 3. Verificar en el sitio
- ✅ Abre la consola del navegador (F12)
- ✅ Recarga el sitio
- ✅ NO deberías ver errores de `auth/unauthorized-domain`
- ✅ NO deberías ver errores 401 en `site.webmanifest`

### 4. Probar autenticación
- ✅ Intenta iniciar sesión con Google
- ✅ Debería funcionar sin errores

### 5. Probar dashboard (si eres admin)
- ✅ Ve a `/dashboard`
- ✅ Deberías poder acceder sin errores

---

## 6. Problemas Conocidos y Soluciones

### Problema: Sigue sin funcionar después de agregar las variables
**Solución:** Espera 1-2 minutos y haz un hard refresh (Ctrl+Shift+R)

### Problema: Error "Firebase Admin SDK no está inicializado"
**Solución:** Verifica que `FIREBASE_PRIVATE_KEY` tenga las comillas al inicio y final, y que los `\n` sean literales (no saltos de línea reales)

### Problema: Cada preview de Vercel genera un error de dominio
**Solución:**
1. Opción fácil: Solo autoriza `taichisun.com` y prueba en producción
2. Opción completa: Configura un dominio permanente para previews en Vercel

---

## 7. Seguridad - IMPORTANTE

⚠️ **Has compartido tu `FIREBASE_PRIVATE_KEY` públicamente**.

Aunque es urgente resolver los errores ahora, después considera rotar la clave:

1. Ve a Firebase Console → Project Settings → Service Accounts
2. Haz clic en "Generate new private key"
3. Actualiza `FIREBASE_PRIVATE_KEY` en Vercel con la nueva clave
4. Actualiza tu archivo `.env` local
5. Elimina la clave antigua desde Firebase Console

---

## Resumen de Acciones

- [ ] 1. Agregar dominios en Firebase Console (Authentication → Settings → Authorized domains)
- [ ] 2. Agregar 4 variables de entorno en Vercel (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, ADMIN_EMAIL)
- [ ] 3. Hacer commit y push del código actualado (middleware.js)
- [ ] 4. Esperar el despliegue de Vercel
- [ ] 5. Verificar que todo funciona
- [ ] 6. (Opcional pero recomendado) Rotar FIREBASE_PRIVATE_KEY por seguridad

---

## Contacto y Ayuda

Si después de seguir todos estos pasos sigues teniendo problemas, verifica:
- Los logs de Vercel (Deployments → tu deployment → Logs)
- La consola del navegador (F12 → Console)
- Los logs de Functions en Vercel (si aplica)

Comparte los errores específicos que veas para diagnosticar mejor.
