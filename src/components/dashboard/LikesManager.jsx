import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export default function LikesManager({ likes: initialLikes, stats: initialStats }) {
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, article, user
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, article, user
  const [stats, setStats] = useState({
    totalLikes: 0,
    totalUsers: 0,
    totalArticles: 0,
    topArticles: [],
    topUsers: []
  });

  useEffect(() => {
    // Si se proporcionan datos iniciales, usarlos
    if (initialLikes && initialStats) {
      setLikes(initialLikes);
      setStats(initialStats);
      setLoading(false);
      return;
    }

    // Fallback: cargar datos mock si no se proporcionan datos
    loadLikes();
  }, [initialLikes, initialStats]);

  const loadLikes = async () => {
    try {
      setLoading(true);
      // Simulación de datos - en implementación real se conectaría a Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockLikes = [
        {
          id: '1',
          user: {
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
          isAnonymous: false
        },
        {
          id: '2',
          user: {
            id: 'anon1',
            name: 'Usuario Anónimo',
            email: null,
            avatar: '/default-avatar.svg'
          },
          article: {
            id: 'art2',
            title: 'Historia del Tai Chi',
            slug: 'historia-del-tai-chi'
          },
          timestamp: '2024-01-14T15:45:00Z',
          isAnonymous: true
        }
      ];
      
      setLikes(mockLikes);
      
      // Calcular estadísticas mock
      setStats({
        totalLikes: mockLikes.length,
        totalUsers: 2,
        totalArticles: 2,
        topArticles: [
          { id: 'art1', title: 'Principios del Sun Taiji Quan', count: 3 },
          { id: 'art2', title: 'Historia del Tai Chi', count: 2 }
        ],
        topUsers: [
          { id: 'user1', name: 'María González', count: 2 }
        ]
      });
      
    } catch (error) {
      console.error('Error loading likes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLikes = likes.filter(like => {
    if (filter === 'all') return true;
    if (filter === 'anonymous') return like.isAnonymous;
    if (filter === 'registered') return !like.isAnonymous;
    return true;
  });

  const sortedLikes = [...filteredLikes].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.timestamp) - new Date(b.timestamp);
      case 'article':
        return a.article.title.localeCompare(b.article.title);
      case 'user':
        return a.user.name.localeCompare(b.user.name);
      case 'newest':
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const handleDeleteLike = async (likeId) => {
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar este like? Esta acción no se puede deshacer.');
    
    if (!confirmDelete) {
      return;
    }

    try {
      // Obtener el token del usuario actual
      const auth = getAuth();
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        alert('Debes estar autenticado para realizar esta acción');
        return;
      }

      const token = await currentUser.getIdToken();
      const like = likes.find(l => l.id === likeId);
      
      if (!like) {
        alert('Like no encontrado');
        return;
      }

      // Llamar a la API para eliminar el like
      const response = await fetch('/api/admin/likes/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          likeId,
          articleId: like.article.id,
          userId: like.user.id
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error eliminando like');
      }

      // Actualizar estado local eliminando el like
      setLikes(prev => prev.filter(l => l.id !== likeId));
      
      // Actualizar estadísticas localmente
      setStats(prevStats => ({
        ...prevStats,
        totalLikes: prevStats.totalLikes - 1
      }));

      alert('Like eliminado exitosamente');
      
    } catch (error) {
      console.error('Error deleting like:', error);
      alert(`Error: ${error.message}`);
    }
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
      <div className="space-y-6">
        {/* Stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        
        {/* Likes skeleton */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total de Likes</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalLikes}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Usuarios Activos</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Artículos con Likes</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalArticles}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Top artículos y usuarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top artículos */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Artículos Más Populares
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {stats.topArticles.map((article, index) => (
                <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{article.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-semibold">{article.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top usuarios */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Usuarios Más Activos
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {stats.topUsers.map((user, index) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-semibold">{user.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y controles */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por tipo:</label>
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">Todos ({likes.length})</option>
                <option value="registered">Usuarios registrados ({likes.filter(l => !l.isAnonymous).length})</option>
                <option value="anonymous">Anónimos ({likes.filter(l => l.isAnonymous).length})</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              >
                <option value="newest">Más recientes</option>
                <option value="oldest">Más antiguos</option>
                <option value="article">Por artículo</option>
                <option value="user">Por usuario</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de likes */}
      <div className="space-y-4">
        {sortedLikes.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
            <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">No se encontraron likes</p>
            <p className="text-gray-500 text-sm mt-1">Los likes aparecerán aquí cuando los usuarios interactúen con los artículos.</p>
          </div>
        ) : (
          sortedLikes.map((like) => (
            <div key={like.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={like.user.avatar} 
                    alt={like.user.name}
                    className="w-10 h-10 rounded-full border border-gray-200"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{like.user.name}</span>
                      {like.isAnonymous && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          Anónimo
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Le gustó</span>
                      <a 
                        href={`/blog/${like.article.slug}`} 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {like.article.title}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatDate(like.timestamp)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <a 
                    href={`/blog/${like.article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver artículo
                  </a>
                  <button 
                    onClick={() => handleDeleteLike(like.id)}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200 transition-colors flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </div>
  );
}