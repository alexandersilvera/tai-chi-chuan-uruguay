import React, { useState, useEffect, useCallback } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useAuth } from '@/context/AuthContext.jsx';

const LikeButton = ({ slug, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const auth = useAuth();
  const user = auth?.user;

  // Normalizar el slug a minúsculas
  const normalizedSlug = slug ? slug.toLowerCase() : '';

  // Inicializar Functions
  const functions = getFunctions();

  useEffect(() => {
    console.log('[LikeButton] useEffect triggered - slug:', normalizedSlug, 'user:', user?.uid, 'initialLikes:', initialLikes);
    if (!normalizedSlug) {
      console.log('[LikeButton] No slug provided, skipping load');
      setLoading(false);
      return;
    }

    setLoading(true);
    let isSubscribed = true;

    const loadLikeStatus = async () => {
      try {
        // Usar Cloud Function para obtener el estado
        const getLikeStatus = httpsCallable(functions, 'getLikeStatus');
        const result = await getLikeStatus({ slug: normalizedSlug });

        if (isSubscribed && result.data.success) {
          setLikes(result.data.likesCount);
          setIsLiked(result.data.userLiked);
          setError(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading like status: ", error);
        if (isSubscribed) {
          // En caso de error, usar initialLikes como fallback
          setLikes(initialLikes || 0);
          setError('Error al cargar el estado de likes');
          setLoading(false);
        }
      }
    };

    loadLikeStatus();
    return () => {
      isSubscribed = false;
    };
  }, [user, normalizedSlug, initialLikes, functions]);

  const handleLike = useCallback(async () => {
    // Prevenir múltiples clics simultáneos
    if (!user || !normalizedSlug || isProcessing) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    // Estado optimista: actualizar UI inmediatamente
    const previousLikes = likes;
    const previousIsLiked = isLiked;
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);

    try {
      // Llamar a Cloud Function
      const toggleLike = httpsCallable(functions, 'toggleLike');
      const result = await toggleLike({ slug: normalizedSlug });

      if (result.data.success) {
        // Actualizar con el valor real del servidor
        setLikes(result.data.likesCount);
        setIsLiked(result.data.liked);
        console.log('[LikeButton] Success:', result.data.message);
      }
    } catch (error) {
      console.error("Error toggling like: ", error);

      // Revertir estado optimista en caso de error
      setIsLiked(previousIsLiked);
      setLikes(previousLikes);

      // Mostrar mensaje de error al usuario
      if (error.code === 'unauthenticated') {
        setError('Debes iniciar sesión para dar like');
      } else if (error.code === 'resource-exhausted') {
        setError('Has excedido el límite de acciones. Espera un momento.');
      } else if (error.code === 'permission-denied') {
        setError('Tu cuenta está bloqueada');
      } else {
        setError('Error al procesar tu like. Intenta de nuevo.');
      }

      // Limpiar error después de 5 segundos
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsProcessing(false);
    }
  }, [isLiked, normalizedSlug, user, isProcessing, likes, functions]);

  if (loading) {
    return <div className="text-xs text-zinc-400 mt-1">Cargando...</div>;
  }

  return (
    <div>
      <button
        onClick={handleLike}
        disabled={loading || !normalizedSlug || !user || isProcessing}
        className={`flex items-center space-x-1 text-sm transition-colors duration-200 ease-in-out ${
          isLiked ? 'text-red-500 hover:text-red-600' : 'text-zinc-400 hover:text-zinc-200'
        } ${loading || !user || isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-pressed={isLiked}
        aria-label={isLiked ? 'Quitar Me Gusta' : 'Me Gusta'}
        title={!user ? 'Inicia sesión para dar Me Gusta' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <span>{likes}</span>
      </button>
      {error && (
        <div className="text-xs text-red-400 mt-1">{error}</div>
      )}
      {!user && !error && (
        <div className="text-xs text-zinc-400 mt-1">Inicia sesión para dar "Me Gusta"</div>
      )}
    </div>
  );
};

export default LikeButton;
