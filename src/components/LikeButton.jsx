// src/components/LikeButton.jsx
import { useState, useEffect } from 'react';
import { app, db } from '../utils/firebase.client';
import { v4 as uuidv4 } from 'uuid';

// Llamada directa a la función cloud en producción
const callHandleLike = async ({ slug, userId }) => {
  const response = await fetch('https://handlelike-3hjph2wfea-uc.a.run.app', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, userId }),
    credentials: 'omit',
  });
  return await response.json();
};

export default function LikeButton({ slug, initialLikes }) {
  console.log("[LikeButton] RENDER - slug:", slug, "initialLikes:", initialLikes);

  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedUserId = localStorage.getItem('userId');
      if (!storedUserId) {
        storedUserId = uuidv4();
        localStorage.setItem('userId', storedUserId);
      }
      setUserId(storedUserId);
      setHasLiked(localStorage.getItem(`liked-${slug}-${storedUserId}`) === 'true');
    }

    async function fetchLikes() {
      if (!slug) return;
      try {
        const { doc, getDoc } = await import('firebase/firestore');
        const likesRef = doc(db, 'likes', slug);
        const likesSnap = await getDoc(likesRef);
        if (likesSnap.exists()) {
          const data = likesSnap.data();
          setLikes(data.count || 0);
        }
      } catch (err) {
        console.error('Error consultando likes en Firestore:', err);
      }
    }
    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    console.log("[LikeButton] handleLike - slug:", slug, "userId:", userId);

    if (!slug) {
      console.error('Intentando dar like sin slug disponible.');
      setError('No se pudo identificar el artículo.');
      return;
    }
    if (!userId) {
      console.error("Intentando dar like sin userId disponible.");
      setError("Espera un momento e inténtalo de nuevo.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      console.log('[LikeButton] handleLike - Calling function with:', { slug, userId });
      const result = await callHandleLike({ slug, userId });
      console.log('[LikeButton] handleLike - Function result:', result);

      if (result.data.success) {
        setLikes(result.data.newLikes);
        if (typeof window !== 'undefined') {
          localStorage.setItem(`liked-${slug}-${userId}`, 'true');
          setHasLiked(true);
        }
      } else {
        setError(result.data.message || 'Error al dar like');
      }
    } catch (err) {
      console.error("Error calling handleLike function:", err);
      setError(err.message || 'Ocurrió un error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        className={`px-4 py-2 rounded font-semibold transition-colors duration-200 flex items-center gap-2 ${hasLiked
            ? 'bg-emerald-700 text-emerald-100 cursor-not-allowed'
            : 'bg-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:text-white'
          } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
        onClick={handleLike}
        disabled={isLoading || hasLiked}
        aria-label={hasLiked ? "Ya diste like" : "Dar like"}
      >
        <span className="icon">❤️</span> {likes}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}