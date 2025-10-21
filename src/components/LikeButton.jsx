import React, { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase/client';
import { doc, getDoc, setDoc, deleteDoc, collection, writeBatch, getDocs } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext.jsx';
import { v4 as uuidv4 } from 'uuid';

const LikeButton = ({ slug, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    console.log('[LikeButton] useEffect triggered - slug:', slug, 'user:', user?.uid);
    if (!slug) {
      console.log('[LikeButton] No slug provided, skipping load');
      setLoading(false);
      return;
    }

    setLoading(true);
    let isSubscribed = true;

    const loadLikesData = async () => {
      try {
        console.log('[LikeButton] Loading likes for slug:', slug);
        // Cargar el conteo total de likes desde Firestore
        const likesCollectionRef = collection(db, 'posts', slug, 'likes');
        const likesSnapshot = await getDocs(likesCollectionRef);
        const totalLikes = likesSnapshot.size;
        console.log('[LikeButton] Loaded likes count:', totalLikes);

        if (isSubscribed) {
          setLikes(totalLikes);

          // Si el usuario está logueado, verificar si dio like
          if (user) {
            const userLikeRef = doc(db, 'posts', slug, 'likes', user.uid);
            const userLikeSnap = await getDoc(userLikeRef);
            setIsLiked(userLikeSnap.exists());
          }

          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading likes: ", error);
        console.error("Error details - slug:", slug, "error message:", error.message);
        if (isSubscribed) {
          // En caso de error, usar initialLikes como fallback
          setLikes(initialLikes || 0);
          setLoading(false);
        }
      }
    };

    loadLikesData();
    return () => {
      isSubscribed = false;
    };
  }, [user, slug, initialLikes]);

  const handleLike = useCallback(async () => {
    if (!user || !slug) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const likeRef = doc(db, 'posts', slug, 'likes', user.uid);
    const userLikesRef = doc(db, 'users', user.uid, 'likes', slug);
    try {
      const batch = writeBatch(db);
      if (isLiked) {
        batch.delete(likeRef);
        batch.delete(userLikesRef);
        await batch.commit();
        setLikes((prevLikes) => Math.max(0, prevLikes - 1));
        setIsLiked(false);
      } else {
        const likeData = {
          timestamp: new Date(),
          userId: user.uid
        };
        batch.set(likeRef, likeData);
        batch.set(userLikesRef, { timestamp: new Date(), postSlug: slug });
        await batch.commit();
        setLikes((prevLikes) => prevLikes + 1);
        setIsLiked(true);
      }
    } catch (error) {
      // console.error("Error updating like status: ", error);
    } finally {
      setLoading(false);
    }
  }, [isLiked, slug, user]);

  console.log('[LikeButton] Render - user:', user?.uid, 'loading:', loading, 'likes:', likes, 'isLiked:', isLiked);
  if (loading) {
    return <div className="text-xs text-zinc-400 mt-1">Cargando...</div>;
  }
  return (
    <div>
      <button
        onClick={handleLike}
        disabled={loading || !slug || !user}
        className={`flex items-center space-x-1 text-sm transition-colors duration-200 ease-in-out ${
          isLiked ? 'text-red-500 hover:text-red-600' : 'text-zinc-400 hover:text-zinc-200'
        } ${loading || !user ? 'opacity-50 cursor-not-allowed' : ''}`}
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