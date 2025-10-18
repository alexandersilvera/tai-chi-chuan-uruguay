import React, { useState, useRef } from 'react';

export default function UserDetail({ user }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [blockReason, setBlockReason] = useState('');
  const [resetPasswordReason, setResetPasswordReason] = useState('');
  const [resetPasswordMessage, setResetPasswordMessage] = useState('');
  const [isUserBlocked, setIsUserBlocked] = useState(false); // Simulación de estado de bloqueo
  const [loading, setLoading] = useState(false);
  const emailModalRef = useRef(null);
  const blockModalRef = useRef(null);
  const resetPasswordModalRef = useRef(null);

  // Función para manejar el envío de correo
  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de envío de correo
    setTimeout(() => {
      // Aquí iría la lógica real para enviar el correo usando Firebase o una API
      console.log('Enviando correo a:', user.email);
      console.log('Asunto:', emailSubject);
      console.log('Mensaje:', emailMessage);
      
      // Reiniciar formulario y cerrar modal
      setEmailSubject('');
      setEmailMessage('');
      setShowEmailModal(false);
      setLoading(false);
      
      // Mostrar notificación de éxito (implementación real usaría un componente de toast/notificación)
      alert('Correo enviado correctamente a ' + user.email);
    }, 1500);
  };

  // Función para manejar el bloqueo de usuario
  const handleBlockUser = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de bloqueo de usuario
    setTimeout(() => {
      // Aquí iría la lógica real para bloquear al usuario usando Firebase Admin SDK
      console.log('Bloqueando usuario:', user.id);
      console.log('Razón:', blockReason);
      
      // Actualizar estado y cerrar modal
      setIsUserBlocked(true);
      setBlockReason('');
      setShowBlockModal(false);
      setLoading(false);
      
      // Mostrar notificación de éxito
      alert('Usuario bloqueado correctamente');
    }, 1500);
  };

  // Función para desbloquear usuario
  const handleUnblockUser = () => {
    setLoading(true);
    
    // Simulación de desbloqueo
    setTimeout(() => {
      // Aquí iría la lógica real para desbloquear al usuario
      console.log('Desbloqueando usuario:', user.id);
      
      setIsUserBlocked(false);
      setLoading(false);
      
      // Mostrar notificación de éxito
      alert('Usuario desbloqueado correctamente');
    }, 1500);
  };

  // Función para manejar el restablecimiento de contraseña
  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de envío de correo para restablecer contraseña
    setTimeout(() => {
      // Aquí iría la lógica real para enviar el correo de restablecimiento de contraseña usando Firebase Auth
      console.log('Enviando correo de restablecimiento de contraseña a:', user.email);
      console.log('Razón:', resetPasswordReason);
      console.log('Mensaje personalizado:', resetPasswordMessage);
      
      // En Firebase, se usaría algo como:
      // firebase.auth().sendPasswordResetEmail(user.email)
      //   .then(() => { /* éxito */ })
      //   .catch((error) => { /* error */ });
      
      // Reiniciar formulario y cerrar modal
      setResetPasswordReason('');
      setResetPasswordMessage('');
      setShowResetPasswordModal(false);
      setLoading(false);
      
      // Mostrar notificación de éxito
      alert('Se ha enviado un correo de restablecimiento de contraseña a ' + user.email);
    }, 1500);
  };

  if (!user) {
    return (
      <div className="p-6 bg-yellow-50 text-yellow-700 rounded-lg shadow-sm border border-yellow-100 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>No se encontró información del usuario.</span>
      </div>
    );
  }

  // Fecha de registro (simulada - en un caso real vendría de la base de datos)
  const registrationDate = new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString();
  
  // Última actividad (simulada - en un caso real vendría de la base de datos)
  const lastActivity = new Date(Date.now() - Math.random() * 1000000000).toLocaleString();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
      {/* Cabecera con información básica */}
      <div className="relative">
        {/* Banner de fondo */}
        <div className="h-32 sm:h-48 bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>
        
        {/* Contenido de la cabecera */}
        <div className="px-4 sm:px-8 pb-5 pt-0 relative">
          {/* Avatar */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 sm:left-8 sm:transform-none">
            <img 
              src={user.photoURL || '/default-avatar.png'} 
              alt={user.displayName || 'Usuario'} 
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          
          {/* Información del usuario */}
          <div className="mt-20 sm:mt-4 sm:ml-40 flex flex-col sm:flex-row justify-between items-center sm:items-end">
            <div className="text-center sm:text-left w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {user.displayName || 'Sin nombre'}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base break-all mt-1">{user.email}</p>
              
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${user.isAdmin ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={user.isAdmin ? "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" : "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"} />
                  </svg>
                  {user.isAdmin ? 'Administrador' : 'Usuario'}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Registro: {registrationDate}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Última actividad: {lastActivity.split(',')[0]}
                </span>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="mt-4 sm:mt-0 flex gap-2">
              <button 
                onClick={() => setShowEmailModal(true)}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contactar
              </button>
              {isUserBlocked ? (
                <button 
                  onClick={handleUnblockUser}
                  disabled={loading}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  {loading ? 'Procesando...' : 'Desbloquear'}
                </button>
              ) : (
                <button 
                  onClick={() => setShowBlockModal(true)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Bloquear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pestañas de navegación */}
      <div className="border-b overflow-x-auto bg-gray-50">
        <nav className="flex whitespace-nowrap min-w-full px-4 sm:px-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-4 font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-b-2 border-blue-500 text-blue-700 bg-white -mb-px'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Perfil
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`px-4 py-4 font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'comments'
                ? 'border-b-2 border-blue-500 text-blue-700 bg-white -mb-px'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="hidden sm:inline">Comentarios</span>
            <span className="sm:hidden">Com.</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">{user.comments.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('likes')}
            className={`px-4 py-4 font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'likes'
                ? 'border-b-2 border-blue-500 text-blue-700 bg-white -mb-px'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="hidden sm:inline">Me gusta</span>
            <span className="sm:hidden">Likes</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">{user.likes.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-4 font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'activity'
                ? 'border-b-2 border-blue-500 text-blue-700 bg-white -mb-px'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Actividad
          </button>
        </nav>
      </div>

      {/* Contenido según la pestaña activa */}
      <div className="p-4 sm:p-6">
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Información de perfil */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Información de perfil</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-4 sm:p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">Email</p>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <p className="font-medium text-gray-800 break-all">{user.email}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">ID de usuario</p>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                          </svg>
                          <p className="font-medium text-gray-800 break-all">
                            <span className="font-mono">{user.id}</span>
                            <button 
                              className="ml-2 text-xs text-blue-600 hover:text-blue-800"
                              onClick={() => navigator.clipboard.writeText(user.id)}
                              title="Copiar ID"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">Nombre</p>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <p className="font-medium text-gray-800">{user.displayName || 'No disponible'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">Tipo de cuenta</p>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={user.isAdmin ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"} />
                          </svg>
                          <p className="font-medium text-gray-800">{user.isAdmin ? 'Administrador' : 'Usuario estándar'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Estadísticas</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Comentarios</p>
                    <p className="text-2xl font-bold text-gray-800">{user.comments.length}</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Me gusta</p>
                    <p className="text-2xl font-bold text-gray-800">{user.likes.length}</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total actividad</p>
                    <p className="text-2xl font-bold text-gray-800">{user.comments.length + user.likes.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Acciones</h2>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button 
                    onClick={() => alert('Funcionalidad de edición de usuario')}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar usuario
                  </button>
                  <button 
                    onClick={() => alert('Funcionalidad de eliminación de usuario')}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Eliminar usuario
                  </button>
                  <button 
                    onClick={() => setShowResetPasswordModal(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Restablecer contraseña
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comments' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Comentarios <span className="text-gray-500 font-normal">({user.comments.length})</span></h2>
              </div>
              
              {user.comments.length > 0 && (
                <div className="flex items-center gap-2">
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option value="newest">Más recientes</option>
                    <option value="oldest">Más antiguos</option>
                  </select>
                </div>
              )}
            </div>
            
            {user.comments.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Este usuario no ha realizado comentarios.</p>
                <p className="text-gray-500 text-sm mt-1">Los comentarios aparecerán aquí cuando el usuario participe en discusiones.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                {user.comments.map((comment, index) => (
                  <div key={index} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <div>
                            <a 
                              href={`/dashboard/articles/${comment.articleId}`} 
                              className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-base truncate max-w-full inline-flex items-center gap-1"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v10a2 2 0 002 2h5z" />
                              </svg>
                              {comment.articleId}
                            </a>
                          </div>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {comment.timestamp}
                          </span>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-3">
                          <p className="text-gray-700 text-sm sm:text-base break-words">{comment.text}</p>
                        </div>
                        
                        <div className="flex justify-end gap-2">
                          <button className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1 bg-gray-100 hover:bg-gray-200 transition-colors px-2 py-1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Editar
                          </button>
                          <button className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 hover:bg-red-100 transition-colors px-2 py-1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'likes' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Me gusta <span className="text-gray-500 font-normal">({user.likes.length})</span></h2>
              </div>
              
              {user.likes.length > 0 && (
                <div className="flex items-center gap-2">
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option value="newest">Más recientes</option>
                    <option value="oldest">Más antiguos</option>
                  </select>
                </div>
              )}
            </div>
            
            {user.likes.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Este usuario no ha dado me gusta a ningún artículo.</p>
                <p className="text-gray-500 text-sm mt-1">Los me gusta aparecerán aquí cuando el usuario interactue con los artículos.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-1">
                {user.likes.map((like, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {like.timestamp}
                        </span>
                      </div>
                      
                      <div className="flex-grow">
                        <a 
                          href={`/dashboard/articles/${like.articleId}`} 
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-base line-clamp-2 mb-2"
                        >
                          {like.articleId}
                        </a>
                        
                        <p className="text-sm text-gray-500 line-clamp-2">
                          Artículo con ID: {like.articleId.substring(0, 15)}{like.articleId.length > 15 ? '...' : ''}
                        </p>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                        <a 
                          href={`/dashboard/articles/${like.articleId}`}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Ver artículo
                        </a>
                        <button className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Actividad reciente</h2>
              </div>
              
              <div className="flex items-center gap-2">
                <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                  <option value="all">Todas las actividades</option>
                  <option value="comments">Solo comentarios</option>
                  <option value="likes">Solo me gusta</option>
                </select>
              </div>
            </div>
            
            {user.comments.length === 0 && user.likes.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">No hay actividad reciente</p>
                <p className="text-gray-500 text-sm mt-1">La actividad del usuario aparecerá aquí cuando interactue con el sitio.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-700">Historial de actividad</h3>
                    <div className="text-xs text-gray-500">
                      {user.comments.length + user.likes.length} actividades en total
                    </div>
                  </div>
                </div>
                
                <div className="max-h-[60vh] overflow-y-auto">
                  <div className="relative pl-8 pr-4 py-4">
                    {/* Línea de tiempo vertical */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <div className="space-y-6">
                      {[...user.comments, ...user.likes]
                        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                        .map((item, index) => {
                          const isComment = Boolean(item.text);
                          return (
                            <div key={index} className="relative">
                              {/* Indicador de tiempo */}
                              <div className="absolute -left-8 mt-1.5">
                                <div className={`w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${isComment ? 'bg-blue-500' : 'bg-red-500'}`}>
                                  {isComment ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center gap-1 text-sm font-medium text-gray-800">
                                    {isComment ? (
                                      <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        <span>Comentó en un artículo</span>
                                      </>
                                    ) : (
                                      <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span>Le gustó un artículo</span>
                                      </>
                                    )}
                                  </div>
                                  <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {item.timestamp}
                                  </span>
                                </div>
                                
                                <div className="mb-2">
                                  <a 
                                    href={`/dashboard/articles/${item.articleId}`} 
                                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center gap-1"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v10a2 2 0 002 2h5z" />
                                    </svg>
                                    {item.articleId}
                                  </a>
                                </div>
                                
                                {isComment && (
                                  <div className="text-sm text-gray-700 bg-white p-2 rounded border border-gray-100 mb-2">
                                    {item.text}
                                  </div>
                                )}
                                
                                <div className="flex justify-end gap-2">
                                  <a 
                                    href={`/dashboard/articles/${item.articleId}`}
                                    className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-200"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Ver artículo
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal para enviar correo */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            ref={emailModalRef} 
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn"
          >
            <div className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">Contactar a {user.displayName || user.email}</h3>
              <button 
                onClick={() => setShowEmailModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSendEmail} className="p-4 sm:p-5">
              <div className="mb-4">
                <label htmlFor="emailTo" className="block text-sm font-medium text-gray-700 mb-1">Para:</label>
                <input 
                  type="text" 
                  id="emailTo" 
                  value={user.email} 
                  readOnly 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="emailSubject" className="block text-sm font-medium text-gray-700 mb-1">Asunto:</label>
                <input 
                  type="text" 
                  id="emailSubject" 
                  value={emailSubject} 
                  onChange={(e) => setEmailSubject(e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escribe el asunto del correo"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="emailMessage" className="block text-sm font-medium text-gray-700 mb-1">Mensaje:</label>
                <textarea 
                  id="emailMessage" 
                  value={emailMessage} 
                  onChange={(e) => setEmailMessage(e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                  placeholder="Escribe tu mensaje"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <button 
                  type="button" 
                  onClick={() => setShowEmailModal(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Enviar correo
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal para bloquear usuario */}
      {showBlockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            ref={blockModalRef} 
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn"
          >
            <div className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center bg-red-50">
              <h3 className="text-lg font-medium text-red-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Bloquear usuario
              </h3>
              <button 
                onClick={() => setShowBlockModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-5">
              <div className="mb-4 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <p className="text-sm text-yellow-800">
                  Estás a punto de bloquear a <strong>{user.displayName || user.email}</strong>. 
                  Esta acción impedirá que el usuario inicie sesión en el sitio.
                </p>
              </div>
              
              <form onSubmit={handleBlockUser}>
                <div className="mb-4">
                  <label htmlFor="blockReason" className="block text-sm font-medium text-gray-700 mb-1">Razón del bloqueo:</label>
                  <textarea 
                    id="blockReason" 
                    value={blockReason} 
                    onChange={(e) => setBlockReason(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 min-h-[80px]"
                    placeholder="Especifica la razón por la que estás bloqueando a este usuario"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-2 mt-6">
                  <button 
                    type="button" 
                    onClick={() => setShowBlockModal(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Bloquear usuario
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal para restablecer contraseña */}
      {showResetPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            ref={resetPasswordModalRef} 
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn"
          >
            <div className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Restablecer contraseña
              </h3>
              <button 
                onClick={() => setShowResetPasswordModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-5">
              <div className="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  Estás a punto de enviar un correo electrónico a <strong>{user.displayName || user.email}</strong> para restablecer su contraseña.
                </p>
              </div>
              
              <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <label htmlFor="emailTo" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico:</label>
                  <input 
                    type="text" 
                    id="emailTo" 
                    value={user.email} 
                    readOnly 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="resetPasswordReason" className="block text-sm font-medium text-gray-700 mb-1">Razón del restablecimiento:</label>
                  <select 
                    id="resetPasswordReason" 
                    value={resetPasswordReason} 
                    onChange={(e) => setResetPasswordReason(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Selecciona una razón</option>
                    <option value="solicitud_usuario">Solicitud del usuario</option>
                    <option value="seguridad">Problemas de seguridad</option>
                    <option value="olvido">Olvido de contraseña</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="resetPasswordMessage" className="block text-sm font-medium text-gray-700 mb-1">Mensaje personalizado (opcional):</label>
                  <textarea 
                    id="resetPasswordMessage" 
                    value={resetPasswordMessage} 
                    onChange={(e) => setResetPasswordMessage(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                    placeholder="Añade un mensaje personalizado que se incluirá en el correo de restablecimiento"
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-2 mt-6">
                  <button 
                    type="button" 
                    onClick={() => setShowResetPasswordModal(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Enviar correo de restablecimiento
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
