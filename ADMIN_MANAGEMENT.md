# Gestión de Usuarios Administradores

## Configuración de Seguridad

### Variables de Entorno
El email del administrador se configura mediante variables de entorno para evitar hardcodear credenciales en el código:

```bash
# En .env (NO incluir en control de versiones)
ADMIN_EMAIL=tu-email@ejemplo.com
```

### Archivos de Configuración
- `.env` - Contiene las credenciales reales (ignorado por Git)
- `.env.example` - Plantilla con variables necesarias (incluido en Git)

## Scripts Disponibles

### 1. Crear Usuario Administrador
```bash
node create-admin-user.js
```
- Convierte un usuario existente en administrador
- Usa la variable `ADMIN_EMAIL` del archivo `.env`
- Configura tanto Firestore como Firebase Auth

### 2. Verificar Usuarios Administradores
```bash
node check-admin-users.js
```
- Lista todos los usuarios administradores
- Muestra información básica

### 3. Gestión Avanzada de Administradores
```bash
# Listar administradores con detalles completos
node manage-admin-users.js list

# Limpiar usuarios administradores huérfanos
node manage-admin-users.js cleanup

# Eliminar usuario administrador específico
node manage-admin-users.js remove UID_DEL_USUARIO
```

### 4. Sincronizar Datos
```bash
node sync-admin-data.js
```
- Sincroniza datos entre Firebase Auth y Firestore
- Completa información faltante en Firestore

## Estado Actual de Administradores

### Administradores Activos:
1. **alexandersilvera@hotmail.com**
   - UID: `MlvjFYNRjbg1C2eZKoE0GjUBlHK2`
   - Estado: ✅ Completamente configurado

2. **sindicatu.t.i.l@gmail.com**
   - UID: `pPWbM0SY4jdEhgXJwSddT3gkKM52`
   - Estado: ✅ Completamente configurado

## Mejores Prácticas de Seguridad

1. **No hardcodear emails** - Usar variables de entorno
2. **Mantener .env fuera de Git** - Verificar que esté en `.gitignore`
3. **Usar .env.example** - Para documentar variables necesarias
4. **Revisar administradores regularmente** - Usar `manage-admin-users.js list`
5. **Sincronizar datos** - Ejecutar `sync-admin-data.js` después de cambios

## Troubleshooting

### Error: "ADMIN_EMAIL no encontrada"
```bash
# Verificar que la variable esté en .env
grep ADMIN_EMAIL .env

# Si no existe, agregarla:
echo "ADMIN_EMAIL=tu-email@ejemplo.com" >> .env
```

### Error: "Usuario no encontrado"
El usuario debe estar registrado en Firebase Auth antes de convertirlo en administrador:
1. Ir a la aplicación web
2. Registrarse/iniciar sesión con el email
3. Ejecutar el script de creación de admin

### Verificar permisos de acceso al dashboard
Los administradores pueden acceder a `/dashboard` después de:
1. Cerrar sesión completamente
2. Volver a iniciar sesión
3. Los cambios de permisos requieren nueva sesión 