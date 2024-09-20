import React, { useState } from 'react';

function Cart({ cart, removeFromCart, updateQuantity, applyDiscount, calculateTotal }) {
  const [coupon, setCoupon] = useState('');

  const handleCoupon = () => {
    applyDiscount(coupon);
    setCoupon('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p>Price: {item.price} THB</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-300 px-2"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      className="bg-gray-300 px-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="border p-2 w-1/2 mr-4"
            />
            <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded" onClick={handleCoupon}>
              Apply Coupon
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: {calculateTotal()} THB</h3>
            <p className="text-sm text-gray-500">*Total includes 100 THB shipping</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
