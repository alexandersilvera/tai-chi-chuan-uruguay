import React, { useState, useEffect } from 'react';

// Importación dinámica para evitar problemas de SSR
const ArticleEditor = React.lazy(() => import('./ArticleEditor.jsx'));

export default function ArticleEditorWrapper({ isOpen, onClose, onSave, initialData, mode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isOpen) {
    return null;
  }

  return (
    <React.Suspense fallback={
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="ml-3">Cargando editor...</span>
          </div>
        </div>
      </div>
    }>
      <ArticleEditor
        isOpen={isOpen}
        onClose={onClose}
        onSave={onSave}
        initialData={initialData}
        mode={mode}
      />
    </React.Suspense>
  );
}