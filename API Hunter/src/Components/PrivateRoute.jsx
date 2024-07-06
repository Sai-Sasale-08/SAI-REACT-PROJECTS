import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const {loginUser,logoutUser,authState}=useContext(AuthContext)
    
    if(!authState.isAuth)
        {
            return <Navigate to={'/login'}></Navigate>
        }
          

    return children
        
}

export default PrivateRoute;
