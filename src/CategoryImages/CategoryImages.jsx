// CategoryImages.js
import React from 'react';

function CategoryImages({ categories, products, setSelectedProduct }) {
  return (
    <ul className='container1'>
      {categories.map(category => {
        const product = products.find(product => product.category === category);
        return product ? (
          <li key={product.id} onClick={() => setSelectedProduct(product)}>
            <img src={product.thumbnail} alt={product.title} />
            <span>{product.title}</span>
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default CategoryImages;
