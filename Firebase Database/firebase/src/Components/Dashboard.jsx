import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

  const [data,setdata]=useState([])

  const fetchdata=()=>{

    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{setdata(res.data)})
    .catch((err)=>{console.log(err)})

  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div>
      <h1>PRODUCTS</h1>
      <br /><br />
      {data.map((el)=>(
        <div style={{display:"flex", justifyContent:"space-evenly",margin:"auto",width:"500px",marginBottom:"30px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}}>
        <div key={el.id} >
          <img src={el.image} style={{height:"200px",width:"200px"}} alt="" />
          <h2>{el.title}</h2>
          <h4>PRICE:- ${el.price}</h4>
          <p>{el.description}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
