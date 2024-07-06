import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../Services/firebase'
import GoogleButton from 'react-google-button'

const GoogleLogin = () => {

    const handleclick=()=>{
        signInWithPopup(auth , provider)
        .then((res)=>{console.log(res)
          alert("LOGIN SUCCESS")
        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>
      <GoogleButton onClick={handleclick}></GoogleButton>
    </div>
  )
}

export default GoogleLogin
