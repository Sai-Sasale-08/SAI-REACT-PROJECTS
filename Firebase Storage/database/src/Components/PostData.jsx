import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Services/firebase'
import { useNavigate } from 'react-router-dom'


const initialstate={
    title:"",
    image:"",
    price:"",
    category:"",
    description:""
}

const PostData = () => {

    const [formdata,setformdata]=useState(initialstate)
    
    const {description,category,price,image,title}=formdata
    const navigate = useNavigate()

    const handlechange=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})
    }

    const datapost=async()=>{
        try {
          const res = await addDoc(collection(db,"products"),formdata)
          navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        datapost()
    }

  return (
    <div>
        <br />
        <h1>POST PRODUCTS</h1><br /><br />
      <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder='title' onChange={(e)=>handlechange(e)} name='title' value={title} /><br />
        <input type="text" placeholder='image' onChange={(e)=>handlechange(e)} name='image' value={image} /><br />
        <input type="text" placeholder='price' onChange={(e)=>handlechange(e)} name='price' value={price} /><br />
        <select name="category" onChange={(e)=>handlechange(e)} value={category} id="">
            <option value="">SELECT CATEGORY</option>
            <option value={"men's clothing"}>MEN</option>
            <option value={"women's clothing"}>WOMEN</option>
            <option value={"electronics"}>ELECTRONICS</option>
            <option value={"jewelery"}>JEWELERY</option>
        </select><br />
        <input type="text" onChange={(e)=>handlechange(e)} placeholder='description' value={description} name='description' /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default PostData
