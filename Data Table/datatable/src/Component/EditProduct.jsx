import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


let initialvalue={
    title:"",
    description:"",
    price:"",
    image:"",
    category:""
}
const EditProduct = () => {

    const[adddata,setadddata]=useState(initialvalue)
    const {image,title,description,category,price}=adddata
    const {id}=useParams()
   

    const handlechange=(e)=>{
        setadddata({...adddata,[e.target.name]:e.target.value})
        
    }

    const edit =(id)=>{
      axios.put(`http://localhost:8000/product/${id}`).then((res)=>{console.log(res)
        alert("successfull change")
        window.location.href = "/product"
      })
      .catch((err)=>console.log(err))
      
      
    }
    

   const handlesubmit=(e)=>
        {
            e.preventDefault();
            // axios.put(`http://localhost:8000/product/${id}`).then((res)=>{console.log(res)
            //   alert("successfull change")
            //   window.location.href = "/product"
            // })
            // .catch((err)=>console.log(err))
            // console.log(id)
            edit(id)
            console.log(adddata)
        }
    

  return (
    <div>
      <h1>Edit Product</h1>
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

export default EditProduct
