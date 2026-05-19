import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/category.css";

import bb1 from "../assets/images/bb1.jpeg";
import bb2 from "../assets/images/bb2.jpeg";
import bb3 from "../assets/images/bb3.jpeg";
import bb4 from "../assets/images/bb4.jpeg";
import bb5 from "../assets/images/bb5.jpeg";
import bb6 from "../assets/images/bb6.jpeg";

export default function BathBombs() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const items = [
    { id: "bb1", name: "Rose Soak", price: 12, img: bb1 },
    { id: "bb2", name: "Fizz Berry", price: 14, img: bb2 },
    { id: "bb3", name: "Lavender Calm", price: 15, img: bb3 },
    { id: "bb4", name: "Citrus Pop", price: 10, img: bb4 },
    { id: "bb5", name: "Herbal Soak", price: 13, img: bb5 },
    { id: "bb6", name: "Herbal Green", price: 11, img: bb6 },
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
        <h1 className="category-title">Bath Bombs</h1>
        <div className="cat-grid">
          {items.map(item => (
            <div key={item.id} className="cat-card">
              <div className="cat-img-placeholder">
                <img src={item.img} alt={`${item.name} bath bomb`} />
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