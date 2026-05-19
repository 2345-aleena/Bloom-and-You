import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/category.css";

import fm1 from "../assets/images/fm1.jpeg";
import fm2 from "../assets/images/fm2.jpeg";
import fm3 from "../assets/images/fm3.jpeg";
import fm4 from "../assets/images/fm4.jpeg";
import fm5 from "../assets/images/fm5.jpeg";
import fm6 from "../assets/images/fm6.jpeg";

export default function FaceMasks() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const items = [
    { id: "fm1", name: "Rose Glow", price: 10, img: fm1 },
    { id: "fm2", name: "Lavender Mist", price: 8, img: fm2 },
    { id: "fm3", name: "Lavender Reset", price: 12, img: fm3 },
    { id: "fm4", name: "Lavender Renew", price: 9, img: fm4 },
    { id: "fm5", name: "Lavender Calm", price: 11, img: fm5 },
    { id: "fm6", name: "Peach Glow", price: 8, img: fm6 },
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
        <h1 className="category-title">Face Masks</h1>
        <div className="cat-grid">
          {items.map(item => (
            <div key={item.id} className="cat-card">
              <div className="cat-img-placeholder">
                <img src={item.img} alt={`${item.name} face mask`} />
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