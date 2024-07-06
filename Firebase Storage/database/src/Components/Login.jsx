import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Services/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import GoogleLogin from './GoogleLogin'

const Login = () => {

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
        let user={
            email,
            password
        }
        console.log(user)
        signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            console.log(res)
           
        })
        .catch((err)=>console.log(err))
    }
    const handleLogout=()=>{
      signOut(auth)
      .then((res)=>{
        console.log(res)
        alert("LOGOUT SUCCESS")
      })
      .catch((err)=>console.log(err))
    }

  return (
    <div>
      <h1>LOGIN FORM</h1>
        <br /><br />
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setemail(e.target.value)} /><br />
        <input type="text" onChange={(e)=>setpassword(e.target.value)} /><br />
        <input type="submit" />
      </form>
      <br />
      <div style={{marginLeft:"40px"}}><GoogleLogin/></div><br />
      <button onClick={handleLogout} style={{color:"black",backgroundColor:"red"}}>LOG OUT</button><br /><br />
      <Link to={'/signup'}><button style={{color:"black",backgroundColor:"green"}}>SIGNUP PAGE</button></Link><br />
      
    
    </div>
  )
}

export default Login
