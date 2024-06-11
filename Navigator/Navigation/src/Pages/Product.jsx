import { useEffect, useState } from "react"
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

const Product = () => {
    const [productdata,setproductdata]=useState([])
    const [load,setload]=useState(false)
    const data=()=>
    {
      setload(true)
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
              setproductdata(response.data)
              setload(false)
            })
            .catch(error => console.log(error));
    }
    useEffect(()=>
        {
          
            data()  
            
        },[])
  return load ?<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>   : (
    <div>
      <h1>.....PRODUCTS.....</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {productdata.map((el)=>(
        <Link to={`/project/${el.id}`} key={el.id}>
          <Card style={{ width:"30rem" }} key={el.id} >
        <Card.Img variant="top" src={el.image} style={{height:"150px",width:"150px",margin:"auto"}} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <Card.Text>{el.category}</Card.Text>
          <Card.Text>{el.price}</Card.Text>
          <Button variant="primary">SHOP NOW</Button>
        </Card.Body>
      </Card>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Product
