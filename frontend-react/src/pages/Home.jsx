
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/home.css";

import pj1 from "../assets/images/pj1.jpeg";
import bb1 from "../assets/images/bb1.jpeg";
import sk1 from "../assets/images/sk1.jpeg";
import sc1 from "../assets/images/sc1.jpeg";
import b1 from "../assets/images/b1.jpeg";
import fm1 from "../assets/images/fm1.jpeg";
import sc2 from "../assets/images/sc2.jpeg";
import sk2 from "../assets/images/sk2.jpeg";
import fm2 from "../assets/images/fm2.jpeg";
import pj2 from "../assets/images/pj2.jpeg";
import os1 from "../assets/images/os1.png";
import os2 from "../assets/images/os2.png";

export default function Home() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const products = [
    { id: 1, name: "CLOUD COMFORT PJS", subtitle: "Glance soon", btn: "CUSTOMIZE", img: pj1, alt: "Cloud Comfort Pajama Set" },
    { id: 2, name: "FIZZ & DREAM", subtitle: "make it yours!", btn: "CUSTOMIZE", img: bb1, alt: "Fizz and Dream Bath Bomb" },
    { id: 3, name: "GLOW POTIONS", subtitle: "make a you!", btn: "CUSTOMIZE", img: sk1, alt: "Glow Potions Skincare Set" },
    { id: 4, name: "ZEN GARDEN", subtitle: "mix & match", btn: "CUSTOMIZE", img: sc1, alt: "Zen Garden Scented Candle" },
    { id: 5, name: "BESPOKE BLOOMS", subtitle: "ACCESSORIES", btn: "CUSTOMIZE", img: b1, alt: "Bespoke Blooms Flower Bouquet" },
    { id: 6, name: "FACE SHEET MASKS", subtitle: "", btn: "CUSTOMIZE", img: fm1, alt: "Face Sheet Masks" },
  ];

  const sellingProducts = [
  { id: 101, name: "Petal Bloom Candle", price: "$25.00", img: sc2, alt: "Petal Bloom scented candle best seller", path: "/candles" },
  { id: 102, name: "Glow Serum", price: "$30.00", img: sk2, alt: "Glow serum skincare best seller", path: "/skincare" },
  { id: 103, name: "Lavender Mist Mask", price: "$15.00", img: fm2, alt: "Lavender mist face mask best seller", path: "/facemasks" },
  { id: 104, name: "Silk Pajama Set", price: "$85.00", img: pj2, alt: "Silk pajama set best seller", path: "/pajamas" },
];

  return (
    <div className="home-container">

      <header className="site-header">
        <div className="logo"><Link to="/">Bloom & You</Link></div>
        <nav className="site-nav">
          <Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link>
          <Link to="/products" className={isActive("/products") ? "active-link" : ""}>Products</Link>
          <Link to="/customize" className={isActive("/customize") ? "active-link" : ""}>Customize</Link>
          <Link to="/account" className={isActive("/account") ? "active-link" : ""}>Account</Link>
          <Link to="/cart" className={isActive("/cart") ? "active-link" : ""}>Cart</Link>
          <Link to="/contact" className={isActive("/contact") ? "active-link" : ""}>Contact</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content-box">
          <h1 className="hero-title">Find Your Bloom</h1>
          <p className="hero-desc">
            Explore our customizable self-care collection. Click a category to view
            ready-to-buy options, or customize directly!
          </p>
          <Link to="/products" className="btn-hero-shop">Shop Now</Link>
        </div>
      </section>

      <section className="product-grid-section">
        <h2 className="section-heading">Our Collections</h2>
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-box">
                <img src={product.img} alt={product.alt} />
              </div>
              <div className="card-details">
                <h3>{product.name}</h3>
                {product.subtitle && <p className="subtitle">{product.subtitle}</p>}
                <Link to="/customize" className="btn-customize-black">
                  {product.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="our-story-wrapper">
        <div className="our-story-grid">
          <div className="story-pink-box">
            <div className="story-text-center">
              <h2 className="story-heading">our story</h2>
              <p className="story-text">
                Bloom & You was born from a love of self-care and personalization.
                We believe every ritual should feel uniquely yours.
              </p>
            </div>
          </div>
          <div className="story-gray-box">
            <img src={os1} alt="Bloom and You brand story image one" />
          </div>
          <div className="story-gray-box">
            <img src={os2} alt="Bloom and You brand story image two" />
          </div>
        </div>
      </section>

      <section className="most-selling-section">
        <h2>Most Selling Products</h2>
        <div className="selling-grid">
          {sellingProducts.map((item) => (
            <Link key={item.id} to={item.path} className="selling-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="selling-img-placeholder">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="selling-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </Link>

          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-contact">
          <h3>contact us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/bbloomandyou" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://pin.it/6PPIfHbEC" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" title="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href="mailto:bloomandyou.social@gmail.com" aria-label="Email" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/bloom-and-you/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://wa.me/923152795678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <span>© 2025 Bloom & You | Privacy Policy | Terms of Service</span>
          <span>Handcrafted in Pakistan. Engineered for Your Wellness.</span>
        </div>
      </footer>

    </div>
  );
}