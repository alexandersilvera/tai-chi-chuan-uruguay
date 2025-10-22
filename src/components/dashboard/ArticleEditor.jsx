import React, { useState, useEffect, useRef } from 'react';
import TurndownService from 'turndown';
import ImageUploader from './ImageUploader.jsx';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  $getRoot,
  createCommand
} from 'lexical';

import { HeadingNode, QuoteNode, $createHeadingNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $setBlocksType } from '@lexical/selection';

import { ImageNode, $createImageNode } from './editor-nodes/ImageNode.jsx';

const theme = {
  // Theme styling goes here
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2'
  },
  list: {
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listitem'
  },
  image: 'editor-image',
  link: 'editor-link',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    underline: 'editor-text-underline'
  },
};

function onError(error) {
  console.error(error);
}

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  linkStyle: 'inlined'
});

export const INSERT_IMAGE_COMMAND = createCommand();

function ImageUploadPlugin() {
    const [editor] = useLexicalComposerContext();
    const inputRef = useRef(null);

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/api/admin/articles/upload-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Image upload failed');
            }

            const { url } = await response.json();
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, { src: url, alt: file.name });

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        return editor.registerCommand(
            INSERT_IMAGE_COMMAND,
            (payload) => {
                const { src, alt } = payload;
                const imageNode = $createImageNode(src, alt);
                editor.update(() => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        selection.insertNodes([imageNode]);
                    }
                });
                return true;
            },
            4
        );
    }, [editor]);

    return (
        <>
            <input type="file" accept="image/*" ref={inputRef} onChange={handleUpload} style={{ display: 'none' }} />
            <button type="button" onClick={() => inputRef.current.click()} className="px-2 py-1 rounded hover:bg-gray-100 text-sm">Image</button>
        </>
    );
}

function EditorToolbar() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    useEffect(() => {
        return editor.registerUpdateListener(({editorState}) => {
            editorState.read(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    setIsBold(selection.hasFormat('bold'));
                    setIsItalic(selection.hasFormat('italic'));
                    setIsUnderline(selection.hasFormat('underline'));
                }
            });
        });
    }, [editor]);

    return (
        <div className="p-2 border-b border-gray-200 flex flex-wrap gap-1">
            <button type="button" onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} className="px-2 py-1 rounded hover:bg-gray-100 text-sm">Undo</button>
            <button type="button" onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} className="px-2 py-1 rounded hover:bg-gray-100 text-sm">Redo</button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')} className={`px-2 py-1 rounded hover:bg-gray-100 font-bold text-sm ${isBold ? 'bg-gray-200' : ''}`}>B</button>
            <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')} className={`px-2 py-1 rounded hover:bg-gray-100 italic text-sm ${isItalic ? 'bg-gray-200' : ''}`}>I</button>
            <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')} className={`px-2 py-1 rounded hover:bg-gray-100 underline text-sm ${isUnderline ? 'bg-gray-200' : ''}`}>U</button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <button type="button" onClick={() => editor.update(() => { const selection = $getSelection(); if ($isRangeSelection(selection)) $setBlocksType(selection, () => $createHeadingNode('h1')); })} className="px-2 py-1 rounded hover:bg-gray-100 text-sm font-semibold">H1</button>
            <button type="button" onClick={() => editor.update(() => { const selection = $getSelection(); if ($isRangeSelection(selection)) $setBlocksType(selection, () => $createHeadingNode('h2')); })} className="px-2 py-1 rounded hover:bg-gray-100 text-sm font-semibold">H2</button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <button type="button" onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)} className="px-2 py-1 rounded hover:bg-gray-100 text-sm">UL</button>
            <button type="button" onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)} className="px-2 py-1 rounded hover:bg-gray-100 text-sm">OL</button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <ImageUploadPlugin />
        </div>
    );
}

function MyInitialStatePlugin({ htmlContent }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        if (htmlContent) {
            editor.update(() => {
                const parser = new DOMParser();
                const dom = parser.parseFromString(htmlContent, 'text/html');
                const nodes = $generateNodesFromDOM(editor, dom);
                const root = $getRoot();
                root.clear();
                root.append(...nodes);
            });
        }
    }, [editor, htmlContent]);
    return null;
}

