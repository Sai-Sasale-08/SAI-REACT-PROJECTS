import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import Loader from "../Components/Loader";

function Dashboard() {

  const {logoutUser,authState}=useContext(AuthContext)
  const [data,setdata]=useState([])
  const[loading,setloading]=useState(false)

  useEffect(()=>{
    setloading(true)
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setdata(res.data.data)
      setloading(false)
    })
    .catch((err)=>{console.log(err)
      setloading(false)
    })
  },[])

  return loading ? <Loader/>:(
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" style={{backgroundColor:"green",color:"white"}} onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}

        <ProductsTable  data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
