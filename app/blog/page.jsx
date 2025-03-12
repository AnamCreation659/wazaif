"use client"
import React from 'react'
import RichTextEditor from '../components/rich-text-editor'
import Navebar from '../components/navbar'

const page = () => {
  return (
    <div className='mx-auto bg-blue-200'>
    <Navebar/>
      <RichTextEditor/>
    </div>
  )
}

export default page