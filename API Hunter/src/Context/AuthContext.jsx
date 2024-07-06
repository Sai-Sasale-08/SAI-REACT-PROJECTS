import { createContext, useState } from "react";


export const AuthContext=createContext()


function AuthContextProvider({children}) {


    const [authState,setauthState]=useState({
        token:null,
        isAuth:false,
    })

    const loginUser=(token)=>{
        setauthState({isAuth:true,token:token})
    }

    const logoutUser=()=>{
        setauthState({isAuth:false,token:null})
    }

    return (
        <AuthContext.Provider value={{loginUser,logoutUser,authState}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
