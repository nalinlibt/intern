import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10.0 },
    { id: 2, name: 'Product B', price: 15.0 },
    { id: 3, name: 'Product C', price: 20.0 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} />
    </div>
  );
}

export default App;
