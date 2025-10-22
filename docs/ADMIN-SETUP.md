# Guía para Agregar Administradores

Esta guía explica cómo agregar nuevos administradores al sistema de Tai Chi Sun Uruguay.

## Prerrequisitos

- Acceso al repositorio del proyecto
- Node.js instalado
- Variables de entorno de Firebase configuradas (`.env` file)
- El nuevo administrador debe tener una cuenta de Google

## Proceso para Agregar un Administrador

### Paso 1: El usuario debe iniciar sesión por primera vez

El futuro administrador debe:

1. Ir a **https://www.taichisun.com**
2. Hacer clic en **"Iniciar Sesión"**
3. Seleccionar **"Continuar con Google"**
4. Usar su cuenta de Google

Esto crea automáticamente el usuario en Firebase Authentication.

### Paso 2: Ejecutar el script de administrador

Desde la raíz del proyecto, ejecuta:

```bash
node scripts/addAdmin.cjs <email-del-usuario>
```

**Ejemplo:**
```bash
node scripts/addAdmin.cjs suntaichi.uy@gmail.com
```

El script:
- ✅ Verificará si el usuario existe
- ✅ Mostrará información del usuario
- ✅ Pedirá confirmación
- ✅ Otorgará permisos de administrador
- ✅ Configurará custom claims en Firebase Auth

### Paso 3: El usuario debe reiniciar sesión

Para que los cambios surtan efecto:

1. Cerrar sesión en la aplicación
2. Volver a iniciar sesión

## Permisos de Administrador

Un administrador tiene acceso a:

### Dashboard (`/dashboard`)
- Vista general del sistema
- Estadísticas de contenido

### Gestión de Artículos (`/dashboard/articulos`)
- ✅ Crear nuevos artículos
- ✅ Editar artículos existentes
- ✅ Eliminar artículos
- ✅ Cambiar estado (borrador/publicado)
- ✅ Gestionar etiquetas e imágenes

### Gestión de Usuarios (`/dashboard/usuarios`)
- ✅ Ver lista de todos los usuarios
- ✅ Ver detalles de cada usuario
- ✅ Gestionar roles (otorgar/quitar admin)
- ✅ Bloquear/desbloquear usuarios

### Gestión de Comentarios (`/dashboard/comentarios`)
- ✅ Ver todos los comentarios
- ✅ Moderar comentarios
- ✅ Eliminar comentarios inapropiados

### Gestión de Likes (`/dashboard/likes`)
- ✅ Ver estadísticas de likes por artículo
- ✅ Gestionar likes

## Verificar Permisos

Para verificar que un usuario tiene permisos de administrador:

1. Ir a **Firebase Console** → **Authentication**
2. Buscar el usuario por email
3. Ver el campo **Custom Claims** (debe tener `admin: true`)

O verificar en **Firestore** → Colección `users` → Documento del usuario:
- Campo `isAdmin` debe ser `true`

## Revocar Permisos de Administrador

### Opción 1: Manualmente en Firestore
1. Ir a **Firebase Console** → **Firestore**
2. Navegar a `users` → `[userId]`
3. Editar el documento:
   - Cambiar `isAdmin` a `false`
   - Agregar `adminRevokedAt` con timestamp actual
   - Agregar `adminRevokedBy` con identificador de quien revoca

### Opción 2: Mediante script (futuro)
```bash
node scripts/removeAdmin.cjs <email-del-usuario>
```
*(Script por crear)*

## Solución de Problemas

### "Usuario no existe en Firebase Auth"
**Solución**: El usuario debe iniciar sesión al menos una vez en la aplicación antes de poder otorgarle permisos de administrador.

### "Custom claims no actualizan"
**Solución**: El usuario debe cerrar sesión completamente y volver a iniciar sesión. Los custom claims solo se actualizan al generar un nuevo token.

### "Acceso denegado al dashboard"
**Verificar**:
1. El campo `isAdmin` es `true` en Firestore
2. El usuario ha cerrado sesión y vuelto a iniciar
3. Los custom claims están configurados en Firebase Auth
4. No hay errores en la consola del navegador

## Lista de Administradores Actuales

Mantén esta lista actualizada:

| Email | Nombre | Fecha de Alta | Rol |
|-------|--------|---------------|-----|
| suntaichi.uy@gmail.com | Administrador Principal | 2025-10-22 | Super Admin |
| *(agregar más)* | | | |

## Seguridad

⚠️ **Importante:**
- Solo otorga permisos de administrador a personas de confianza
- Los administradores tienen acceso completo al sistema
- Todos los cambios quedan registrados en los logs
- Revisa periódicamente la lista de administradores

## Logs y Auditoría

Los cambios administrativos se registran en:
- **Firestore** → Colección `likesLog` (acciones de likes)
- **Firestore** → Colección `abuseReports` (reportes de abuso)
- **Firebase Auth** → Historial de usuarios

## Contacto

Para problemas con permisos de administrador, contacta al desarrollador del sistema.

---

*Última actualización: 2025-10-22*
