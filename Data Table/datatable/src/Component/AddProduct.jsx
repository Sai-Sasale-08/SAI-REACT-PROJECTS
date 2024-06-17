import React, { useState } from 'react'
import axios from 'axios'


let initialvalue={
    title:"",
    description:"",
    price:"",
    image:"",
    category:""
}
const AddProduct = () => {

    const[adddata,setadddata]=useState(initialvalue)
    const {image,title,description,category,price}=adddata

    const handlechange=(e)=>{
        setadddata({...adddata,[e.target.name]:e.target.value})
        
    }

    const handlesubmit=(e)=>
        {
            e.preventDefault();
            axios.post("http://localhost:8000/product",adddata).then((res)=>{
              console.log(res);
              window.location.href = "/product"
              alert("Product Add Successfully")
            })
            .catch((err)=>console.log(err))
            
        }
    

  return (
    <div>
      <h1>Post Product</h1>
      <form action="" onSubmit={handlesubmit}>
        <br /><br />
        <input type="text" name='title' onChange={(e)=>handlechange(e)} value={title} placeholder='title'/> <br /><br />
        <input type="text" name='image' onChange={(e)=>handlechange(e)} value={image} placeholder='image'/> <br /><br />
        <input type="text" name='description' onChange={(e)=>handlechange(e)} value={description} placeholder='description'/> <br /><br />
        <input type="text" name='price' onChange={(e)=>handlechange(e)} value={price} placeholder='price'/> <br /><br />
        <select name="category" onChange={(e)=>handlechange(e)} value={category} id=""> 
            <option value="">SELECT CATAGORY</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
        </select><br /> <br />
        <input type="submit" placeholder=''/>
      </form>
    </div>
  )
}

export default AddProduct
