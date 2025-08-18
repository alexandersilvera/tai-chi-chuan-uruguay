import React, { useState, useEffect } from 'react';
import TurndownService from 'turndown';

// Importación dinámica para evitar problemas de SSR
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  linkStyle: 'inlined'
});

export default function ArticleEditor({ 
  isOpen, 
  onClose, 
  onSave, 
  initialData = null,
  mode = 'create' // 'create' or 'edit'
}) {
  const [editorContent, setEditorContent] = useState(initialData?.content || '');
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [SimpleEditor, setSimpleEditor] = useState(null);
  const [editorHeight, setEditorHeight] = useState(400);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    tags: initialData?.tags?.join(', ') || '',
    heroImage: initialData?.heroImage || '',
    author: initialData?.author || '',
    content: initialData?.content || ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsClient(true);
    
    // Ajustar altura del editor según el tamaño de pantalla
    const updateEditorHeight = () => {
      if (typeof window !== 'undefined') {
        const height = window.innerWidth < 640 ? 250 : 300;
        setEditorHeight(height);
      }
    };
    
    updateEditorHeight();
    window.addEventListener('resize', updateEditorHeight);
    
    // Configurar editor simple
    setSimpleEditor(true);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateEditorHeight);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'El título es obligatorio';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }
    
    if (!formData.tags.trim()) {
      newErrors.tags = 'Al menos un tag es obligatorio';
    }
    
    const cleanContent = editorContent.replace(/<[^>]*>/g, '').trim();
    if (!cleanContent || cleanContent === 'Escribe el contenido de tu artículo aquí...') {
      newErrors.content = 'El contenido del artículo es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Convertir HTML del editor a Markdown
      const htmlContent = editorContent;
      const markdownContent = turndownService.turndown(htmlContent);
      
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const articleData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        tags: tagsArray,
        heroImage: formData.heroImage.trim(),
        author: formData.author.trim() || 'Admin',
        content: markdownContent,
        htmlContent: htmlContent
      };

      console.log('Sending article data:', JSON.stringify(articleData, null, 2));
      await onSave(articleData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        tags: '',
        heroImage: '',
        author: '',
        content: ''
      });
      
      setEditorContent('');
      
      onClose();
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Error al guardar el artículo. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
            {mode === 'create' ? 'Crear Nuevo Artículo' : 'Editar Artículo'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(95vh - 180px)' }}>
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Article Metadata */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título del Artículo *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: Principios del Sun Taiji Quan"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autor
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Nombre del autor (opcional)"
                />
              </div>

              {/* Description */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Breve descripción del artículo que aparecerá en la lista de posts"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags *
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${
                    errors.tags ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tai-chi, filosofia, practica-interna"
                />
                <p className="text-gray-500 text-sm mt-1">Separa los tags con comas</p>
                {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
              </div>

              {/* Hero Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagen Destacada (URL)
                </label>
                <input
                  type="url"
                  value={formData.heroImage}
                  onChange={(e) => handleInputChange('heroImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenido del Artículo *
              </label>
              {errors.content && <p className="text-red-500 text-sm mb-2">{errors.content}</p>}
              <div className={`border rounded-lg overflow-hidden ${errors.content ? 'border-red-500' : 'border-gray-300'}`}>
                {isClient && SimpleEditor ? (
                  <div className="bg-white">
                    {/* Toolbar */}
                    <div className="border-b border-gray-200 p-2">
                      <div className="flex flex-wrap gap-1 mb-1">
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('bold', false, null);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 font-bold text-sm"
                        title="Negrita"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('italic', false, null);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 italic text-sm"
                        title="Cursiva"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('underline', false, null);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 underline text-sm"
                        title="Subrayado"
                      >
                        U
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('formatBlock', false, 'h2');
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm font-semibold"
                        title="Título"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('formatBlock', false, 'h3');
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                        title="Subtítulo"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('formatBlock', false, 'p');
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                        title="Texto normal"
                      >
                        Normal
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('insertUnorderedList', false, null);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                        title="Lista"
                      >
                        • Lista
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          document.execCommand('insertOrderedList', false, null);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                        title="Lista numerada"
                      >
                        1. Lista
                      </button>
                      <div className="w-px bg-gray-300 mx-1"></div>
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          const url = prompt('Ingresa la URL del enlace:');
                          if (url) document.execCommand('createLink', false, url);
                        }}
                        className="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                        title="Insertar enlace"
                      >
                        🔗 Enlace
                      </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        💡 Usa "Normal" para volver al texto normal después de títulos o listas. Presiona Enter después de títulos para continuar con párrafo normal.
                      </p>
                    </div>
                    
                    {/* Editor */}
                    <div
                      ref={(el) => {
                        if (el && !editorContent) {
                          el.innerHTML = '<p>Escribe el contenido de tu artículo aquí...</p>';
                        }
                      }}
                      contentEditable
                      className="p-4 outline-none min-h-[300px] border-0"
                      style={{ 
                        height: editorHeight, 
                        overflowY: 'auto',
                        lineHeight: '1.6',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                      }}
                      onInput={(e) => {
                        const content = e.currentTarget.innerHTML;
                        setEditorContent(content);
                        // Limpiar placeholder
                        if (content === '<p>Escribe el contenido de tu artículo aquí...</p>') {
                          setEditorContent('');
                        }
                      }}
                      onKeyDown={(e) => {
                        // Mejorar comportamiento con Enter
                        if (e.key === 'Enter') {
                          const selection = window.getSelection();
                          if (selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            const parentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
                              ? range.commonAncestorContainer.parentElement 
                              : range.commonAncestorContainer;
                            
                            // Si estamos en un título, después de Enter crear un párrafo normal
                            if (parentElement.tagName === 'H2' || parentElement.tagName === 'H3') {
                              e.preventDefault();
                              document.execCommand('insertHTML', false, '<br><p><br></p>');
                            }
                          }
                        }
                      }}
                      onFocus={(e) => {
                        // Limpiar placeholder al hacer focus
                        if (e.currentTarget.innerHTML === '<p>Escribe el contenido de tu artículo aquí...</p>') {
                          e.currentTarget.innerHTML = '';
                        }
                      }}
                      onBlur={(e) => {
                        // Restaurar placeholder si está vacío
                        if (!e.currentTarget.innerHTML.trim() || e.currentTarget.innerHTML === '<br>') {
                          e.currentTarget.innerHTML = '<p>Escribe el contenido de tu artículo aquí...</p>';
                        }
                      }}
                      suppressContentEditableWarning={true}
                    />
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Cargando editor...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 order-first sm:order-last"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {mode === 'create' ? 'Crear Artículo' : 'Guardar Cambios'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}