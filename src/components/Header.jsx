// src/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace the text with an actual image if you have one */}
        {/* <img src={logo} alt="Website Logo" height="40" />
         */}
         E-COMMERSE STORE
      </div>
      <div className="nav-items">
        <div className="nav-item">Man</div>
        <div className="nav-item">Women</div>
        <div className="nav-item">Electronics</div>
        <div className="nav-item">Cart</div>
      </div>
    </header>
  );
};

export default Header;
