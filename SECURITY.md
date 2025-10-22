# Medidas de Seguridad - Sistema de Likes

## ✅ Implementado

### 1. Validación en Reglas de Firestore

#### Colección `likes/{slug}` (contador global)
- **Create**: Solo se permite crear con `count` entre 0 y 1
- **Update**: Solo permite incrementar/decrementar en 1 (`+1` o `-1`)
- **Validación**: El contador nunca puede ser negativo
- **Campos**: Solo se permite el campo `count`, nada más

#### Subcolección `posts/{slug}/likes/{userId}`
- **Create**: Solo el usuario autenticado puede crear su propio like
- **Validación de timestamp**: El timestamp debe ser reciente (últimos 5 segundos)
- **Campos requeridos**: `userId` y `timestamp`
- **Delete**: Solo el usuario puede eliminar su propio like
- **Update**: No permitido

#### Subcolección `users/{userId}/likes/{postSlug}`
- **Create**: Solo con campos válidos (`timestamp`, `postSlug`)
- **Validación**: El `postSlug` debe coincidir con el ID del documento
- **Timestamp**: Debe ser reciente (últimos 5 segundos)
- **Delete**: Solo el usuario puede eliminar sus propios registros

### 2. Protección en el Cliente (`LikeButton.jsx`)

- **Throttling**: Variable `isProcessing` previene clics múltiples simultáneos
- **Validación previa**: Verifica que el like existe/no existe antes de modificar
- **Manejo de errores**: Revierte el estado si hay error
- **Solo usuarios autenticados**: Deshabilitado para usuarios no logueados

### 3. Normalización de Slugs

- Todos los slugs se normalizan a minúsculas antes de cualquier operación
- Previene inconsistencias entre mayúsculas/minúsculas

## 🔒 Limitaciones Actuales

### Rate Limiting
- **Limitación**: Firestore Security Rules no soporta rate limiting nativo
- **Riesgo**: Un usuario podría hacer múltiples requests rápidos (aunque cada uno solo incrementa/decrementa en 1)
- **Mitigación parcial**: El cliente tiene throttling, pero puede ser evadido

### Protección contra scripts automatizados
- Un usuario malicioso podría escribir un script que:
  - Da like, quita like, da like, etc. repetidamente
  - Aunque cada operación solo cambia el contador en ±1, podría hacerlo miles de veces

## 🚀 Recomendaciones Adicionales (Opcional)

### 1. Implementar Cloud Functions (Recomendado)

Crear una Cloud Function que:
- Escuche cambios en `posts/{slug}/likes/{userId}`
- Actualice automáticamente el contador en `likes/{slug}`
- Implementar rate limiting por usuario (ej: máximo 10 likes/dislikes por minuto)

```javascript
// functions/index.js
exports.updateLikeCount = functions.firestore
  .document('posts/{slug}/likes/{userId}')
  .onWrite(async (change, context) => {
    const slug = context.params.slug;
    const likesRef = admin.firestore().collection('posts').doc(slug).collection('likes');
    const snapshot = await likesRef.get();
    const count = snapshot.size;

    await admin.firestore().collection('likes').doc(slug).set({ count });
  });
```

**Ventajas**:
- El cliente no puede manipular el contador directamente
- Más seguro y confiable
- Puede implementar rate limiting sofisticado

### 2. Rate Limiting con Firebase App Check

- Verificar que las requests vienen de tu app oficial
- Proteger contra bots y scripts automatizados
- Configurar cuotas por dispositivo

### 3. Logging y Monitoreo

Crear una colección `likesLog` para registrar:
- Usuario que dio like
- Timestamp
- Artículo
- Acción (like/unlike)

Esto permite:
- Detectar patrones de abuso
- Auditoría de acciones
- Implementar límites retroactivos

### 4. Limitar Likes por Usuario por Período

En Cloud Functions, implementar:
- Máximo X likes por usuario por día
- Almacenar en Firestore o Redis
- Rechazar requests que excedan el límite

### 5. CAPTCHA para acciones repetitivas

Si un usuario da like/unlike más de X veces en Y minutos:
- Requerir CAPTCHA (reCAPTCHA v3)
- Previene bots automatizados

## 📊 Análisis de Riesgos

### Riesgo Bajo ✅
- **Manipulación del contador**: Protegido (solo ±1 por operación)
- **Likes duplicados del mismo usuario**: Protegido (validación de existencia)
- **Contador negativo**: Protegido (validación en rules)

### Riesgo Medio ⚠️
- **Scripts automatizados**: Parcialmente protegido (throttling en cliente)
- **Múltiples accounts**: No protegido actualmente
- **Rate limiting**: Solo protección básica en cliente

### Riesgo Alto 🔴
- **DDoS de likes**: Sin protección server-side
- **Abuso coordinado**: Sin detección de patrones

## 💡 Conclusión

**Para un blog personal/pequeño**: Las medidas actuales son suficientes.

**Para un sitio de alto tráfico**: Considera implementar:
1. Cloud Functions para manejar el contador
2. Firebase App Check
3. Rate limiting server-side
4. Sistema de logging y detección de abuso

## 📝 Próximos Pasos Recomendados

1. **Corto plazo**: Monitorear la colección `likes` para detectar patrones anormales
2. **Mediano plazo**: Implementar Cloud Functions si el tráfico aumenta
3. **Largo plazo**: Agregar Firebase App Check y rate limiting avanzado

## 🔍 Cómo Detectar Abuso

Queries útiles para monitoreo:

```javascript
// Encontrar usuarios con más de 50 likes en el último día
db.collection('users').where('likesCount', '>', 50)

// Encontrar artículos con spikes de likes anormales
// (comparar con promedio histórico)
```

## 📞 Contacto

Si detectas comportamiento abusivo, puedes:
1. Ver logs en Firebase Console
2. Revisar la colección `likesLog` (si la implementas)
3. Bloquear usuarios específicos agregando un campo `blocked` en su documento
