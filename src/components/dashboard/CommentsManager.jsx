import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export default function CommentsManager({ comments: initialComments }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, approved, flagged
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, article
  const [selectedComments, setSelectedComments] = useState(new Set());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentToAction, setCommentToAction] = useState(null);

  useEffect(() => {
    // Si se proporcionan comentarios iniciales, usarlos
    if (initialComments) {
      setComments(initialComments);
      setLoading(false);
      return;
    }

    // Fallback: cargar datos mock si no se proporcionan comentarios
    loadComments();
  }, [initialComments]);

  const loadComments = async () => {
    try {
      setLoading(true);
      // Simulación de datos - en implementación real se conectaría a Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockComments = [
        {
          id: '1',
          text: '¡Excelente artículo! Me ha ayudado mucho a entender los principios básicos del Tai Chi.',
          author: {
            id: 'user1',
            name: 'María González',
            email: 'maria@example.com',
            avatar: '/default-avatar.svg'
          },
          article: {
            id: 'art1',
            title: 'Principios del Sun Taiji Quan',
            slug: 'principios-del-sun-taiji-quan'
          },
          timestamp: '2024-01-15T10:30:00Z',
          status: 'approved',
          flags: 0,
          likes: 3
        },
        {
          id: '2',
          text: 'No estoy de acuerdo con algunos puntos mencionados. Creo que hay interpretaciones diferentes.',
          author: {
            id: 'user2',
            name: 'Carlos López',
            email: 'carlos@example.com',
            avatar: '/default-avatar.svg'
          },
          article: {
            id: 'art2',
            title: 'Historia del Tai Chi',
            slug: 'historia-del-tai-chi'
          },
          timestamp: '2024-01-14T15:45:00Z',
          status: 'pending',
          flags: 1,
          likes: 0
        },
        {
          id: '3',
          text: 'Muy buen contenido, pero me gustaría ver más ejemplos prácticos.',
          author: {
            id: 'user3',
            name: 'Ana Rodríguez',
            email: 'ana@example.com',
            avatar: '/default-avatar.png'
          },
          article: {
            id: 'art1',
            title: 'Principios del Sun Taiji Quan',
            slug: 'principios-del-sun-taiji-quan'
          },
          timestamp: '2024-01-13T09:15:00Z',
          status: 'approved',
          flags: 0,
          likes: 7
        },
        {
          id: '4',
          text: 'Este comentario contiene contenido inapropiado y debería ser revisado.',
          author: {
            id: 'user4',
            name: 'Usuario Problemático',
            email: 'problema@example.com',
            avatar: '/default-avatar.png'
          },
          article: {
            id: 'art3',
            title: 'Filosofía del Taoísmo',
            slug: 'filosofia-del-taoismo'
          },
          timestamp: '2024-01-12T14:20:00Z',
          status: 'flagged',
          flags: 3,
          likes: 0
        }
      ];
      
      setComments(mockComments);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredComments = comments.filter(comment => {
    if (filter === 'all') return true;
    return comment.status === filter;
  });

  const sortedComments = [...filteredComments].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.timestamp) - new Date(b.timestamp);
      case 'article':
        return a.article.title.localeCompare(b.article.title);
      case 'newest':
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const handleSelectComment = (commentId) => {
    const newSelected = new Set(selectedComments);
    if (newSelected.has(commentId)) {
      newSelected.delete(commentId);
    } else {
      newSelected.add(commentId);
    }
    setSelectedComments(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedComments.size === sortedComments.length) {
      setSelectedComments(new Set());
    } else {
      setSelectedComments(new Set(sortedComments.map(c => c.id)));
    }
  };

  const handleCommentAction = async (commentId, action) => {
    try {
      // Obtener el token del usuario actual
      const auth = getAuth();
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        alert('Debes estar autenticado para realizar esta acción');
        return;
      }

      const token = await currentUser.getIdToken();
      const comment = comments.find(c => c.id === commentId);
      
      if (!comment) {
        alert('Comentario no encontrado');
        return;
      }

      // Llamar a la API correspondiente
      if (action === 'delete') {
        const response = await fetch('/api/admin/comments/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            commentId,
            articleId: comment.article.id
          })
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Error eliminando comentario');
        }

        // Actualizar estado local eliminando el comentario
        setComments(prev => prev.filter(c => c.id !== commentId));
        alert('Comentario eliminado exitosamente');
      } else {
        // Actualizar estado del comentario
        const response = await fetch('/api/admin/comments/update-status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            commentId,
            articleId: comment.article.id,
            action
          })
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Error actualizando comentario');
        }

        // Actualizar estado local
        setComments(prev => prev.map(c => 
          c.id === commentId 
            ? { ...c, status: action === 'approve' ? 'approved' : action === 'flag' ? 'flagged' : action }
            : c
        ));

        const actionText = action === 'approve' ? 'aprobado' : action === 'flag' ? 'marcado' : 'actualizado';
        alert(`Comentario ${actionText} exitosamente`);
      }
    } catch (error) {
      console.error(`Error ${action}ing comment:`, error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleBulkAction = async (action) => {
    if (selectedComments.size === 0) {
      alert('No hay comentarios seleccionados');
      return;
    }

    const confirmMessage = action === 'delete' 
      ? `¿Estás seguro de que quieres eliminar ${selectedComments.size} comentario${selectedComments.size !== 1 ? 's' : ''}? Esta acción no se puede deshacer.`
      : `¿Estás seguro de que quieres ${action === 'approve' ? 'aprobar' : 'marcar'} ${selectedComments.size} comentario${selectedComments.size !== 1 ? 's' : ''}?`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        alert('Debes estar autenticado para realizar esta acción');
        return;
      }

      const token = await currentUser.getIdToken();
      const selectedCommentIds = Array.from(selectedComments);
      let successCount = 0;
      let errors = [];

      // Procesar comentarios en lotes para evitar sobrecargar el servidor
      for (const commentId of selectedCommentIds) {
        try {
          const comment = comments.find(c => c.id === commentId);
          
          if (!comment) {
            errors.push(`Comentario ${commentId} no encontrado`);
            continue;
          }

          if (action === 'delete') {
            const response = await fetch('/api/admin/comments/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                commentId,
                articleId: comment.article.id
              })
            });

            if (!response.ok) {
              const result = await response.json();
              errors.push(`Error eliminando comentario ${commentId}: ${result.error}`);
              continue;
            }
          } else {
            const response = await fetch('/api/admin/comments/update-status', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                commentId,
                articleId: comment.article.id,
                action
              })
            });

            if (!response.ok) {
              const result = await response.json();
              errors.push(`Error actualizando comentario ${commentId}: ${result.error}`);
              continue;
            }
          }

          successCount++;
        } catch (error) {
          errors.push(`Error procesando comentario ${commentId}: ${error.message}`);
        }
      }

      // Actualizar estado local
      if (action === 'delete') {
        setComments(prev => prev.filter(comment => !selectedComments.has(comment.id)));
      } else {
        setComments(prev => prev.map(comment => 
          selectedComments.has(comment.id)
            ? { ...comment, status: action === 'approve' ? 'approved' : action === 'flag' ? 'flagged' : action }
            : comment
        ));
      }
      
      setSelectedComments(new Set());

      // Mostrar resumen
      if (errors.length === 0) {
        const actionText = action === 'delete' ? 'eliminados' : action === 'approve' ? 'aprobados' : 'marcados';
        alert(`${successCount} comentario${successCount !== 1 ? 's' : ''} ${actionText} exitosamente`);
      } else {
        alert(`Procesamiento completado: ${successCount} éxitos, ${errors.length} errores.\n\nErrores:\n${errors.join('\n')}`);
      }
    } catch (error) {
      console.error(`Error in bulk ${action}:`, error);
      alert(`Error en acción masiva: ${error.message}`);
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      flagged: 'bg-red-100 text-red-800'
    };
    
    const labels = {
      approved: 'Aprobado',
      pending: 'Pendiente',
      flagged: 'Marcado'
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros y controles */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por estado:</label>
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">Todos ({comments.length})</option>
                <option value="approved">Aprobados ({comments.filter(c => c.status === 'approved').length})</option>
                <option value="pending">Pendientes ({comments.filter(c => c.status === 'pending').length})</option>
                <option value="flagged">Marcados ({comments.filter(c => c.status === 'flagged').length})</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="newest">Más recientes</option>
                <option value="oldest">Más antiguos</option>
                <option value="article">Por artículo</option>
              </select>
            </div>
          </div>

          {selectedComments.size > 0 && (
            <div className="flex gap-2">
              <button 
                onClick={() => handleBulkAction('approve')}
                className="px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors"
              >
                Aprobar ({selectedComments.size})
              </button>
              <button 
                onClick={() => handleBulkAction('flag')}
                className="px-3 py-2 bg-yellow-600 text-white rounded-md text-sm hover:bg-yellow-700 transition-colors"
              >
                Marcar ({selectedComments.size})
              </button>
              <button 
                onClick={() => handleBulkAction('delete')}
                className="px-3 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors"
              >
                Eliminar ({selectedComments.size})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lista de comentarios */}
      <div className="space-y-4">
        {sortedComments.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
            <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">No se encontraron comentarios</p>
            <p className="text-gray-500 text-sm mt-1">Los comentarios aparecerán aquí cuando los usuarios participen en discusiones.</p>
          </div>
        ) : (
          <>
            {/* Control de selección masiva */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedComments.size === sortedComments.length && sortedComments.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">
                  Seleccionar todos ({sortedComments.length} comentarios)
                </span>
              </label>
            </div>

            {sortedComments.map((comment) => (
              <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <label className="flex items-center mt-1">
                    <input 
                      type="checkbox" 
                      checked={selectedComments.has(comment.id)}
                      onChange={() => handleSelectComment(comment.id)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </label>
                  
                  <img 
                    src={comment.author.avatar} 
                    alt={comment.author.name}
                    className="w-10 h-10 rounded-full border border-gray-200"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{comment.author.name}</h4>
                        <p className="text-xs text-gray-500">{comment.author.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(comment.status)}
                        {comment.flags > 0 && (
                          <span className="flex items-center gap-1 text-xs text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            {comment.flags}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <a 
                        href={`/blog/${comment.article.slug}`} 
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {comment.article.title}
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-3">
                      <p className="text-gray-700 text-sm break-words">{comment.text}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatDate(comment.timestamp)}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {comment.likes} me gusta
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        {comment.status !== 'approved' && (
                          <button 
                            onClick={() => handleCommentAction(comment.id, 'approve')}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors"
                          >
                            Aprobar
                          </button>
                        )}
                        {comment.status !== 'flagged' && (
                          <button 
                            onClick={() => handleCommentAction(comment.id, 'flag')}
                            className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs hover:bg-yellow-200 transition-colors"
                          >
                            Marcar
                          </button>
                        )}
                        <button 
                          onClick={() => {
                            setCommentToAction(comment.id);
                            setShowDeleteModal(true);
                          }}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200 transition-colors"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Modal de confirmación de eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Confirmar eliminación</h3>
                  <p className="text-sm text-gray-500">Esta acción no se puede deshacer.</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                ¿Estás seguro de que quieres eliminar este comentario? Se eliminará permanentemente.
              </p>
              
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => {
                    setShowDeleteModal(false);
                    setCommentToAction(null);
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => {
                    if (commentToAction) {
                      setComments(prev => prev.filter(c => c.id !== commentToAction));
                    }
                    setShowDeleteModal(false);
                    setCommentToAction(null);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}