import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

export const Project = () => {

  const [productdata,setproductdata]=useState([])
    // const [load,setload]=useState(false)
    const {id}=useParams()
    const data=()=>
    {
      // setload(true)
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
              setproductdata(response.data)
              // setload(false)
            })
            .catch(error => console.log(error));
    }
    useEffect(()=>
        {
          
            data()  
            
        },[])
      
  return (
    <div>
      <h1>Description</h1>
      <br /><br /><br />

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{width:"70%"}}>
            <img src={productdata.image} alt="" style={{width:"100%",height:"400px"}}/>
          </div>
          <div>
            <h1 style={{color:"red"}}>{productdata.title}</h1>
            <br />
            <h2 style={{color:"blue"}}>{productdata.category}</h2>
            <p>{productdata.description}</p>
            <p style={{color:"green"}}>PRICE :- {productdata.price}</p>
           
            
          </div>
      </div>

    </div>
  )
}


