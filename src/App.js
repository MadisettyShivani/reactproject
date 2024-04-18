// App.js
import React, { useEffect, useState } from 'react';

import CategoryImages from './CategoryImages/CategoryImages';
import ProductDetails from './ProductDetails/ProductDetails';

function App() {
  const [categories, setCategories] = useState([
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration'
  ]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  let totalSum = products.length;

  return (
    <div>
      <h1>Category Counts</h1>
      
        <CategoryImages categories={categories} products={products} setSelectedProduct={setSelectedProduct} />
    
      <h2>Total: {totalSum}</h2>
      {selectedProduct && (
        <div>
          <h2>Selected Product Details</h2>
          <ProductDetails {...selectedProduct} />
        </div>
      )}
    </div>
  );
}

export default App;

