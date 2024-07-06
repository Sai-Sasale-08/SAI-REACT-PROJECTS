import React from 'react'
import { auth } from '../Services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {

    const[user]=useAuthState(auth)
    if(!user)
        {
          return  <Navigate to={'/signup'}></Navigate>
        }

  return children
}

export default PrivetRoute
