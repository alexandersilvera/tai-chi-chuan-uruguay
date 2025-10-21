# Variables de Entorno Faltantes en Vercel

## Variables que DEBES agregar en Vercel

Ve a tu proyecto en Vercel → Settings → Environment Variables y agrega estas 4 variables:

---

### 1. FIREBASE_PROJECT_ID

**Key:** `FIREBASE_PROJECT_ID`

**Value:**
```
reino-da-mata-160a9
```

**Environments:** Marca `Production`, `Preview`, y `Development`

**Sensitive:** NO (desmarcado)

---

### 2. FIREBASE_CLIENT_EMAIL

**Key:** `FIREBASE_CLIENT_EMAIL`

**Value:**
```
firebase-adminsdk-lc909@reino-da-mata-160a9.iam.gserviceaccount.com
```

**Environments:** Marca `Production`, `Preview`, y `Development`

**Sensitive:** NO (desmarcado)

---

### 3. FIREBASE_PRIVATE_KEY

**Key:** `FIREBASE_PRIVATE_KEY`

**Value:** (copia EXACTAMENTE como está, incluyendo las comillas al inicio y final)
```
"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4ni8wwZ7tB4Qb\nSFzDFUb0I/NDMwDueRrfsWF7JEH1KssQchM70SvCRmNz4OjjYRQOjqLxLPa7763+\nTQok66lFQFs3GGesLZo+tHtpQR3YV3bWWGI3Gjt+TBh0M9eE94/Yos+juBoU2Xlt\nsx2P1oywhnav3Trk8ISPLwW2nW1VQo6dNMsO5VEvTP6VN8VtIAQ73D+7xEpR1yhF\nVlT/qN7QhcxUhnOL6sRh9CCn36l1yR2AR6hhWi97M5s1f6pc4VdWl+ILNnOedze5\n7MuDQTxXoCiGPP+pJ5fMIDK8yJjMlJDO5D1ib5ULriYH2hiVs8a0d0FqJyRd9C2G\nvN8o0LvDAgMBAAECggEAHBuKmr/iduWjNtYnDVUoIX53CGmeVYW0Ujn62e6KE44J\nhD5MmwRRxw5uu33oEco+F/3zuof6eWAt24mWJvXcJnInEQsoVD34fbMpFjwhk5u0\nDkE+6XMXJgzm14uXCfmjpGYb+n9KipcWVjMkJ+SQifBcPJKQPLqOVrsK1yPpDpxF\nJKJhN9c9w2x2nnJ8GCUAL+q1RPz73cwcDP9ijbmzqI/DfSvutDz2sp3XhxVGsSEd\ndsSsKHCXigpgvcuhpbE/fY/MQGqvmSEjwE2Sg7wmik2munUG9yAziI6bvOcbuaKW\nhN3OuoHUMmQR8hKWaFkZB2pDISrRMAFgdYDRuMnvuQKBgQDWs8etQqyqfowJUPid\nrpsa2UxN+TlkD9AzXsjRWrqG2PkL0EZ0QgaKyFzA1J7hs73Rk5jTBw8YbuRF9pXE\n9aIusKhqtOEwl3Anqe8szXRd/Bn5sG4Cc+qegulcFT7vDdJ8ewSdEs8jq/IZSunK\nckX/Vnnw+/KrB30tClqGCiDmewKBgQDcIQLiNVExi6TQz3rH374NyAmz7RVu5RpV\n9Bnsp66+Q0LOv9B+4mrUxmMe0jgO938ijTKIMxmuAWUgI9/kMpsUEVT7fGsCihOo\nt9I0ZJ0IZ/IafrxC9fbMUwHZd8Xa5tj2HRIVEUDevCpHuDMq5EuxR9CDCUSXGIGR\ntPRoLGRhWQKBgQCYa90v1Yu7JkfIPWGin9ihQO741Bu4O7m1Hm82oVCWduanSl8a\nHd2DHScsBkYdOXtik4QFHJfM4rzQJnTA9RkESInn5y2PT5NhtTSE+/7G0jimmGgg\n+aXwjkOZCcQ59fgeQz9NO5MuYd1ns1UyUdn7oarEODlYzeJB3X3SdtJQjQKBgQDQ\nP6qqtiYJ6UITCTXuwQzbnNMRFMmiD7vKdRPRfxEhjiA11+E3KJxIjyZWkinWfu4X\nkdysXSt+InO45Dd7eySa54quIBZcYKQYiU6jokutGClCR4NzFZ5VznGBen4DiUDY\nFMh2hcwI65pUHz7I5RF2tandTXdGOjjZz4coxlZwgQKBgQCT+lsWHgemQEWiH9FX\nbXnV59nEeFJRDk1oaqKWPpsHo6IJCTtiSBbXZtSeOhqmsH8fqc9fAuUNuoqKG0EZ\n4n563e2+b7CIGbBTBKxDDfieeU1Qhn3yVYKV/JihT+LE6c1oZEMA951EFNsfr2/Y\nfBZE+po/y08IlCyl3NnlH+NEXA==\n-----END PRIVATE KEY-----\n"
```

**Environments:** Marca `Production`, `Preview`, y `Development`

**Sensitive:** SÍ (marcado) - Esta es una clave privada sensible

---

### 4. ADMIN_EMAIL

**Key:** `ADMIN_EMAIL`

**Value:**
```
alexandersilvera@hotmail.com
```

**Environments:** Marca `Production`, `Preview`, y `Development`

**Sensitive:** NO (desmarcado)

---

### 5. Verificar PUBLIC_FIREBASE_MEASUREMENT_ID (opcional)

Si no lo tienes, agrégalo también:

**Key:** `PUBLIC_FIREBASE_MEASUREMENT_ID`

**Value:**
```
G-PM8GGJ64MR
```

**Environments:** Marca `Production`, `Preview`, y `Development`

**Sensitive:** NO (desmarcado)

---

## Después de agregar las variables:

1. Haz clic en "Save" para cada variable
2. Ve a la pestaña "Deployments"
3. Haz clic en los 3 puntos (...) del último deployment
4. Selecciona "Redeploy"
5. Marca la opción "Use existing Build Cache" (opcional, para más rápido)
6. Haz clic en "Redeploy"

## ¿Por qué estos errores?

Sin `FIREBASE_PRIVATE_KEY`, el Firebase Admin SDK no puede inicializarse en el servidor. Esto causa:
- Errores al acceder al dashboard (rutas `/dashboard/*`)
- Imposibilidad de verificar usuarios admin
- Fallas en operaciones de lectura/escritura del servidor a Firestore

---

## IMPORTANTE - Seguridad

Después de que todo funcione, considera **rotar tu FIREBASE_PRIVATE_KEY** porque la compartiste públicamente. Para hacer esto:

1. Ve a Firebase Console → Project Settings → Service Accounts
2. Haz clic en "Generate new private key"
3. Actualiza `FIREBASE_PRIVATE_KEY` en Vercel con la nueva clave
4. Actualiza tu archivo `.env` local con la nueva clave
5. Elimina la clave antigua de Firebase

Por ahora, enfócate en agregar las variables faltantes para que tu sitio funcione.
