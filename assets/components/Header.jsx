// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace the text with an actual image if you have one */}
        <img src="./" alt="Website Logo" height="40" />
      </div>
      <div className="nav-items">
        <div className="nav-item">Man</div>
        <div className="nav-item">Women</div>
        <div className="nav-item">Electronics</div>
        <div className="nav-item cart-icon">Cart</div>
      </div>
    </header>
  );
};

export default Header;
