import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/customize.css";

export default function Customize() {
  const { addToCart } = useCart();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [selectedCategory, setSelectedCategory] = useState("candles");
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const productConfig = {
    candles: {
      label: "Scented Candle",
      basePrice: 25,
      fields: [
        { name: "scent", label: "Choose Scent", type: "select", options: ["Lavender", "Vanilla Bean", "Sandalwood", "Rose", "Unscented"] },
        { name: "jarType", label: "Jar Style", type: "select", options: ["Matte Black", "Clear Glass", "Frosted White", "Gold Tin"] },
        { name: "waxType", label: "Wax Type", type: "select", options: ["Soy Wax", "Beeswax", "Coconut Wax"] },
        { name: "jarSize", label: "Size", type: "select", options: ["Standard (8oz)", "Large (14oz)", "Travel (4oz)"] },
        { name: "labelMsg", label: "Custom Label Text (Optional)", type: "text", placeholder: "e.g. Happy Birthday Mom" }
      ]
    },
    bathbombs: {
      label: "Bath Bomb",
      basePrice: 12,
      fields: [
        { name: "scent", label: "Scent Profile", type: "select", options: ["Citrus", "Floral", "Minty", "Sweet"] },
        { name: "color", label: "Color", type: "select", options: ["Pink", "Blue", "Purple", "Galaxy Mix", "Gold"] },
        { name: "shape", label: "Shape", type: "select", options: ["Sphere", "Heart", "Star", "Cloud"] },
        { name: "addIns", label: "Add-ins", type: "select", options: ["Rose Petals", "Glitter (Bio-degradable)", "None"] }
      ]
    },
    pajamas: {
      label: "Luxe Pajamas",
      basePrice: 65,
      fields: [
        { name: "fabric", label: "Fabric", type: "select", options: ["Silk Satin", "Organic Cotton", "Soft Flannel"] },
        { name: "color", label: "Color Theme", type: "select", options: ["Midnight Blue", "Blush Pink", "Classic White", "Emerald"] },
        { name: "size", label: "Size", type: "select", options: ["XS", "S", "M", "L", "XL", "XXL"] },
        { name: "embroidery", label: "Embroidered Name (+$5)", type: "text", placeholder: "Name on pocket..." }
      ]
    },
    skincare: {
      label: "Custom Skincare",
      basePrice: 45,
      fields: [
        { name: "prodType", label: "Product Type", type: "select", options: ["Moisturizer", "Face Wash", "Toner", "Serum"] },
        { name: "skinType", label: "Skin Profile", type: "select", options: ["Oily", "Dry", "Combination", "Sensitive", "Acne-Prone"] },
        { name: "container", label: "Container Type", type: "select", options: ["Pump Bottle", "Glass Jar", "Tube"] },
        { name: "extras", label: "Boosters", type: "select", options: ["Vitamin C", "Hyaluronic Acid", "Retinol", "None"] }
      ]
    },
    bouquets: {
      label: "Custom Bouquet",
      basePrice: 55,
      fields: [
        { name: "flowers", label: "Primary Flower", type: "select", options: ["Roses", "Lilies", "Sunflowers", "Peonies", "Mixed Wildflowers"] },
        { name: "wrapStyle", label: "Wrapping Paper", type: "select", options: ["Brown Kraft", "Pink Tissue", "Black Matte", "Newspaper Print"] },
        { name: "ribbon", label: "Ribbon Color", type: "select", options: ["Red", "White", "Gold", "Pink"] },
        { name: "note", label: "Card Message", type: "text", placeholder: "Write your note here..." }
      ]
    },
    facemasks: {
      label: "Clay Face Mask",
      basePrice: 20,
      fields: [
        { name: "maskType", label: "Mask Base", type: "select", options: ["Kaolin Clay", "Charcoal", "Bentonite", "Gel Base"] },
        { name: "concern", label: "Target Concern", type: "select", options: ["Brightening", "Detox", "Hydration", "Soothing"] },
        { name: "scent", label: "Scent", type: "select", options: ["Tea Tree", "Lavender", "Unscented", "Cucumber"] },
        { name: "size", label: "Jar Size", type: "select", options: ["50ml", "100ml"] }
      ]
    }
  };

  const currentConfig = productConfig[selectedCategory];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate that all required select fields are filled
  const validate = () => {
    const newErrors = {};
    currentConfig.fields.forEach((field) => {
      if (field.type === "select" && (!formValues[field.name] || formValues[field.name] === "")) {
        newErrors[field.name] = `Please select a ${field.label}.`;
      }
    });
    return newErrors;
  };

  const handleAddToCart = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const customItem = {
      id: `custom-${Date.now()}`,
      name: `Custom ${currentConfig.label}`,
      price: currentConfig.basePrice,
      img: "https://via.placeholder.com/150?text=Custom+Creation",
      customization: formValues,
      quantity: 1
    };

    addToCart(customItem);
    setToast(true);
    setTimeout(() => setToast(false), 2500);
    setFormValues({});
    setErrors({});
  };

  // Build a summary of selected options
  const selectedSummary = currentConfig.fields
    .filter((f) => formValues[f.name])
    .map((f) => ({ label: f.label, value: formValues[f.name] }));

  return (
    <div className="customize-container">

      {/* HEADER */}
      <header className="site-header">
        <div className="logo"><Link to="/">Bloom & You</Link></div>
        <nav className="site-nav">
          <Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link>
          <Link to="/products" className={isActive("/products") ? "active-link" : ""}>Products</Link>
          <Link to="/customize" className={isActive("/customize") ? "active-link nav-pill" : "nav-pill"}>Customize</Link>
          <Link to="/account" className={isActive("/account") ? "active-link" : ""}>Account</Link>
          <Link to="/cart" className={isActive("/cart") ? "active-link" : ""}>Cart</Link>
          <Link to="/contact" className={isActive("/contact") ? "active-link" : ""}>Contact</Link>
        </nav>
      </header>

      <div className="customize-wrapper">
        <h1 className="cust-title">Design Your Ritual</h1>
        <p className="cust-subtitle">Customize your essentials to match your unique needs.</p>

        {/* CATEGORY TABS */}
        <div className="cust-tabs" role="tablist" aria-label="Product categories">
          {Object.keys(productConfig).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={selectedCategory === key}
              className={`tab-btn ${selectedCategory === key ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(key);
                setFormValues({});
                setErrors({});
              }}
            >
              {productConfig[key].label}
            </button>
          ))}
        </div>

        <div className="cust-workspace-centered">
          <div className="cust-form-section">
            <h2 className="section-header">Customize Your {currentConfig.label}</h2>

            <div className="form-grid">
              {currentConfig.fields.map((field) => (
                <div key={field.name} className="form-group">
                  <label htmlFor={field.name}>
                    {field.label}
                    {field.type === "select" && <span className="required"> *</span>}
                  </label>

                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formValues[field.name] || ""}
                      onChange={handleInputChange}
                      className={`cust-input ${errors[field.name] ? "input-error" : ""}`}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    >
                      <option value="">-- Select Option --</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={formValues[field.name] || ""}
                      placeholder={field.placeholder}
                      onChange={handleInputChange}
                      className="cust-input"
                    />
                  )}

                  {errors[field.name] && (
                    <p className="error-msg" id={`${field.name}-error`} role="alert">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* SELECTION SUMMARY — shows what user has picked so far */}
            {selectedSummary.length > 0 && (
              <div className="selection-summary">
                <h3>Your Selections</h3>
                <ul>
                  {selectedSummary.map((s) => (
                    <li key={s.label}>
                      <span className="summary-label">{s.label}:</span> {s.value}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="price-tag">
              Base Price: ${currentConfig.basePrice}.00
            </div>

            <p className="required-note"><span className="required">*</span> Required fields must be selected before adding to cart.</p>

            <button
              className="btn-finish-custom"
              onClick={handleAddToCart}
              aria-label={`Add custom ${currentConfig.label} to cart`}
            >
              Add Custom Item to Cart
            </button>

          </div>
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="toast" role="alert">
          ✓ Your custom {currentConfig.label} has been added to the cart!
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-copyright">
          <span>© 2025 Bloom & You | Engineered for Your Wellness.</span>
        </div>
      </footer>

    </div>
  );
}