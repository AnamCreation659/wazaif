import React from 'react'
import Cards from './components/cards'
import Navebar from './components/navbar'
import AdminLayout from './admin/layout'
const page = () => {
  return (
    <div>
     <Navebar />
    <AdminLayout/>
    {/* <Cards/> */}
    
    </div>
  )
}

export default page

