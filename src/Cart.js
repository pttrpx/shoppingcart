import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [coupon, setCoupon] = useState('');
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = coupon === 'DISCOUNT10' ? total * 0.1 : 0;
  const shippingCost = 100;

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <p>{item.name}</p>
          <div className="flex items-center">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)} className="ml-4 bg-red-500 text-white px-2 rounded">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <p>Discount: {discount} ฿</p>
        <p>Shipping Cost: {shippingCost} ฿</p>
        <p>Total: {total - discount + shippingCost} ฿</p>
      </div>
    </div>
  );
};

export default Cart;
