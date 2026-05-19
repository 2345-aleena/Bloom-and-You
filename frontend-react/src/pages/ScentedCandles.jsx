import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/category.css";

import sc1 from "../assets/images/sc1.jpeg";
import sc2 from "../assets/images/sc2.jpeg";
import sc3 from "../assets/images/sc3.jpeg";
import sc4 from "../assets/images/sc4.jpeg";
import sc5 from "../assets/images/sc5.jpeg";
import sc6 from "../assets/images/sc6.jpeg";

export default function ScentedCandles() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const items = [
    { id: "sc1", name: "Lavender Dream", price: 25, img: sc1 },
    { id: "sc2", name: "Vanilla Bean", price: 22, img: sc2 },
    { id: "sc3", name: "Rose Water", price: 28, img: sc3 },
    { id: "sc4", name: "Ocean Mist", price: 24, img: sc4 },
    { id: "sc5", name: "Sandalwood", price: 30, img: sc5 },
    { id: "sc6", name: "Midnight Musk", price: 26, img: sc6 },
  ];

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1, size: "Standard" });
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="category-container">
      <Navbar />
      <div className="category-wrapper">
        <h1 className="category-title">Scented Candles</h1>
        <div className="cat-grid">
          {items.map(item => (
            <div key={item.id} className="cat-card">
              <div className="cat-img-placeholder">
                <img src={item.img} alt={`${item.name} scented candle`} />
              </div>
              <h3 className="cat-name">{item.name}</h3>
              <p className="cat-price">${item.price}</p>
              <button
                className="btn-add-specific"
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {toast && <div className="toast" role="alert">✓ Item added to cart!</div>}
    </div>
  );
}