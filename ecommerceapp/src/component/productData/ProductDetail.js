import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function ProductDetail() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const { addItemToCart } = useCart();

  function loadProductById() {
    fetch('https://fakestoreapi.com/products/'+productid)
      .then((response) => {
        response.json().then((data) => {
          setProduct(data);
        });
      })
      .catch((error) => {
        console.error('Error fetching product: ', error);
      });
  }

  useEffect(() => {
    loadProductById();
  }, [productid]);

  const handleAddToCart = () => {
    addItemToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className='container py-5 border border-3 mt-4 mb-4'>
      <div className='row py-4'>
        <div className='col-md-6'>
          <img src={product.image} alt={product.title} height='400px' width='400px' />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{product.category}</h4>
          <h3 className='display-6'>{product.title}</h3>
          <p className='lead fw-bolder'>Rating: {product.rating && product.rating.rate}<span>★</span></p>
          <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-outline-dark px-4 py-2' onClick={handleAddToCart}>Add to Cart</button>
          <NavLink className='btn btn-dark ms-2 px-3 py-2' to={'/cart'}>Go to Cart</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;