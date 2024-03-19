import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  let data = props.product;
  return (
    <div className="my-3">
    <div className="card  text-center h-100 mx-3" key={data.id} style={{width:240}}>
  <img className="card-img-top  mt-3 ms-4" src={data.image} alt={data.title} height='220px' style={{width:200}}/>
  <div className="card-body">
    <Link className="card-title mb-0 text-decoration-none" to={/products/+data.id}>{data.title.substring(0,12)}...</Link>
    <p className="card-text lead fw-bold">${data.price}</p>
    <a href="#" className="btn btn-outline-dark">Buy Now</a>
  </div>
</div>
    </div>
  )
}

export default ProductCard;
