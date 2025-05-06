import React, { useState } from "react";

export default function UserDashboardIsland({ users }) {
  const [modalUser, setModalUser] = useState(null);

  return (
    <div>
      {/* Vista móvil: Tarjetas */}
      <div className="md:hidden space-y-4">
        {users.length === 0 ? (
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center text-gray-500">
            No se encontraron usuarios.
          </div>
        ) : (
          users.map(user => (
            <div key={user.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 flex items-center space-x-3 border-b">
                <div className="flex-shrink-0">
                  <img 
                    src={user.photoURL || '/default-avatar.png'} 
                    alt="Avatar" 
                    className="w-10 h-10 rounded-full border"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.displayName || 'Sin nombre'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                {user.isAdmin && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    Admin
                  </span>
                )}
              </div>
              
              <div className="p-3 border-b grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500 block">Comentarios:</span>
                  <span className="font-medium">
                    {user.comments.length > 0 ? `${user.comments.length} comentario${user.comments.length > 1 ? 's' : ''}` : 'Sin comentarios'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Me gusta:</span>
                  <span className="font-medium">
                    {user.likes.length > 0 ? `${user.likes.length} me gusta` : 'Sin me gusta'}
                  </span>
                </div>
              </div>
              
              <div className="p-3 grid grid-cols-2 gap-2">
                <div className="flex gap-1">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1.5 rounded text-xs flex-1 flex items-center justify-center"
                    onClick={() => setModalUser(user)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver
                  </button>
                  <a 
                    href={`/dashboard/users/${user.id}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1.5 rounded text-xs flex-1 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Perfil
                  </a>
                </div>
                <div className="flex gap-1">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1.5 rounded text-xs flex-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded text-xs flex-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Vista desktop: Tabla */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comentarios</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Me gusta</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-sm text-gray-500 text-center">
                  No se encontraron usuarios.
                </td>
              </tr>
            )}
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img className="h-8 w-8 rounded-full" src={user.photoURL || '/default-avatar.png'} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{user.displayName || '-'}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm max-w-[180px] truncate" title={user.email}>{user.email}</td>
                <td className="px-4 py-3 text-sm">
                  {user.isAdmin ? (
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Sí
                    </span>
                  ) : (
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  {user.comments.length > 0 ? (
                    <span className="text-gray-900">{user.comments.length} comentario{user.comments.length > 1 ? 's' : ''}</span>
                  ) : (
                    <span className="text-gray-500">Sin comentarios</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  {user.likes.length > 0 ? (
                    <span className="text-gray-900">{user.likes.length} me gusta</span>
                  ) : (
                    <span className="text-gray-500">Sin me gusta</span>
                  )}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                      onClick={() => setModalUser(user)}
                    >
                      Vista rápida
                    </button>
                    <a 
                      href={`/dashboard/users/${user.id}`}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded text-xs flex items-center"
                    >
                      Perfil completo
                    </a>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs">
                      Editar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalUser && (
        <div className="fixed z-50 inset-0 bg-black/50 flex items-start md:items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-3 sm:p-6 relative my-4 md:my-auto">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl sm:text-2xl z-10"
              onClick={() => setModalUser(null)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            
            {/* Encabezado del modal */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <img 
                src={modalUser.photoURL || '/default-avatar.png'} 
                alt="Avatar" 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border mx-auto sm:mx-0" 
              />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <div className="font-semibold text-base sm:text-lg">{modalUser.displayName || 'Sin nombre'}</div>
                <div className="text-xs sm:text-sm text-gray-500 break-all">{modalUser.email || 'Sin email'}</div>
                <div className="text-xs text-gray-400 truncate">
                  <span className="hidden sm:inline">UID: </span>
                  {modalUser.id.substring(0, 8)}...
                </div>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs ${modalUser.isAdmin ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {modalUser.isAdmin ? 'Admin' : 'Usuario'}
                </span>
              </div>
            </div>
            
            {/* Contenido con scroll */}
            <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-1 space-y-3 sm:space-y-4">
              {/* Sección de comentarios */}
              <div>
                <div className="flex items-center justify-between">
                  <strong className="text-sm sm:text-base">Comentarios</strong>
                  <span className="text-xs bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded-full">{modalUser.comments.length}</span>
                </div>
                {modalUser.comments && modalUser.comments.length > 0 ? (
                  <ul className="list-disc pl-4 sm:pl-5 mt-1 space-y-2">
                    {modalUser.comments.map((c, idx) => (
                      <li key={idx} className="text-xs sm:text-sm">
                        <div className="font-semibold break-all">{c.articleId || 'Artículo'}</div>
                        <div className="break-words text-gray-700">{c.text}</div>
                        <div className="text-[10px] sm:text-xs text-gray-400">{c.timestamp || ''}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Sin comentarios</p>
                )}
              </div>
              
              {/* Sección de me gusta */}
              <div>
                <div className="flex items-center justify-between">
                  <strong className="text-sm sm:text-base">Me gusta</strong>
                  <span className="text-xs bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded-full">{modalUser.likes.length}</span>
                </div>
                {modalUser.likes && modalUser.likes.length > 0 ? (
                  <>
                    <div className="text-[10px] sm:text-xs text-blue-600 font-medium mt-1 mb-2">
                      {modalUser.likes.length} me gusta en {new Set(modalUser.likes.map(l => l.articleId)).size} artículo(s)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {modalUser.likes.map((l, idx) => (
                        <div key={idx} className="text-xs sm:text-sm bg-gray-50 p-2 rounded">
                          <div className="font-medium truncate">{l.articleId || 'Artículo'}</div>
                          <div className="text-[10px] sm:text-xs text-gray-400">{l.timestamp || ''}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Sin me gusta</p>
                )}
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t flex flex-col sm:flex-row sm:justify-end gap-2">
              <button 
                onClick={() => setModalUser(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded text-xs sm:text-sm w-full sm:w-auto"
              >
                Cerrar
              </button>
              <a 
                href={`/dashboard/users/${modalUser.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded text-xs sm:text-sm w-full sm:w-auto text-center"
              >
                Ver perfil completo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
