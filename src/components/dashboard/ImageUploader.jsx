import React, { useState, useRef } from 'react';
import { getAuth } from 'firebase/auth';

export default function ImageUploader({ onImageUploaded, currentImageUrl }) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentImageUrl || '');
  const [uploadMode, setUploadMode] = useState(currentImageUrl ? 'url' : 'file');
  const [urlInput, setUrlInput] = useState(currentImageUrl || '');
  const fileInputRef = useRef(null);

  const handleFileSelect = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido');
      return;
    }

    // Validar tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('La imagen es demasiado grande. El tamaño máximo es 5MB');
      return;
    }

    setUploading(true);

    try {
      // Crear vista previa local
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);

      // Subir a Firebase Storage
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        throw new Error('Usuario no autenticado');
      }

      const token = await user.getIdToken();

      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/admin/articles/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al subir la imagen');
      }

      const { url } = await response.json();
      setPreviewUrl(url);
      onImageUploaded(url);

    } catch (error) {
      console.error('Error uploading image:', error);
      alert(`Error al subir la imagen: ${error.message}`);
      setPreviewUrl('');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      setPreviewUrl(urlInput);
      onImageUploaded(urlInput);
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl('');
    setUrlInput('');
    onImageUploaded('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Imagen Destacada
      </label>

      {/* Tabs para seleccionar modo */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setUploadMode('file')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            uploadMode === 'file'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          📤 Subir desde dispositivo
        </button>
        <button
          type="button"
          onClick={() => setUploadMode('url')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            uploadMode === 'url'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🔗 Usar URL
        </button>
      </div>

      {/* Modo: Subir archivo */}
      {uploadMode === 'file' && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
              uploading
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
                : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
            }`}
          >
            {uploading ? (
              <div className="flex flex-col items-center">
                <svg
                  className="animate-spin h-8 w-8 text-green-600 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600">Subiendo imagen...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  className="h-10 w-10 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-green-600">Haz clic para seleccionar</span> o
                  arrastra una imagen
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, WebP (máx. 5MB)</p>
              </div>
            )}
          </label>
        </div>
      )}

      {/* Modo: URL */}
      {uploadMode === 'url' && (
        <div className="flex gap-2">
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
          <button
            type="button"
            onClick={handleUrlSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Aplicar
          </button>
        </div>
      )}

      {/* Vista previa de la imagen */}
      {previewUrl && (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Vista previa"
            className="w-full h-48 object-cover rounded-lg border-2 border-gray-200"
            onError={() => {
              setPreviewUrl('');
              alert('No se pudo cargar la imagen. Verifica la URL.');
            }}
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
            title="Eliminar imagen"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-2 text-xs text-gray-500 break-all">
            {previewUrl}
          </div>
        </div>
      )}
    </div>
  );
}
