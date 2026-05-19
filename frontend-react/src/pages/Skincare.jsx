import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/category.css";

import sk1 from "../assets/images/sk1.jpeg";
import sk2 from "../assets/images/sk2.jpeg";
import sk3 from "../assets/images/sk3.jpeg";
import sk4 from "../assets/images/sk4.jpeg";
import sk5 from "../assets/images/sk5.jpeg";
import sk6 from "../assets/images/sk6.jpeg";

export default function Skincare() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const items = [
    { id: "sk1", name: "Glow Serum", price: 45, img: sk1 },
    { id: "sk2", name: "Hydrating Mist", price: 25, img: sk2 },
    { id: "sk3", name: "Night Cream", price: 55, img: sk3 },
    { id: "sk4", name: "Eye Gel", price: 35, img: sk4 },
    { id: "sk5", name: "Clay Cleanser", price: 30, img: sk5 },
    { id: "sk6", name: "Lip Balm", price: 15, img: sk6 },
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
        <h1 className="category-title">Skincare</h1>
        <div className="cat-grid">
          {items.map(item => (
            <div key={item.id} className="cat-card">
              <div className="cat-img-placeholder">
                <img src={item.img} alt={`${item.name} skincare product`} />
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