import { useEffect, useState } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { Link, NavLink } from "react-router-dom";


const Product = () => {
    const [productdata,setproductdata]=useState([])
    const [load,setload]=useState(false)
    const [filter,setfilter]=useState(null)
    const [sort,setsort]=useState(null)
    const [page,setpage]=useState(1)
    const [search,setsearch]=useState(null)
    const data=()=>
    {
      setload(true)
        axios.get('http://localhost:8000/product',{
            params:{
              category:filter,
              _sort:"price",
              _order:sort,
              _limit:"5",
              _page:page,
              q:search
            }
          }
        )
            .then(response => {
              setproductdata(response.data)
              setload(false)
            })
            .catch(error => console.log(error));
    }

    const handledelete=(id)=>{
        axios.delete(`http://localhost:8000/product/${id}`).then((res)=>{alert("DELETED")
          window.location.href = "/product"
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>
        {
          
            data()  
            
        },[filter,sort,page,search])
  return load ?<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>   : (
    <div>
      <h1>.....PRODUCTS.....</h1>

      <br /><br />

      <NavLink to={"/addproduct"} style={({isActive})=>{
            return isActive ? {color:"red",textDecoration:"none"} : {color:"blue",textDecoration:"none"}
        }}><h3>ADD PRODUCT</h3></NavLink>

<br />
      <div>
        <button disabled={page==1} onClick={()=>setpage(page-1)}> PREV </button>
        <button disabled>{page}</button>
        <button  onClick={()=>setpage(page+1)}> NEXT </button>
      </div>
      <br />
      
      <div style={{display:"flex",justifyContent:"space-between", marginLeft:"70px",marginRight:"70px",marginTop:"30px"}}>
      <div><select onChange={(ell)=>setfilter(ell.target.value)}>
            <option value="">SELECT CATAGORY</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
      </select>
      </div>
      <input type="text" placeholder="search...." onChange={(el)=>setsearch(el.target.value)} style={{marginLeft:"50%"}}/>
      

      </div>




      <br /><br />
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px"}}>
      {productdata.map((el)=>(
        <div style={{border:"2px solid black"}} key={el.id}>

        <NavLink  to={`/project/${el.id}`} key={el.id} style={({isActive})=>{
            return isActive ? {color:"red",textDecoration:"none"} : {color:"red",textDecoration:"none"}
        }}>
          <div  key={el.id} >
        <img  src={el.image} style={{height:"150px",width:"150px",margin:"auto"}} />
        <div>
          <h2 style={{color:"green"}}>{el.title}</h2>
          <p style={{color:"teal"}}>{el.description}</p>
          <p style={{color:"teal"}}>{el.category}</p>
          <p style={{color:"black"}}>{el.price}</p>
          
        </div>
      </div>
        </NavLink >
        <button onClick={()=>handledelete(el.id)} style={{color:"red",backgroundColor:"black"}}>DELETE</button>
        <Link to={`/editproduct/${el.id}`}><button>EDIT</button></Link>

        </div>
      ))}
      </div>
<br /><br />
      {/* <div>
        <button disabled={page==1} onClick={()=>setpage(page-1)}> PREV </button>
        <button disabled>{page}</button>
        <button disabled={page==4} onClick={()=>setpage(page+1)}> NEXT </button>
      </div> */}
      <br />
    </div>
  )
}

export default Product
