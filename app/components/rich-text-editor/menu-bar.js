"use client"
import React from 'react'
import {
  Bold,
  Italic,
  Strikethrough,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered
} from 'lucide-react'

const MenuBar = ({ editor }) => {
  if (!editor) return null

  const menuItems = [
    {
      icon: Heading1,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      active: editor.isActive('heading', { level: 1 }),
      className: ' font-bold'
    },
    {
      icon: Heading2,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor.isActive('heading', { level: 2 }),
      className: ' font-semibold'
    },
    {
      icon: Heading3,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor.isActive('heading', { level: 3 }),
      className: ' font-medium'
    },
    {
      icon: Bold,
      command: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive('bold'),
      className: 'font-bold'
    },
    {
      icon: Italic,
      command: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive('italic'),
      className: 'italic'
    },
    {
      icon: Strikethrough,
      command: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive('strike'),
      className: 'line-through'
    },
    {
      icon: Highlighter,
      command: () => editor.chain().focus().toggleHighlight({ color: '#fef08a' }).run(),
      active: editor.isActive('highlight'),
      className: 'bg-yellow-200'
    },
    {
      icon: List,
      command: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive('bulletList'),
      className: 'list-disc ml-4'
    },
    {
      icon: ListOrdered,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive('orderedList'),
      className: 'list-decimal ml-4'
    },
    {
      icon: AlignLeft,
      command: () => editor.chain().focus().setTextAlign('left').run(),
      active: editor.isActive({ textAlign: 'left' }),
      className: 'text-left'
    },
    {
      icon: AlignCenter,
      command: () => editor.chain().focus().setTextAlign('center').run(),
      active: editor.isActive({ textAlign: 'center' }),
      className: 'text-center'
    },
    {
      icon: AlignRight,
      command: () => editor.chain().focus().setTextAlign('right').run(),
      active: editor.isActive({ textAlign: 'right' }),
      className: 'text-right'
    },
    {
      icon: AlignJustify,
      command: () => editor.chain().focus().setTextAlign('justify').run(),
      active: editor.isActive({ textAlign: 'justify' }),
      className: 'text-justify'
    },
  ]

  return (
    <div className='flex gap-2 border-b p-2'>
      {menuItems.map((item, index) => {
        const Icon = item.icon
        return (
          <Icon
            key={index}
            onClick={item.command}
            className={`w-5 h-5 cursor-pointer ${
              item.active ? 'text-blue-600' : 'text-gray-600'
            } hover:text-black transition-all`}
          />
        )
      })}
    </div>
  )
}

export default MenuBar
