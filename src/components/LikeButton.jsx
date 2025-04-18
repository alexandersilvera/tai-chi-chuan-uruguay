// src/components/LikeButton.jsx
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

// Llamada directa a la función cloud en producción
const callHandleLike = async ({ slug, userId }) => {
  try {
    const response = await fetch('https://handlelike-3hjph2wfea-uc.a.run.app', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, userId }),
      credentials: 'omit',
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: err.message || 'Error de red o formato de respuesta' };
  }
};

export default function LikeButton({ slug, initialLikes }) {


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
  }, [slug]);

  const handleLike = async () => {


    if (!slug) {
      setError('No se pudo identificar el artículo.');
      return;
    }
    if (!userId) {

      setError("Espera un momento e inténtalo de nuevo.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {

      const result = await callHandleLike({ slug, userId });


      if (result && result.success) {
        setLikes(result.newLikes);
        if (typeof window !== 'undefined') {
          localStorage.setItem(`liked-${slug}-${userId}`, 'true');
          setHasLiked(true);
        }
      } else {
        setError(result?.message || 'Error al dar like');
      }
    } catch (err) {
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