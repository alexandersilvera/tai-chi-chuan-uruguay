import React, { lazy, Suspense } from 'react';
import { AuthProvider } from '../context/AuthContext.jsx';

const Comments = lazy(() => import('./Comments.jsx'));

export default function CommentsWithProvider(props) {
  return (
    <Suspense fallback={<div className="text-center p-8 text-zinc-500">Cargando comentarios...</div>}>
      <Comments {...props} />
    </Suspense>
  );
}
