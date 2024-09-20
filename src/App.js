import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
      )
    );
  };

  const applyDiscount = (code) => {
    if (code === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      alert('Invalid coupon');
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total - (total * discount) / 100 + 100; // +100 shipping
  };

  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-6 text-center">Shopping Cart</h1>
        <ProductList addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          applyDiscount={applyDiscount}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
}

export default App;
