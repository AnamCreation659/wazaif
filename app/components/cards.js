'use client'

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';

export default function TiptapEditorWithToolbar() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '<p>Start writing here...</p>',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = editor?.getHTML();

    console.log('Submitted Data:', {
      title,
      subtitle,
      content,
    });

    // Reset fields (optional)
    setTitle('');
    setSubtitle('');
    editor?.commands.setContent('<p>Start writing here...</p>');
  };

  if (!editor) return null; // If editor is not ready

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-4xl mx-auto">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />

      {/* Subtitle */}
      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />

      {/* Toolbar */}
      <div className="flex gap-2 border p-2 rounded bg-gray-100 flex-wrap">
        {/* Bold */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          Bold
        </button>

        {/* Italic */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          Italic
        </button>

        {/* Underline */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          Underline
        </button>

        {/* Headings */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          H2
        </button>

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          1. List
        </button>

        {/* Blockquote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-blue-500 text-white p-1 rounded' : 'bg-white p-1 rounded'}
        >
          {'"'}
        </button>

        {/* Alignment */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className='bg-white p-1 rounded'
        >
          Left
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className='bg-white p-1 rounded'
        >
          Center
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className='bg-white p-1 rounded'
        >
          Right
        </button>

        {/* Horizontal Rule */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className='bg-white p-1 rounded'
        >
          ―
        </button>

        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className='bg-white p-1 rounded'
        >
          Undo
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className='bg-white p-1 rounded'
        >
          Redo
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="border rounded p-4 min-h-[200px]" />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}
