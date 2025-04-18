// src/components/LikeButton.jsx
import { useState, useEffect } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app, db } from '../utils/firebase.client';

// SNIPPET DE DEPURACIÓN (elimina esto después de verificar la config en producción)
if (typeof window !== 'undefined') {
  window.firebaseAppOptions = app.options;
  console.log('CONFIG FIREBASE:', app.options);
}
import { v4 as uuidv4 } from 'uuid';

const functions = getFunctions(app);
const callHandleLike = httpsCallable(functions, 'handleLike');

export default function LikeButton({ slug, initialLikes }) {
  console.log("[LikeButton] RENDER - slug:", slug, "initialLikes:", initialLikes);

  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = uuidv4();
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);

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
        localStorage.setItem(`liked-${slug}-${userId}`, 'true');
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

  // DEPURACIÓN: forzamos hasLiked a false para permitir siempre el like
const hasLiked = false; // <-- Solo para depuración, recuerda restaurar luego

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