function EditorRefPlugin({ onEditor }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        onEditor(editor);
    }, [editor, onEditor]);
    return null;
}

export default function ArticleEditor({ 
  isOpen, 
  onClose, 
  onSave, 
  initialData = null,
  mode = 'create'
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    tags: initialData?.tags?.join(', ') || '',
    heroImage: initialData?.heroImage || '',
    author: initialData?.author || '',
  });
  const [errors, setErrors] = useState({});
  const editorRef = useRef(null);

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [ HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, TableNode, TableCellNode, TableRowNode, AutoLinkNode, LinkNode, ImageNode ],
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'El título es obligatorio';
    if (!formData.description.trim()) newErrors.description = 'La descripción es obligatoria';
    if (!formData.tags.trim()) newErrors.tags = 'Al menos un tag es obligatorio';
    
    let isContentEmpty = true;
    const editor = editorRef.current;
    if (editor) {
        const editorState = editor.getEditorState();
        editorState.read(() => {
            const root = $getRoot();
            if (root.getTextContent().trim() !== '') {
                isContentEmpty = false;
            }
        });
    }
    if (isContentEmpty) newErrors.content = 'El contenido no puede estar vacío';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

    const editor = editorRef.current;
    let htmlContent = '';
    if (editor) {
        editor.getEditorState().read(() => {
            htmlContent = $generateHtmlFromNodes(editor, null);
        });
    }

    const markdownContent = turndownService.turndown(htmlContent);
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

    const articleData = {
        ...initialData,
        title: formData.title.trim(),
        description: formData.description.trim(),
        tags: tagsArray,
        heroImage: formData.heroImage.trim(),
        author: formData.author.trim() || 'Admin',
        content: markdownContent,
        htmlContent: htmlContent
    };

    await onSave(articleData);
    onClose();
    setIsLoading(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
            {mode === 'create' ? 'Crear Nuevo Artículo' : 'Editar Artículo'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-grow">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título del Artículo *</label>
                <input type="text" value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`} placeholder="Ej: Principios del Sun Taiji Quan" />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                <input type="text" value={formData.author} onChange={(e) => handleInputChange('author', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Nombre del autor (opcional)" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción *</label>
                <textarea value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={3} className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${errors.description ? 'border-red-500' : 'border-gray-300'}`} placeholder="Breve descripción del artículo que aparecerá en la lista de posts" />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags *</label>
                <input type="text" value={formData.tags} onChange={(e) => handleInputChange('tags', e.target.value)} className={`w-full px-3 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 ${errors.tags ? 'border-red-500' : 'border-gray-300'}`} placeholder="tai-chi, filosofia, practica-interna" />
                <p className="text-gray-500 text-sm mt-1">Separa los tags con comas</p>
                {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
              </div>
              <div>
                <ImageUploader
                  currentImageUrl={formData.heroImage}
                  onImageUploaded={(url) => handleInputChange('heroImage', url)}
                />
              </div>
            </div>
            <LexicalComposer initialConfig={initialConfig}>
              <div className="editor-container border rounded-lg">
                <EditorToolbar />
                <div className="relative">
                  <RichTextPlugin
                    contentEditable={<ContentEditable className="editor-input p-4 outline-none min-h-[200px] sm:min-h-[300px]" />}
                    placeholder={<div className="absolute top-4 left-4 text-gray-400 pointer-events-none">Escribe el contenido de tu artículo aquí...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                </div>
                <HistoryPlugin />
                <EditorRefPlugin onEditor={(editor) => editorRef.current = editor} />
                <MyInitialStatePlugin htmlContent={initialData?.htmlContent} />
              </div>
            </LexicalComposer>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
          <button onClick={onClose} disabled={isLoading} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50">Cancelar</button>
          <button onClick={handleSave} disabled={isLoading} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 order-first sm:order-last">
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Guardando...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {mode === 'create' ? 'Crear Artículo' : 'Guardar Cambios'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
