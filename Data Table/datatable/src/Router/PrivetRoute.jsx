import React from 'react'

const PrivetRoute = ({children}) => {
    const tokens=localStorage.getItem("token")
    if(!tokens)
        {
            return <h1>Please Login Your Account </h1>
        }
  return children
}

export default PrivetRoute
