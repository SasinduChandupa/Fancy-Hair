import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderContent.css";

const HeaderContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="header-title">Fancy Hair</h1>

      {/* Hamburger Menu Button for Mobile */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Navigation Menu */}
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/gallery" className="header-link">Gallery</Link>
        <Link to="/shopping" className="header-link">Shopping</Link>
      </nav>

      <p className="header-phone">+94 915 628 303</p>
    </header>
  );
};

export default HeaderContent;
