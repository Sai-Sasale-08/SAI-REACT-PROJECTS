import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      )
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div data-testid="products-container">
      <div>
        <h3 data-testid="product-brand">{data.brand}</h3>
      </div>
      <div>
        <img data-testid="product-image" src={data.img} />
      </div>
      <div data-testid="product-category">CATEGORY:- {data.category}</div>

      <div data-testid="product-details">DETAILS:- {data.details}</div>
      <div data-testid="product-price">PRICE:-{data.price}</div>
    </div>
  );
}
export default SingleProductPage;
