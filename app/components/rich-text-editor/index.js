"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import MenuBar from './menu-bar'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList:{
          HTMLAttributes:{
            class:'list-disc ml-4'
          }
        },
       orderedList:{
          HTMLAttributes:{
            class:'list-decimal ml-4'
          }
        },
        heading1: {
          HTMLAttributes: {
            class: 'font-bold', // Basic heading styling
          },
        },
      }),
      TextStyle, // Inline styles
      Highlight.configure({ multicolor: true }), // Highlight
      TextAlign.configure({ types: ['heading', 'paragraph'] }), // Alignment for headings/paragraphs
    ],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'p-4 min-h-[300px] border rounded focus:outline-none', // Main editor box styles
      },
    },
    immediatelyRender: false,
  })

  return (
    <div className='w-3/4 mx-auto border rounded shadow-md'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor;
