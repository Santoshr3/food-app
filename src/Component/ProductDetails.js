// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductList } from './ProductList';

const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductList.find(p => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { cloudinaryImageId, name, cuisines, slaString, productdescription } = product;

  return (
    <div className="product-detail-page container content">
      <div className='sub-deatils-card'>
      <div className='product-details-img'>
      <img src={cloudinaryImageId} alt={`${name} image`} />
      </div>
      <div className='food-description-details'>
      <h2>{name}</h2>
      <h3>Product ID: {id}</h3>
      <h4>Cuisines: {cuisines.join(", ")}</h4>
      <h4>SLA: {slaString}</h4>
      <p>Description: {productdescription}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
