import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 300, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 250, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: 400, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: 350, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', price: 450, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', price: 500, image: 'https://via.placeholder.com/150' }
  ];
  

 

  function ProductList({ addToCart }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">Price: {product.price} THB</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  
