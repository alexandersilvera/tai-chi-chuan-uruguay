# Solución a Errores de Vercel

## Errores encontrados en los logs:

1. ✅ **Error `post.render is not a function`** - SOLUCIONADO
2. ⚠️ **Error `DECODER routines::unsupported`** - REQUIERE ACCIÓN

---

## Error 1: post.render is not a function (SOLUCIONADO)

### Error en logs:
```
TypeError: post.render is not a function
at file:///var/task/dist/server/pages/blog/_---slug_.astro.mjs:27:34
```

### Causa:
Con `output: 'server'` en Astro config, las páginas dinámicas necesitan `prerender = true` o adaptar cómo se pasan las props.

### Solución:
Ya corregido en el código (commit `4536a3e`). El cambio incluye:
- Agregar `export const prerender = true`
- Usar `getEntry()` en lugar de pasar el objeto completo en props

### Verificación:
Después del despliegue automático de Vercel, las páginas de blog como `/blog/forma-tradicional-de-sun-taiji-quan` deberían funcionar correctamente.

---

## Error 2: FIREBASE_PRIVATE_KEY malformada (REQUIERE ACCIÓN URGENTE)

### Error en logs:
```
FirebaseAppError: Credential implementation provided to initializeApp() via the "credential" property
failed to fetch a valid Google OAuth2 access token with the following error:
"error:1E08010C:DECODER routines::unsupported"
```

### Causa:
La variable `FIREBASE_PRIVATE_KEY` en Vercel está malformada. Probablemente falta las **comillas** al inicio y final del valor.

### Solución:

1. Ve a Vercel Dashboard → tu proyecto → **Settings** → **Environment Variables**

2. Busca `FIREBASE_PRIVATE_KEY` y haz clic en **Edit** (el ícono de lápiz)

3. **Borra** el valor actual completamente

4. Pega este valor **EXACTAMENTE** (incluyendo las comillas `"` al inicio y final):

```
"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4ni8wwZ7tB4Qb\nSFzDFUb0I/NDMwDueRrfsWF7JEH1KssQchM70SvCRmNz4OjjYRQOjqLxLPa7763+\nTQok66lFQFs3GGesLZo+tHtpQR3YV3bWWGI3Gjt+TBh0M9eE94/Yos+juBoU2Xlt\nsx2P1oywhnav3Trk8ISPLwW2nW1VQo6dNMsO5VEvTP6VN8VtIAQ73D+7xEpR1yhF\nVlT/qN7QhcxUhnOL6sRh9CCn36l1yR2AR6hhWi97M5s1f6pc4VdWl+ILNnOedze5\n7MuDQTxXoCiGPP+pJ5fMIDK8yJjMlJDO5D1ib5ULriYH2hiVs8a0d0FqJyRd9C2G\nvN8o0LvDAgMBAAECggEAHBuKmr/iduWjNtYnDVUoIX53CGmeVYW0Ujn62e6KE44J\nhD5MmwRRxw5uu33oEco+F/3zuof6eWAt24mWJvXcJnInEQsoVD34fbMpFjwhk5u0\nDkE+6XMXJgzm14uXCfmjpGYb+n9KipcWVjMkJ+SQifBcPJKQPLqOVrsK1yPpDpxF\nJKJhN9c9w2x2nnJ8GCUAL+q1RPz73cwcDP9ijbmzqI/DfSvutDz2sp3XhxVGsSEd\ndsSsKHCXigpgvcuhpbE/fY/MQGqvmSEjwE2Sg7wmik2munUG9yAziI6bvOcbuaKW\nhN3OuoHUMmQR8hKWaFkZB2pDISrRMAFgdYDRuMnvuQKBgQDWs8etQqyqfowJUPid\nrpsa2UxN+TlkD9AzXsjRWrqG2PkL0EZ0QgaKyFzA1J7hs73Rk5jTBw8YbuRF9pXE\n9aIusKhqtOEwl3Anqe8szXRd/Bn5sG4Cc+qegulcFT7vDdJ8ewSdEs8jq/IZSunK\nckX/Vnnw+/KrB30tClqGCiDmewKBgQDcIQLiNVExi6TQz3rH374NyAmz7RVu5RpV\n9Bnsp66+Q0LOv9B+4mrUxmMe0jgO938ijTKIMxmuAWUgI9/kMpsUEVT7fGsCihOo\nt9I0ZJ0IZ/IafrxC9fbMUwHZd8Xa5tj2HRIVEUDevCpHuDMq5EuxR9CDCUSXGIGR\ntPRoLGRhWQKBgQCYa90v1Yu7JkfIPWGin9ihQO741Bu4O7m1Hm82oVCWduanSl8a\nHd2DHScsBkYdOXtik4QFHJfM4rzQJnTA9RkESInn5y2PT5NhtTSE+/7G0jimmGgg\n+aXwjkOZCcQ59fgeQz9NO5MuYd1ns1UyUdn7oarEODlYzeJB3X3SdtJQjQKBgQDQ\nP6qqtiYJ6UITCTXuwQzbnNMRFMmiD7vKdRPRfxEhjiA11+E3KJxIjyZWkinWfu4X\nkdysXSt+InO45Dd7eySa54quIBZcYKQYiU6jokutGClCR4NzFZ5VznGBen4DiUDY\nFMh2hcwI65pUHz7I5RF2tandTXdGOjjZz4coxlZwgQKBgQCT+lsWHgemQEWiH9FX\nbXnV59nEeFJRDk1oaqKWPpsHo6IJCTtiSBbXZtSeOhqmsH8fqc9fAuUNuoqKG0EZ\n4n563e2+b7CIGbBTBKxDDfieeU1Qhn3yVYKV/JihT+LE6c1oZEMA951EFNsfr2/Y\nfBZE+po/y08IlCyl3NnlH+NEXA==\n-----END PRIVATE KEY-----\n"
```

