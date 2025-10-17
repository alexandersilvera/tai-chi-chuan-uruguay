import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Importar onAuthStateChanged
import { app } from '@/lib/firebase/client.js';

// Componente refactorizado con carga de datos robusta
export default function CommentsManager() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedComments, setSelectedComments] = useState(new Set());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentToAction, setCommentToAction] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    // Escuchar cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario está autenticado, cargar los comentarios
        loadComments(user);
      } else {
        // Si no hay usuario, mostrar error y detener la carga
        setError('Autenticación requerida para ver esta sección.');
        setLoading(false);
      }
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  const loadComments = async (user) => {
    try {
      setLoading(true);
      setError(null);
      const token = await user.getIdToken();

      const response = await fetch('/api/admin/comments/list', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al cargar los comentarios.');
      }

      const data = await response.json();
      setComments(data.comments);

    } catch (err) {
      console.error('Error loading comments:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentAction = async (commentId, action) => {
    const comment = comments.find(c => c.id === commentId);
    if (!comment) {
      alert('Error: No se pudo encontrar el comentario.');
      return;
    }

    try {
      const auth = getAuth(app);
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('No estás autenticado.');
      const token = await currentUser.getIdToken();

      const response = await fetch('/api/admin/comments/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ articleId: comment.article.id, commentId: comment.id, action: action }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Error al actualizar el comentario');

      alert(`Comentario ${result.newStatus} exitosamente.`);
      setComments(prev => prev.map(c => c.id === commentId ? { ...c, status: result.newStatus } : c));

    } catch (err) {
      console.error(`Error performing action '${action}' on comment:`, err);
      alert(`Error: ${err.message}`);
    }
  };

  const executeDelete = async () => {
    if (!commentToAction) return;

    try {
      const auth = getAuth(app);
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('No estás autenticado.');
      const token = await currentUser.getIdToken();

      const response = await fetch('/api/admin/comments/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ articleId: commentToAction.article.id, commentId: commentToAction.id }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Error al eliminar el comentario');

      alert('Comentario eliminado exitosamente.');
      setComments(prev => prev.filter(c => c.id !== commentToAction.id));

    } catch (err) {
      console.error('Error deleting comment:', err);
      alert(`Error: ${err.message}`);
    } finally {
      setShowDeleteModal(false);
      setCommentToAction(null);
    }
  };

  // El resto de las funciones (filtrado, ordenado, selección, modales, etc.) permanecen igual...
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

  const handleBulkAction = async (action) => {
    alert(`Acción masiva '${action}' para ${selectedComments.size} comentarios aún no implementada.`);
  };

  const handleDeleteConfirmation = (comment) => {
    setCommentToAction(comment);
    setShowDeleteModal(true);
  };

  const getStatusBadge = (status) => {
    const styles = { approved: 'bg-green-100 text-green-800', pending: 'bg-yellow-100 text-yellow-800', flagged: 'bg-red-100 text-red-800' };
    const labels = { approved: 'Aprobado', pending: 'Pendiente', flagged: 'Marcado' };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status] || 'bg-gray-100 text-gray-800'}`}>{labels[status] || status}</span>;
  };

  const formatDate = (timestamp) => new Date(timestamp).toLocaleString('es-ES', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg">Error: {error}</div>;

  return (
    <div className="space-y-6">
      {/* El JSX de renderizado no cambia */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por estado:</label>
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500">
                <option value="all">Todos ({comments.length})</option>
                <option value="approved">Aprobados ({comments.filter(c => c.status === 'approved').length})</option>
                <option value="pending">Pendientes ({comments.filter(c => c.status === 'pending').length})</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500">
                <option value="newest">Más recientes</option>
                <option value="oldest">Más antiguos</option>
                <option value="article">Por artículo</option>
              </select>
            </div>
          </div>
          {selectedComments.size > 0 && (
            <div className="flex gap-2">
              <button onClick={() => handleBulkAction('approve')} className="px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">Aprobar ({selectedComments.size})</button>
              <button onClick={() => handleBulkAction('delete')} className="px-3 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">Eliminar ({selectedComments.size})</button>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {sortedComments.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center"><p>No se encontraron comentarios.</p></div>
        ) : (
          <>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={selectedComments.size === sortedComments.length && sortedComments.length > 0} onChange={handleSelectAll} className="rounded border-gray-300 text-green-600 focus:ring-green-500"/>
                <span className="text-sm text-gray-700">Seleccionar todos</span>
              </label>
            </div>
            {sortedComments.map((comment) => (
              <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <input type="checkbox" checked={selectedComments.has(comment.id)} onChange={() => handleSelectComment(comment.id)} className="rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"/>
                  <img src={comment.author.avatar} alt={comment.author.name} className="w-10 h-10 rounded-full border border-gray-200"/>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h4 className="text-sm font-medium text-gray-900">{comment.author.name}</h4>
                            <p className="text-xs text-gray-500">{comment.author.email}</p>
                        </div>
                        {getStatusBadge(comment.status)}
                    </div>
                    <a href={`/blog/${comment.article.slug}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mb-2 block">En: {comment.article.title}</a>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-3">
                      <p className="text-gray-700 text-sm break-words">{comment.text}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                        <div className="flex gap-2">
                            <button onClick={() => handleCommentAction(comment.id, 'approve')} className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200">Aprobar</button>
                            <button onClick={() => handleDeleteConfirmation(comment)} className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200">Eliminar</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Confirmar eliminación</h3>
              <p className="text-gray-700 my-4">¿Estás seguro de que quieres eliminar este comentario? Esta acción no se puede deshacer.</p>
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Cancelar</button>
                <button onClick={executeDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}