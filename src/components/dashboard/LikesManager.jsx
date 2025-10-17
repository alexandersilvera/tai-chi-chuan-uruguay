import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Importar onAuthStateChanged
import { app } from '@/lib/firebase/client.js';

// Componente refactorizado con carga de datos robusta
export default function LikesManager() {
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [stats, setStats] = useState({
    totalLikes: 0,
    totalUsers: 0,
    totalArticles: 0,
    topArticles: [],
    topUsers: []
  });

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        loadLikes(user);
      } else {
        setError('Autenticación requerida para ver esta sección.');
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadLikes = async (user) => {
    try {
      setLoading(true);
      setError(null);
      const token = await user.getIdToken();

      const response = await fetch('/api/admin/likes/list', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al cargar los likes.');
      }

      const { likes: fetchedLikes } = await response.json();
      setLikes(fetchedLikes);
      calculateStats(fetchedLikes);

    } catch (err) {
      console.error('Error loading likes:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (likesData) => {
    if (likesData.length === 0) {
        setStats({ totalLikes: 0, totalUsers: 0, totalArticles: 0, topArticles: [], topUsers: [] });
        return;
    }
    const totalLikes = likesData.length;
    const totalUsers = new Set(likesData.map(like => like.user.id)).size;
    const totalArticles = new Set(likesData.map(like => like.article.id)).size;

    const articleCounts = likesData.reduce((acc, like) => {
      acc[like.article.id] = (acc[like.article.id] || 0) + 1;
      return acc;
    }, {});
    const topArticles = Object.entries(articleCounts).sort(([, a], [, b]) => b - a).slice(0, 5).map(([id, count]) => ({ id, title: likesData.find(l => l.article.id === id).article.title, count }));

    const userCounts = likesData.reduce((acc, like) => {
      acc[like.user.id] = (acc[like.user.id] || 0) + 1;
      return acc;
    }, {});
    const topUsers = Object.entries(userCounts).sort(([, a], [, b]) => b - a).slice(0, 5).map(([id, count]) => ({ id, name: likesData.find(l => l.user.id === id).user.name, count }));
      
    setStats({ totalLikes, totalUsers, totalArticles, topArticles, topUsers });
  };

  const sortedLikes = [...likes].sort((a, b) => {
    switch (sortBy) {
      case 'oldest': return new Date(a.timestamp) - new Date(b.timestamp);
      case 'article': return a.article.title.localeCompare(b.article.title);
      case 'user': return a.user.name.localeCompare(b.user.name);
      case 'newest':
      default: return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const handleDeleteLike = async (like) => {
    if (!confirm(`¿Estás seguro de que quieres eliminar el like de ${like.user.name} en el artículo "${like.article.title}"?`)) return;

    try {
      const auth = getAuth(app);
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('No estás autenticado.');
      const token = await currentUser.getIdToken();

      const response = await fetch('/api/admin/likes/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ articleId: like.article.id, userId: like.user.id }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Error al eliminar el like');

      alert('Like eliminado exitosamente.');
      await loadLikes(currentUser); // Recargar datos

    } catch (err) {
      console.error('Error deleting like:', err);
      alert(`Error: ${err.message}`);
    }
  };

  const formatDate = (timestamp) => new Date(timestamp).toLocaleString('es-ES', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg">Error: {error}</div>;

  return (
    <div className="space-y-6">
      {/* El JSX de renderizado no cambia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><p className="text-sm font-medium text-gray-600 mb-1">Total de Likes</p><p className="text-3xl font-bold text-gray-900">{stats.totalLikes}</p></div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><p className="text-sm font-medium text-gray-600 mb-1">Usuarios que dieron Like</p><p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p></div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><p className="text-sm font-medium text-gray-600 mb-1">Artículos con Likes</p><p className="text-3xl font-bold text-gray-900">{stats.totalArticles}</p></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Artículos Más Populares</h3>
            <div className="space-y-3">
              {stats.topArticles.map((article, index) => <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><p className="font-medium text-gray-900 text-sm">{index + 1}. {article.title}</p><span className="font-semibold text-red-600">{article.count}</span></div>)}
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Usuarios Más Activos</h3>
            <div className="space-y-3">
              {stats.topUsers.map((user, index) => <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><p className="font-medium text-gray-900 text-sm">{index + 1}. {user.name}</p><span className="font-semibold text-red-600">{user.count}</span></div>)}
            </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Todos los Likes</h3>
        <div className="space-y-4">
            {sortedLikes.length === 0 ? <p>No se encontraron likes.</p> : sortedLikes.map((like) => (
                <div key={like.id + like.article.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-4">
                        <img src={like.user.avatar} alt={like.user.name} className="w-10 h-10 rounded-full"/>
                        <div>
                            <p><span className="font-bold">{like.user.name}</span> dio like a <span className="font-bold">{like.article.title}</span></p>
                            <p className="text-sm text-gray-500">{formatDate(like.timestamp)}</p>
                        </div>
                    </div>
                    <button onClick={() => handleDeleteLike(like)} className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200">Eliminar</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}