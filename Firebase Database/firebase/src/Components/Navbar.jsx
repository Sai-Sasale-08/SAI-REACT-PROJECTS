import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between",width:"100%",margin:"auto"}}>
      <Link to={'/'}>HOME</Link>
      <Link to={'/dashboard'}>PRODUCTS</Link>
      <Link to={'/login'}>LOGIN</Link>
      
      
    </div>
  )
}

export default Navbar
