
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ProductPage from './components/ProductPage.jsx';
import CartPage from './components/CartPage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx';


function App() {
  // Cart state: array of {product, quantity}
  const [cart, setCart] = useState([]);

  // Add to cart handler
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  // Remove from cart handler
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Update quantity handler
  const updateCartQuantity = (productId, quantity) => {
    setCart(prev => prev.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <Router>
      
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;
