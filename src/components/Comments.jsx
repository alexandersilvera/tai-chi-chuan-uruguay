import { useState, useEffect } from 'react';
// Importar la app de Firebase inicializada
import { app } from '../utils/firebase.client.js';
// Importar funciones de Firebase Firestore y Auth
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// Obtener instancias de Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Estado de autenticación
  const [user, loadingAuth, errorAuth] = useAuthState(auth);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    setError('');

    console.log(`Setting up Firestore listener for comments on slug: ${slug}`);

    // Listener de Firestore para obtener comentarios en tiempo real
    const commentsRef = collection(db, 'articles', slug, 'comments');
    const q = query(commentsRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        const timestamp = doc.data().timestamp && doc.data().timestamp.toDate ? new Date(doc.data().timestamp.toDate()).toLocaleString() : '';
        commentsData.push({ id: doc.id, ...doc.data(), timestamp });
      });
      setComments(commentsData);
      setIsLoading(false);
    }, (err) => {
      console.error("Error fetching comments: ", err);
      setError('Error al cargar comentarios.');
      setIsLoading(false);
    });
    // Limpiar listener al desmontar
    return () => unsubscribe();

  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    if (!user) {
      setError('Necesitas iniciar sesión para comentar.');
      return;
    }

    setError('');
    try {
      const commentsRef = collection(db, 'articles', slug, 'comments');
      await addDoc(commentsRef, {
        text: newComment,
        userId: user.uid,
        userName: user.displayName || (user.email ? user.email.split('@')[0] : 'Anónimo'),
        userPhotoURL: user.photoURL || '/default-avatar.png', // Cambia si tienes un avatar por defecto
        timestamp: serverTimestamp()
      });
      setNewComment(''); // Limpiar el campo
    } catch (err) {
      console.error("Error adding comment: ", err);
      setError('Error al enviar el comentario.');
    }
  };


  return (
    <div className="mt-12 pt-8 border-t border-zinc-700">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Comentarios</h2>

      {/* Lista de Comentarios */}
      {isLoading && <p className="text-zinc-400">Cargando comentarios...</p>}
      {error && <p className="text-red-500 bg-red-900/30 p-3 rounded mb-4">{error}</p>}
      {!isLoading && comments.length === 0 && (
        <p className="text-zinc-500 mb-6">Sé el primero en comentar.</p>
      )}
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-3 bg-zinc-800/50 p-4 rounded-lg shadow">
            <img 
              src={comment.userPhotoURL || '/default-avatar.png'} 
              alt={comment.userName} 
              className="w-10 h-10 rounded-full flex-shrink-0 border border-zinc-600"
            />
            <div className="flex-grow">
              <p className="font-semibold text-emerald-500 text-sm mb-1">
                {comment.userName}
                <span className="text-zinc-500 text-xs font-normal ml-2">
                  {comment.timestamp && comment.timestamp.toDate ? new Date(comment.timestamp.toDate()).toLocaleString() : ''}
                </span>
              </p>
              <p className="text-zinc-300 text-sm whitespace-pre-wrap break-words">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario para Nuevo Comentario */}
      {user ? (
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
            rows="4"
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-zinc-500"
            required
          />
          <button 
            type="submit"
            className="mt-3 px-5 py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            // disabled={!newComment.trim() || loadingAuth } // Deshabilitar mientras carga auth o si está vacío
          >
            Enviar Comentario
          </button>
        </form>
      ) : (
        <p className="text-zinc-400 mt-6 bg-zinc-800 p-4 rounded text-center">
          Necesitas <a href="/login" className="text-emerald-500 hover:underline font-semibold">iniciar sesión</a> para dejar un comentario.
          {/* O mostrar el botón de login directamente si prefieres */}
        </p>
      )}
    </div>
  );
}
