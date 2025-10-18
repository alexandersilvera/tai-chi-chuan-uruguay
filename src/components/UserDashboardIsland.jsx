import React, { useState } from "react";

export default function UserDashboardIsland({ users }) {
  const [modalUser, setModalUser] = useState(null);

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comentarios</th>
              <th className="px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  No se encontraron usuarios.
                </td>
              </tr>
            )}
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap max-w-[180px] truncate" title={user.email}>{user.email}</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap max-w-[120px] truncate" title={user.displayName}>{user.displayName}</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap">{user.isAdmin ? 'Sí' : 'No'}</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs text-gray-500 max-w-[120px] truncate" title={user.comments.map(c => c.text).join(', ')}>
                  {user.comments.length > 0 ? (
                    <span>{user.comments.length} comentario{user.comments.length > 1 ? 's' : ''}</span>
                  ) : (
                    <span>Sin comentarios</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                    title="Ver"
                    onClick={() => setModalUser(user)}
                  >
                    Ver
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs" title="Editar">Editar</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs" title="Eliminar">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalUser && (
        <div className="fixed z-50 inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setModalUser(null)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img src={modalUser.photoURL || '/default-avatar.png'} alt="Avatar" className="w-16 h-16 rounded-full border" />
              <div>
                <div className="font-semibold text-lg">{modalUser.displayName || 'Sin nombre'}</div>
                <div className="text-sm text-gray-500">{modalUser.email || 'Sin email'}</div>
                <div className="text-xs text-gray-400">UID: {modalUser.id}</div>
                <span className={`inline-block mt-1 px-2 py-1 rounded text-xs ${modalUser.isAdmin ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{modalUser.isAdmin ? 'Admin' : 'Usuario'}</span>
              </div>
            </div>
            <div className="mb-2">
              <strong>Comentarios:</strong>
              {modalUser.comments && modalUser.comments.length > 0 ? (
                <ul className="list-disc pl-5 mt-1">
                  {modalUser.comments.map((c, idx) => (
                    <li key={idx}>
                      <span className="font-semibold">{c.articleId || 'Artículo'}:</span> {c.text}{' '}
                      <span className="text-xs text-gray-400">({c.timestamp || ''})</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Sin comentarios</p>
              )}
            </div>
            <div className="mb-2">
              <strong>Likes:</strong>
              {modalUser.likes && modalUser.likes.length > 0 ? (
                <ul className="list-disc pl-5 mt-1">
                  {modalUser.likes.map((l, idx) => (
                    <li key={idx}>
                      <span className="font-semibold">{l.articleId || 'Artículo'}:</span>{' '}
                      <span className="text-xs text-gray-400">({l.timestamp || ''})</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Sin likes</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
