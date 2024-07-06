import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../Context/AuthContext";


function Login() {

  const[email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {loginUser}=useContext(AuthContext)
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()
    let user ={
      email,
      password
    }

    axios.post("https://reqres.in/api/login",user)
    .then((res)=>{loginUser(res.data.token)
      navigate("/dashboard")
    })
    .catch((err)=>{console.log(err)})

  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" onChange={(e)=>setemail(e.target.value)} placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              onChange={(e)=>setpassword(e.target.value)}
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
