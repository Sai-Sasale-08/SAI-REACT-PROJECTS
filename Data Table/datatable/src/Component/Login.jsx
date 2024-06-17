import React, { useState } from 'react'

const Login = () => {


  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
      e.preventDefault()
      let user={
        email,
        password
      }
      // console.log(user)

      fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(user)
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data.token)
      // localStorage.setItem(data.token)
      localStorage.setItem("token",data.token)
    })
    .catch((err)=>console.log(err))
    alert("LOGIN SUCCESSFULLY")
  
  }
  return (
    <div>
      <h1>Login</h1>
      <br /><br />
      <form action="" onSubmit={handlesubmit} >
        <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder='Email....'/>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Password....'/>
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
