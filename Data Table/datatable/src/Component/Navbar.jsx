import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    let links=[
        {path:"/", title:"Home"},
        {path:"/about", title:"About"},
        {path:"/product", title:"Product"},
        {path:"/login", title:""},
    ]
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"50px",backgroundColor:"black",paddingTop:"20px"}}>
      {links.map((el)=>(
        <NavLink style={({isActive})=>{
            return isActive ? {color:"red",textDecoration:"none"} : {color:"blue",textDecoration:"none"}
        }} key={el.path} to={el.path}>{el.title}</NavLink>
      ))}

      <Link to="/login"><Button variant="primary">LOGIN</Button></Link>

    </div>
  )
}

export default Navbar
