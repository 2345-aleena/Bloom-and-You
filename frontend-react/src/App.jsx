import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Customize from './pages/Customize';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import ContactPage from './pages/ContactPage';

// Import New Pages
import ScentedCandles from './pages/ScentedCandles';
import BathBombs from './pages/BathBombs';
import Pajamas from './pages/Pajamas';
import Skincare from './pages/Skincare';
import Bouquets from './pages/Bouquets';
import FaceMasks from './pages/FaceMasks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* New Product Category Routes */}
      <Route path="/candles" element={<ScentedCandles />} />
      <Route path="/bath-bombs" element={<BathBombs />} />
      <Route path="/pajamas" element={<Pajamas />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/bouquets" element={<Bouquets />} />
      <Route path="/facemasks" element={<FaceMasks />} />
      
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;