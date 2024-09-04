// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ cloudinaryImageId, name, id, cuisines, slaString, productdescription }) => (
  <Link to={`/product/${id}`} className="card">
    <div className='sub-card'>
      <div className='product-img'>
      <img src={cloudinaryImageId} alt={`${name} image`} />
      </div>
      <div className='food-description'>
      <h4>{name}</h4>
      <h6>Product ID: {id}</h6>
      <h6>Cuisines: {cuisines.join(", ")}</h6>
      <h6>SLA: {slaString}</h6>
      </div>
      </div>
  </Link>
);

export default ProductCard;
