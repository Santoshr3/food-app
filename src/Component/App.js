import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { ProductList } from './ProductList';
import Search from './Search'; // Import the Search component

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = ProductList.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  
  return (
    <div className='content'>
    <div className='hero-section'>
      <div className='container'>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
    </div>
    <div className="App">
      <div className="card_wrapper container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={`${product.name}-${product.id}`}
            {...product}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
