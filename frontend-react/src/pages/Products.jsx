import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/products.css";

import sc1 from "../assets/images/sc1.jpeg";
import bb1 from "../assets/images/bb1.jpeg";
import pj1 from "../assets/images/pj1.jpeg";
import sk1 from "../assets/images/sk1.jpeg";
import b1 from "../assets/images/b1.jpeg";
import fm1 from "../assets/images/fm1.jpeg";

export default function Products() {
  const products = [
    { id: 1, name: "Scented Candles", path: "/candles", categoryKey: "candles", desc: "Hand-poured Candles", img: sc1 },
    { id: 2, name: "Bath Bombs", path: "/bath-bombs", categoryKey: "bathbombs", desc: "Artisan Bath Rituals", img: bb1 },
    { id: 3, name: "Pajamas", path: "/pajamas", categoryKey: "pajamas", desc: "Luxe Loungewear", img: pj1 },
    { id: 4, name: "Skincare", path: "/skincare", categoryKey: "skincare", desc: "Skin Health Sets", img: sk1 },
    { id: 5, name: "Bouquets", path: "/bouquets", categoryKey: "bouquets", desc: "Fresh Arrangements", img: b1 },
    { id: 6, name: "Face Masks", path: "/facemasks", categoryKey: "facemasks", desc: "Targeted Treatments", img: fm1 },
  ];

  return (
    <div className="products-container">
      <Navbar />
      <div className="products-wrapper">
        <h1 className="products-title">FIND YOUR BLOOM</h1>
        <p className="products-subtitle">
          SELECT A CATEGORY TO SHOP READY RITUALS, <br />
          OR CHOOSE "CUSTOMIZE" TO DESIGN FROM SCRATCH.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="main-product-card">
              <div className="card-img-wrapper">
                <Link to={product.path}>
                  <img src={product.img} alt={`${product.name} category`} />
                </Link>
              </div>
              <div className="card-details">
                <Link to={product.path} className="btn-product-name">
                  Shop {product.name}
                </Link>
                <p className="product-desc">{product.desc}</p>
                <Link to="/customize" state={{ category: product.categoryKey }} className="btn-customize-pill">
                  Customize
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="site-footer">
        <div className="footer-copyright">
          <span>© 2025 Bloom & You | Handcrafted for Your Wellness.</span>
        </div>
      </footer>
    </div>
  );
}