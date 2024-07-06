import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Services/firebase'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import GoogleLogin from './GoogleLogin';


const Signup = () => {

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
        let user={
            email,
            password
        }
        console.log(user)
        createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            console.log(res)
            alert("SUCCESSFULLY")
        })
        .catch((err)=>console.log(err))
    }

    

  return (
    <div>
      <h1>SIGN UP FORM</h1>
      <br /><br />
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setemail(e.target.value)} /><br />
        <input type="text" onChange={(e)=>setpassword(e.target.value)} /><br />
        <input type="submit" />
      </form>
        <br />
        <div style={{marginLeft:"60px"}}><GoogleLogin/></div><br />
        <Link to={'/login'}><button style={{color:"black",backgroundColor:"green"}}>LOGIN PAGE</button></Link>
        
    </div>
  )
}

export default Signup
