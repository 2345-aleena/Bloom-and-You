import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/checkout.css";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error msg

  // Form State
  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    address: "", 
    city: "", 
    zip: "", 
    cardNum: "", 
    expiry: "", 
    cvv: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // 1. VALIDATION LOGIC
    // Check if any value in formData is empty or just whitespace
    const isEmpty = Object.values(formData).some(value => value.trim() === "");

    if (isEmpty) {
      setErrorMessage("Please fill in all shipping and payment details.");
      window.scrollTo(0, 0); // Scroll to top to see inputs (optional)
      return; // STOP HERE
    }

    // 2. PROCESS ORDER (Only runs if validation passes)
    setIsProcessing(true);

    // Simulate Network Request (2 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart(); 
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <header className="site-header">
           <div className="logo"><Link to="/">Bloom & You</Link></div>
        </header>

        <div className="success-container">
          <h1 className="success-title">Thank You, {formData.firstName}!</h1>
          <p>Your order has been placed successfully.</p>
          <p>Confirmation sent to: <strong>{formData.email}</strong></p>
          <br />
          <Link to="/products" className="btn-place-order" style={{display: 'inline-block', maxWidth: '300px', textDecoration: 'none'}}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      {/* HEADER */}
      <header className="site-header">
        <div className="logo"><Link to="/">Bloom & You</Link></div>
        <nav className="site-nav">
          <Link to="/cart">Return to Cart</Link>
        </nav>
      </header>

      <div className="checkout-wrapper">
        
        {/* LEFT: INPUT FORMS */}
        <form className="checkout-forms">
          
          <h2 className="checkout-section-title">Shipping Information</h2>
          <div className="form-row">
            <div className="checkout-group">
              <label className="checkout-label">First Name</label>
              <input 
                name="firstName" 
                type="text" 
                className="checkout-input" 
                onChange={handleChange} 
                value={formData.firstName}
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label">Last Name</label>
              <input 
                name="lastName" 
                type="text" 
                className="checkout-input" 
                onChange={handleChange} 
                value={formData.lastName}
              />
            </div>
          </div>

          <div className="checkout-group">
            <label className="checkout-label">Email</label>
            <input 
              name="email" 
              type="email" 
              className="checkout-input" 
              onChange={handleChange} 
              value={formData.email}
            />
          </div>

          <div className="checkout-group">
            <label className="checkout-label">Address</label>
            <input 
              name="address" 
              type="text" 
              className="checkout-input" 
              onChange={handleChange} 
              value={formData.address}
            />
          </div>

          <div className="form-row">
            <div className="checkout-group">
              <label className="checkout-label">City</label>
              <input 
                name="city" 
                type="text" 
                className="checkout-input" 
                onChange={handleChange} 
                value={formData.city}
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label">Zip Code</label>
              <input 
                name="zip" 
                type="text" 
                className="checkout-input" 
                onChange={handleChange} 
                value={formData.zip}
              />
            </div>
          </div>

          <h2 className="checkout-section-title">Payment Details</h2>
          <div className="checkout-group">
            <label className="checkout-label">Card Number</label>
            <input 
              name="cardNum" 
              type="text" 
              placeholder="0000 0000 0000 0000" 
              className="checkout-input" 
              maxLength="19" 
              onChange={handleChange} 
              value={formData.cardNum}
            />
          </div>

          <div className="form-row">
            <div className="checkout-group">
              <label className="checkout-label">Expiry (MM/YY)</label>
              <input 
                name="expiry" 
                type="text" 
                placeholder="MM/YY" 
                className="checkout-input" 
                maxLength="5" 
                onChange={handleChange} 
                value={formData.expiry}
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label">CVV</label>
              <input 
                name="cvv" 
                type="text" 
                placeholder="123" 
                className="checkout-input" 
                maxLength="3" 
                onChange={handleChange} 
                value={formData.cvv}
              />
            </div>
          </div>

        </form>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="checkout-summary">
          <h3 className="summary-title">Order Summary</h3>
          
          <div className="summary-items">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <div>
                  <div className="summary-item-name">{item.name}</div>
                  <div className="summary-item-meta">Qty: {item.quantity} | Size: {item.size}</div>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="cost-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cost-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cost-row total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          {/* ERROR MESSAGE DISPLAY */}
          {errorMessage && (
            <div style={{ color: '#D32F2F', fontSize: '0.9rem', marginTop: '15px', fontWeight: '600', textAlign: 'center' }}>
              {errorMessage}
            </div>
          )}

          <button 
            type="button" // Type button to prevent default submission, handled by onClick
            className="btn-place-order" 
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-copyright" style={{justifyContent: 'center'}}>
          <span>© 2025 Bloom & You | Secure Checkout</span>
        </div>
      </footer>
    </div>
  );
}