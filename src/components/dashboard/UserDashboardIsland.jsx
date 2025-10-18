import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase/client.js";

export default function UserDashboardIsland({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers || []);
  const [modalUser, setModalUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Obtener el usuario actual autenticado
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Función para obtener el token de autenticación
  const getAuthToken = async () => {
    if (!currentUser) {
      throw new Error('Usuario no autenticado');
    }
    return await currentUser.getIdToken();
  };

  // Función para cambiar el estado de administrador
  const toggleAdminStatus = async (userId, currentStatus) => {
    if (loading) return;
    
    const confirmation = window.confirm(
      `¿Estás seguro de que quieres ${currentStatus ? 'quitar' : 'otorgar'} permisos de administrador a este usuario?`
    );
    
    if (!confirmation) return;

    setLoading(true);
    try {
      const token = await getAuthToken();
      
      const response = await fetch('/api/admin/users/toggle-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId,
          isAdmin: !currentStatus
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al cambiar permisos de administrador');
      }

      // Actualizar el estado local
      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, isAdmin: !currentStatus }
          : user
      ));

      // Actualizar el modal si está abierto para este usuario
      if (modalUser && modalUser.id === userId) {
        setModalUser({ ...modalUser, isAdmin: !currentStatus });
      }

      alert(`Permisos de administrador ${!currentStatus ? 'otorgados' : 'removidos'} exitosamente`);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar usuario
  const deleteUser = async (userId, userName) => {
    if (loading) return;
    
    const confirmation = window.confirm(
      `¿Estás seguro de que quieres eliminar al usuario "${userName}"? Esta acción no se puede deshacer y eliminará todos sus comentarios y likes.`
    );
    
    if (!confirmation) return;

    setLoading(true);
    try {
      const token = await getAuthToken();
      
      const response = await fetch('/api/admin/users/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar usuario');
      }

      const result = await response.json();
      
      // Actualizar el estado local
      setUsers(users.filter(user => user.id !== userId));
      setModalUser(null);

      // Mostrar resumen de eliminación
      if (result.summary) {
        alert(`Usuario eliminado exitosamente:\n\n` +
              `• Comentarios eliminados: ${result.summary.deletedComments}\n` +
              `• Likes eliminados: ${result.summary.deletedLikes + result.summary.deletedUserLikes}\n` +
              `${result.summary.errors.length > 0 ? `• Advertencias: ${result.summary.errors.join(', ')}` : ''}`);
      } else {
        alert('Usuario eliminado exitosamente');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Función para formatear la fecha
  const formatDate = (isoString) => {
    if (!isoString || isoString === 'Sin fecha') return 'Fecha desconocida';
    try {
      return new Date(isoString).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Fecha inválida';
    }
  };

  // Función para manejar errores de imagen
  const handleImageError = (e) => {
    e.target.src = '/default-avatar.svg';
  };

  // Si no hay usuario autenticado, mostrar mensaje
  if (!currentUser) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
        <p>Cargando autenticación...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avatar</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actividad</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 whitespace-nowrap text-sm text-gray-500 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p>No se encontraron usuarios.</p>
                  </div>
                </td>
              </tr>
            )}
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <img 
                    src={user.photoURL} 
                    alt={`Avatar de ${user.displayName}`}
                    className="w-10 h-10 rounded-full border border-gray-200"
                    onError={handleImageError}
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 truncate max-w-[120px]" title={user.displayName}>
                    {user.displayName}
                  </div>
                  {user.isAdmin && (
                    <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium">
                      Administrador
                    </span>
                  )}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap max-w-[180px] truncate text-sm text-gray-600" title={user.email}>
                  {user.email}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                    user.isAdmin 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.isAdmin ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-xs text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {user.comments.length} comentario{user.comments.length !== 1 ? 's' : ''}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {user.likes.length} like{user.likes.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors"
                    title="Ver detalles"
                    onClick={() => setModalUser(user)}
                  >
                    Ver
                  </button>
                  <button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs transition-colors" 
                    title="Editar usuario"
                  >
                    Editar
                  </button>
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors" 
                    title="Eliminar usuario"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal mejorado */}
      {modalUser && (
        <div className="fixed z-50 inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Header del modal */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Detalles del Usuario</h3>
                <button
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setModalUser(null)}
                  aria-label="Cerrar modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              {/* Información del usuario */}
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={modalUser.photoURL} 
                  alt={`Avatar de ${modalUser.displayName}`}
                  className="w-16 h-16 rounded-full border-2 border-gray-200 flex-shrink-0"
                  onError={handleImageError}
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{modalUser.displayName || 'Sin nombre'}</h4>
                  <p className="text-gray-600">{modalUser.email || 'Sin email'}</p>
                  <p className="text-sm text-gray-400 font-mono">ID: {modalUser.id}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      modalUser.isAdmin 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {modalUser.isAdmin ? 'Administrador' : 'Usuario'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div>
                      <p className="text-2xl font-bold text-blue-700">{modalUser.comments.length}</p>
                      <p className="text-sm text-blue-600">Comentarios</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div>
                      <p className="text-2xl font-bold text-red-700">{modalUser.likes.length}</p>
                      <p className="text-sm text-red-600">Likes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentarios */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Comentarios ({modalUser.comments.length})
                </h5>
                {modalUser.comments && modalUser.comments.length > 0 ? (
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {modalUser.comments.map((comment, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-blue-600 text-sm">{comment.articleId}</span>
                          <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p>Este usuario no ha hecho comentarios aún.</p>
                  </div>
                )}
              </div>

              {/* Likes */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Likes ({modalUser.likes.length})
                </h5>
                {modalUser.likes && modalUser.likes.length > 0 ? (
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {modalUser.likes.map((like, idx) => (
                      <div key={idx} className="bg-red-50 p-3 rounded-lg border flex justify-between items-center">
                        <span className="font-medium text-red-600 text-sm">{like.articleId}</span>
                        <span className="text-xs text-gray-500">{formatDate(like.timestamp)}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p>Este usuario no ha dado likes aún.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer del modal */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                  onClick={() => setModalUser(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
