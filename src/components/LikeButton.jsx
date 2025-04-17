// src/components/LikeButton.jsx
import { useState, useEffect } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app, db } from '../utils/firebase.client';
import { v4 as uuidv4 } from 'uuid';

const functions = getFunctions(app);
const callHandleLike = httpsCallable(functions, 'handleLike');

export default function LikeButton({ slug, initialLikes }) {
  // LOG IMPLACABLE: SIEMPRE se ejecuta al renderizar
  console.log("[LikeButton] RENDER - slug:", slug, "initialLikes:", initialLikes);

  // LOG TEMPORAL: Verifica el valor de slug al montar
  useEffect(() => {
    if (typeof slug !== "string" || !slug) {
      console.error("[LikeButton] TEST LOG EN PRODUCCION:", slug);
      console.error("[LikeButton] Prop 'slug' inválido al montar:", slug);
    } else {
      console.log("[LikeButton] useEffect mount OK - slug:", slug);
    }
  }, [slug]);


  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');

  // Al montar, consulta Firestore para obtener el contador real
  useEffect(() => {
    let currentUserId = localStorage.getItem('userId');
    if (!currentUserId) {
      currentUserId = uuidv4();
      localStorage.setItem('userId', currentUserId);
    }
    setUserId(currentUserId);

    // Consulta el contador real de likes en Firestore
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
      // LOG TEMPORAL: Verifica los valores antes de llamar a la función
      if (typeof slug !== "string" || !slug) {
        console.error("[LikeButton] Prop 'slug' inválido antes de llamar a handleLike:", slug);
      }
      if (typeof userId !== "string" || !userId) {
        console.error("[LikeButton] userId inválido antes de llamar a handleLike:", userId);
      }
      const result = await callHandleLike({ slug: slug, userId: userId });

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

  const alreadyLiked = typeof window !== 'undefined' && localStorage.getItem(`liked-${slug}-${userId}`) === 'true';

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handleLike}
        disabled={isLoading || alreadyLiked}
        className={`px-4 py-2 rounded font-semibold transition-colors duration-200 flex items-center gap-2 ${alreadyLiked
            ? 'bg-emerald-700 text-emerald-100 cursor-not-allowed'
            : 'bg-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:text-white'
          } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.167c0 .83.67 1.5 1.5 1.5h5.67c.65 0 1.24-.4 1.45-1.01l1.33-4c.2-.6.1-1.28-.26-1.79l-.24-.33a2.17 2.17 0 00-.98-1.09L13.5 8.5H7.5a1.5 1.5 0 01-1.5-1.5v-.833c0-.83.67-1.5 1.5-1.5h5.5c.83 0 1.5.67 1.5 1.5v.167l-1.33 4.5a1.5 1.5 0 01-1.45 1.01H7.5V10.5a1.5 1.5 0 01-1.5-1.5V7.5a1.5 1.5 0 011.5-1.5h4.83a3.67 3.67 0 013.17 2.29l.24.33c.5.68.62 1.58.26 2.39l-1.33 4A3.5 3.5 0 0113.17 17H7.5a3.5 3.5 0 01-3.5-3.5v-5a3.5 3.5 0 013.5-3.5h5.5a3.5 3.5 0 013.5 3.5v.833c0 .83-.67 1.5-1.5 1.5H13.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H14a1.5 1.5 0 011.45 1.01l.74 2.2c.17.5.03 1.06-.36 1.45l-.18.18a1.5 1.5 0 01-1.06.44H7.5a1.5 1.5 0 01-1.5-1.5v-5.167zM4.5 7.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-1z" />
        </svg>
        <span>{alreadyLiked ? 'Te gusta' : 'Me gusta'} ({likes})</span>
      </button>
      {error && <p className="text-red-500 text-xs ml-4">{error}</p>}
    </div>
  );
}