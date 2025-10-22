import React, { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, getDoc, setDoc, deleteDoc, collection, writeBatch, getDocs } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext.jsx';

const LikeButton = ({ slug, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false); // Prevenir clics múltiples

  const auth = useAuth();
  const user = auth?.user;

  // Normalizar el slug a minúsculas
  const normalizedSlug = slug ? slug.toLowerCase() : '';

  useEffect(() => {
    console.log('[LikeButton] useEffect triggered - slug:', normalizedSlug, 'user:', user?.uid, 'initialLikes:', initialLikes);
    if (!normalizedSlug) {
      console.log('[LikeButton] No slug provided, skipping load');
      setLoading(false);
      return;
    }

    setLoading(true);
    let isSubscribed = true;

    const checkUserLike = async () => {
      try {
        // Usar el initialLikes del servidor como fuente de verdad
        if (isSubscribed) {
          setLikes(initialLikes || 0);

          // Si el usuario está logueado, verificar si dio like
          if (user) {
            const userLikeRef = doc(db, 'posts', normalizedSlug, 'likes', user.uid);
            const userLikeSnap = await getDoc(userLikeRef);
            setIsLiked(userLikeSnap.exists());
          }

          setLoading(false);
        }
      } catch (error) {
        console.error("Error checking user like: ", error);
        if (isSubscribed) {
          setLikes(initialLikes || 0);
          setLoading(false);
        }
      }
    };

    checkUserLike();
    return () => {
      isSubscribed = false;
    };
  }, [user, normalizedSlug, initialLikes]);

  const handleLike = useCallback(async () => {
    // Prevenir múltiples clics simultáneos
    if (!user || !normalizedSlug || isProcessing) {
      return;
    }

    setIsProcessing(true);
    const likeRef = doc(db, 'posts', normalizedSlug, 'likes', user.uid);
    const userLikesRef = doc(db, 'users', user.uid, 'likes', normalizedSlug);
    const likesCountRef = doc(db, 'likes', normalizedSlug);

    try {
      if (isLiked) {
        // Quitar like
        // Primero verificar que el like existe
        const likeSnap = await getDoc(likeRef);
        if (!likeSnap.exists()) {
          console.warn('Intento de eliminar un like que no existe');
          setIsProcessing(false);
          return;
        }

        const batch = writeBatch(db);
        batch.delete(likeRef);
        batch.delete(userLikesRef);
        await batch.commit();

        // Actualizar el contador (decrementar en 1)
        const likesCountSnap = await getDoc(likesCountRef);
        if (likesCountSnap.exists()) {
          const currentCount = likesCountSnap.data().count || 0;
          const newCount = Math.max(0, currentCount - 1);
          await setDoc(likesCountRef, { count: newCount });
          setLikes(newCount);
        }
        setIsLiked(false);
      } else {
        // Agregar like
        // Primero verificar que el like NO existe ya
        const likeSnap = await getDoc(likeRef);
        if (likeSnap.exists()) {
          console.warn('Intento de crear un like que ya existe');
          setIsProcessing(false);
          return;
        }

        const likeData = {
          timestamp: new Date(),
          userId: user.uid
        };
        const batch = writeBatch(db);
        batch.set(likeRef, likeData);
        batch.set(userLikesRef, { timestamp: new Date(), postSlug: normalizedSlug });
        await batch.commit();

        // Actualizar el contador (incrementar en 1)
        const likesCountSnap = await getDoc(likesCountRef);
        const currentCount = likesCountSnap.exists() ? (likesCountSnap.data().count || 0) : 0;
        const newCount = currentCount + 1;
        await setDoc(likesCountRef, { count: newCount });
        setLikes(newCount);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error updating like status: ", error);
      // Revertir el estado optimista si hubo error
      const likesCountSnap = await getDoc(likesCountRef);
      if (likesCountSnap.exists()) {
        setLikes(likesCountSnap.data().count || 0);
      }
    } finally {
      setIsProcessing(false);
    }
  }, [isLiked, normalizedSlug, user, isProcessing]);

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
      {!user && (
        <div className="text-xs text-zinc-400 mt-1">Inicia sesión para dar "Me Gusta"</div>
      )}
    </div>
  );
};

export default LikeButton;
