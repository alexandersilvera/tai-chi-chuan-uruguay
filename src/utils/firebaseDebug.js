// Utilidad para diagnosticar problemas de Firebase Auth
export function debugFirebaseConfig() {
  console.group('🔥 Firebase Configuration Debug');
  
  // Verificar variables de entorno
  const requiredEnvVars = [
    'PUBLIC_FIREBASE_API_KEY',
    'PUBLIC_FIREBASE_AUTH_DOMAIN', 
    'PUBLIC_FIREBASE_PROJECT_ID',
    'PUBLIC_FIREBASE_STORAGE_BUCKET',
    'PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'PUBLIC_FIREBASE_APP_ID'
  ];

  console.log('📋 Variables de entorno:');
  requiredEnvVars.forEach(varName => {
    const value = import.meta.env[varName];
    console.log(`${varName}: ${value ? '✅ Configurada' : '❌ Faltante'}`);
  });

  // Verificar dominio actual
  console.log(`🌐 Dominio actual: ${window.location.origin}`);
  
  // Verificar si estamos en desarrollo o producción
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  console.log(`🔧 Modo: ${isDevelopment ? 'Desarrollo' : 'Producción'}`);

  // Ya no verificamos los headers aquí para evitar confusión
  // console.log('🔒 Headers de seguridad:');
  // console.log(`Cross-Origin-Opener-Policy: ${window.crossOriginIsolated ? 'same-origin' : 'No configurado'}`);

  console.groupEnd();
}

export function checkFirebaseAuthDomain() {
  const authDomain = import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN;
  const currentDomain = window.location.hostname;
  
  if (authDomain && !authDomain.includes(currentDomain) && currentDomain !== 'localhost') {
    console.warn(`⚠️ El dominio actual (${currentDomain}) podría no estar autorizado en Firebase Auth`);
    console.warn(`📝 Asegúrate de agregar ${currentDomain} a los dominios autorizados en Firebase Console`);
  }
}

// Función para mostrar información útil en caso de error
export function handleFirebaseAuthError(error) {
  console.group('🚨 Firebase Auth Error');
  console.error('Código de error:', error.code);
  console.error('Mensaje:', error.message);
  
  // Sugerencias específicas según el tipo de error
  const suggestions = {
    'auth/unauthorized-domain': [
      '1. Ve a Firebase Console → Authentication → Settings → Authorized domains',
      `2. Agrega ${window.location.hostname} a la lista de dominios autorizados`,
      '3. Si usas Vercel, también agrega tu dominio .vercel.app'
    ],
    'auth/popup-blocked': [
      '1. Permite ventanas emergentes para este sitio',
      '2. Verifica que no tengas bloqueadores de anuncios activos',
      '3. Intenta usar signInWithRedirect() en lugar de signInWithPopup()'
    ],
    'auth/operation-not-allowed': [
      '1. Ve a Firebase Console → Authentication → Sign-in method',
      '2. Habilita el proveedor de Google',
      '3. Configura las credenciales OAuth correctamente'
    ],
    'auth/popup-closed-by-user': [
      '1. El usuario cerró la ventana de autenticación',
      '2. Esto es normal, no requiere acción'
    ]
  };

  if (suggestions[error.code]) {
    console.log('💡 Sugerencias para resolver:');
    suggestions[error.code].forEach(suggestion => console.log(suggestion));
  }
  
  console.groupEnd();
  return error;
} 