import React from 'react';

function ProductDetails({ title, price, rating, discountPercentage }) {
    console.log(discountPercentage)
    console.log(title)
    const discountedPrice = price *(discountPercentage / 100)
    const totalPrice = (price - (price * (discountPercentage / 100)));
    console.log(discountedPrice)
  return (
    
    <div>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <p>discountPercentage%: {discountPercentage}</p>
      <p>Discount: {discountedPrice}</p>
      <p>total Price: {totalPrice}</p>
    </div>
  );
}

export default ProductDetails;


