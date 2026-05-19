import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="main-nav">
      <div className="brand">Bloom & You</div>
      <div className="nav-links">
        <Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link>
        <Link to="/products" className={isActive("/products") ? "active-link" : ""}>Products</Link>
        <Link to="/customize" className={isActive("/customize") ? "active-link" : ""}>Customize</Link>
        <Link to="/account" className={isActive("/account") ? "active-link" : ""}>Account</Link>
        <Link to="/cart" className={isActive("/cart") ? "active-link" : ""}>Cart</Link>
      </div>
    </nav>
  );
}