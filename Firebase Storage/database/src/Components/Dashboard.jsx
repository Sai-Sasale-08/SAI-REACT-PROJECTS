import { collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Services/firebase";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [productdata, setproductdata] = useState([]);
  const [id,setid]=useState(0)

  const fetchdatafromfireStore = async () => {
    try {
      const database = await getDocs(collection(db, "products"));
      if (database) {
        const filterdata = database.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));
        console.log(filterdata);
        setproductdata(filterdata);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete=async(id)=>{
    try {
      
      const res = await deleteDoc(doc(db,"products",id))
      fetchdatafromfireStore()

    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    fetchdatafromfireStore();
  }, []);

  return (
    <div>
      <h1>PRODUCTS</h1>
      <br />
      <br />

      <hr />
      <Link to={'/postdata'}><h3>ADD DATA</h3> </Link><br />
      <hr /><br />

      {productdata.length > 0 &&
        productdata.map((el) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              marginBottom: "30px",
            }}
            key={el.id}
          >
            <div key={el.id}>
              <img src={el.image} alt="" height={"200px"} width={"200px"} />
              <h2>{el.title}</h2>
              <h4>PRICE :- ${el.price}</h4>
              <button style={{color:"black",backgroundColor:"red"}} onClick={()=>handledelete(el.id)}>DELETE</button>
              <Link to={`/updatedata/${el.id}`}><button style={{color:"black",backgroundColor:"green"}}>EDIT</button></Link>
            </div>
            
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
