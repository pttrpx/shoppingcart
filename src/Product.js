import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-7 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="h-35 w-full object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.price} ฿</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