5. **IMPORTANTE:** Verifica que el valor tenga:
   - Comilla `"` al INICIO
   - Comilla `"` al FINAL
   - Los `\n` deben ser literales (no saltos de línea reales)

6. Haz clic en **Save**

7. Ve a **Deployments** → Haz clic en los 3 puntos del último deployment → **Redeploy**

### Verificación:
Después del redespliegue:
- Los errores de `/api/auth/session` deberían desaparecer
- La autenticación con Google debería funcionar
- El dashboard de admin debería ser accesible

---

## Checklist de Verificación

Después de completar las acciones anteriores:

- [ ] Esperar que Vercel termine de desplegar (2-3 minutos)
- [ ] Corregir `FIREBASE_PRIVATE_KEY` en Vercel (incluir comillas)
- [ ] Hacer redeploy manualmente
- [ ] Esperar el nuevo despliegue (2-3 minutos)
- [ ] Probar una página de blog: `/blog/forma-tradicional-de-sun-taiji-quan`
- [ ] Probar autenticación con Google
- [ ] Verificar que no haya errores 401 en los logs de Vercel

---

## Formato Correcto de FIREBASE_PRIVATE_KEY

### ✅ CORRECTO (con comillas):
```
"-----BEGIN PRIVATE KEY-----\nMIIE...NEXA==\n-----END PRIVATE KEY-----\n"
```

### ❌ INCORRECTO (sin comillas):
```
-----BEGIN PRIVATE KEY-----\nMIIE...NEXA==\n-----END PRIVATE KEY-----\n
```

### ❌ INCORRECTO (con saltos de línea reales):
```
"-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0...
...
-----END PRIVATE KEY-----"
```

---

## Problemas Conocidos

### Problema: Sigue apareciendo error después de corregir la clave
**Solución:**
1. Verifica que las comillas estén presentes
2. Haz un hard refresh en el navegador (Ctrl+Shift+R)
3. Espera 2-3 minutos para que Vercel propague los cambios

### Problema: El blog sigue dando error 500
**Solución:**
1. Verifica que el deployment más reciente tenga el commit `4536a3e`
2. Si no, espera unos minutos más para que Vercel termine de desplegar

---

## Contacto

Si después de seguir estos pasos sigues teniendo problemas:
1. Revisa los logs de Vercel (Deployments → tu deployment → Logs)
2. Verifica la consola del navegador (F12 → Console)
3. Comparte los errores específicos para diagnosticar mejor
