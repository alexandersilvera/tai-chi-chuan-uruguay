# Limitaciones de Vercel - Sistema de Archivos de Solo Lectura

## ❌ Problema identificado

El error `EROFS: read-only file system` ocurre porque **Vercel usa un sistema de archivos de solo lectura** en las funciones serverless. Esto significa que:

- ✅ Puedes **leer** archivos en tiempo de construcción (build time)
- ❌ NO puedes **escribir, modificar o eliminar** archivos en tiempo de ejecución (runtime)

## 🔍 Funcionalidades afectadas

### ❌ No funcionan en Vercel:
1. **Eliminar artículos** desde el dashboard
2. **Crear artículos** nuevos desde el dashboard
3. **Editar artículos** existentes desde el dashboard
4. Cualquier operación que modifique archivos en `src/content/blog/`

### ✅ Sí funcionan en Vercel:
1. **Leer artículos** (las páginas del blog funcionan perfectamente)
2. **Comentarios** (almacenados en Firestore)
3. **Likes** (almacenados en Firestore)
4. **Gestión de usuarios** (almacenados en Firestore)
5. Todas las páginas estáticas y dinámicas

## 🛠️ Soluciones posibles

### Opción 1: GitHub API (Recomendada para producción)
Usar la API de GitHub para modificar archivos directamente en el repositorio.

**Ventajas:**
- ✅ Los cambios se guardan en Git (historial completo)
- ✅ Se activa un redespliegue automático en Vercel
- ✅ Control de versiones integrado

**Desventajas:**
- ❌ Requiere configurar un GitHub Personal Access Token
- ❌ Más complejo de implementar
- ❌ Hay límites de tasa de la API de GitHub

**Implementación:**
```javascript
// Ejemplo de cómo sería con GitHub API
const response = await fetch(
  `https://api.github.com/repos/${owner}/${repo}/contents/src/content/blog/${filename}`,
  {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Eliminar artículo: ${filename}`,
      sha: fileSha, // SHA del archivo a eliminar
    })
  }
);
```

### Opción 2: Almacenar artículos en Firestore
Mover todo el contenido de los artículos a Firestore en lugar de archivos Markdown.

**Ventajas:**
- ✅ CRUD completo desde el dashboard
- ✅ No requiere redespliegues
- ✅ Más rápido para editar

**Desventajas:**
- ❌ Pierdes las ventajas de Markdown
- ❌ No tienes control de versiones
- ❌ Migración compleja

### Opción 3: Desarrollo local únicamente
Gestionar artículos solo desde tu computadora local y hacer deploy manual.

**Ventajas:**
- ✅ Simple, no requiere cambios
- ✅ Funciona perfectamente en local

**Desventajas:**
- ❌ No puedes gestionar desde cualquier lugar
- ❌ El dashboard de artículos es inútil en producción

### Opción 4: Usar otro proveedor (Railway, Render, etc.)
Algunos proveedores permiten sistemas de archivos persistentes.

**Ventajas:**
- ✅ Funcionaría sin cambios de código

**Desventajas:**
- ❌ Más caro que Vercel
- ❌ Requiere migrar todo el proyecto

## 🎯 Recomendación

Para tu caso específico, recomiendo **Opción 3** (desarrollo local) por ahora, y considerar **Opción 1** (GitHub API) si necesitas gestionar contenido desde cualquier lugar.

### Workflow recomendado (Opción 3):

1. **Crear/Editar artículos localmente:**
   ```bash
   # En tu computadora local
   cd tai-chi-chuan-uruguay
   npm run dev
   # Visita http://localhost:4321/dashboard/articulos
   # Crea/edita/elimina artículos normalmente
   ```

2. **Subir cambios a GitHub:**
   ```bash
   git add src/content/blog/
   git commit -m "Agregar/editar/eliminar artículo"
   git push
   ```

3. **Vercel despliega automáticamente** los cambios

## 🔧 Desactivar funcionalidades que no funcionan en Vercel

Podemos ocultar los botones de crear/editar/eliminar artículos en producción para evitar confusión:

```javascript
// Detectar si estamos en producción
const isProduction = import.meta.env.PROD;

// Mostrar botones solo en desarrollo
{!isProduction && (
  <button onClick={handleDeleteArticle}>Eliminar</button>
)}
```

## 📚 Recursos adicionales

- [Vercel File System Limitations](https://vercel.com/docs/concepts/limits/overview#file-system)
- [GitHub Contents API](https://docs.github.com/en/rest/repos/contents)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

## ⚠️ Nota importante

Este es un problema **común y esperado** en plataformas serverless como Vercel. No es un bug de tu código ni de la configuración - es simplemente cómo funciona Vercel por diseño.
