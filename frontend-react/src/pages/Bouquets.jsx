import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/category.css";

import b1 from "../assets/images/b1.jpeg";
import b2 from "../assets/images/b2.jpeg";
import b3 from "../assets/images/b3.jpeg";
import b4 from "../assets/images/b4.jpeg";
import b5 from "../assets/images/b5.jpeg";
import b6 from "../assets/images/b6.jpeg";

export default function Bouquets() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const items = [
    { id: "b1", name: "Pink Romance", price: 50, img: b1 },
    { id: "b2", name: "Spring Mix", price: 45, img: b2 },
    { id: "b3", name: "Rose Blush", price: 55, img: b3 },
    { id: "b4", name: "Peach Delight", price: 40, img: b4 },
    { id: "b5", name: "Peony Bunch", price: 60, img: b5 },
    { id: "b6", name: "Garden Fresh", price: 65, img: b6 },
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
        <h1 className="category-title">Bouquets</h1>
        <div className="cat-grid">
          {items.map(item => (
            <div key={item.id} className="cat-card">
              <div className="cat-img-placeholder">
                <img src={item.img} alt={`${item.name} flower bouquet`} />
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