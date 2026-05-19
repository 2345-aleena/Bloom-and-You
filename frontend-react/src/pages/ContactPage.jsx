import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/home.css";
import "../styles/contact.css";

export default function ContactPage() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  return (
    <div className="home-container">

      {/* HEADER */}
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

      {/* CONTACT HERO BANNER */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you — questions, custom requests, or just a hello!</p>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-body">

        {/* LEFT — Info cards */}
        <div className="contact-info-col">
          <div className="contact-info-card">
            <span className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <div>
              <h4>Email Us</h4>
              <p>bloomandyou.social@gmail.com</p>
            </div>
          </div>
          <div className="contact-info-card">
            <span className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </span>
            <div>
              <h4>WhatsApp</h4>
              <p>+92 315 2795678</p>
            </div>
          </div>
          <div className="contact-info-card">
            <span className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <h4>Location</h4>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-socials">
            <h4>Follow Us</h4>
            <div className="contact-social-row">
              <a href="https://www.instagram.com/bbloomandyou" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="social-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
              <a href="https://pin.it/6PPIfHbEC" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" title="Pinterest" className="social-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                Pinterest
              </a>
              <a href="https://www.linkedin.com/company/bloom-and-you/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="social-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success" role="alert">
              <div className="success-check">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn-send-another">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form-styled">
              <h2 className="form-title">Send a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                  placeholder="Your full name"
                />
                {errors.name && <p className="error-msg" role="alert">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="error-msg" role="alert">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                  placeholder="Write your message here..."
                  rows={5}
                />
                {errors.message && <p className="error-msg" role="alert">{errors.message}</p>}
              </div>

              <p className="required-note"><span className="required">*</span> Required fields</p>

              <button type="submit" className="btn-contact-submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-copyright">
          <span>© 2025 Bloom & You | Privacy Policy | Terms of Service</span>
          <span>Handcrafted in Pakistan. Engineered for Your Wellness.</span>
        </div>
      </footer>

    </div>
  );
}