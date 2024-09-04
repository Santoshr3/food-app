import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import { ProductList } from './ProductList'; // Ensure ProductList is correctly exported

const App = () => (
  <div className="App">
    <div className="card_wrapper">
      {ProductList.map((product) => (
        <ProductCard
          key={`${product.name}-${product.id}`}
          {...product}
        />
      ))}
    </div>
  </div>
);

export default App;
