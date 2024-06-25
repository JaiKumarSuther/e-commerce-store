import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a leading e-commerce store providing top quality products at unbeatable prices.</p>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://web.facebook.com/profile.php?id=100041137999971" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/JaiKumarSuther" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://instagram.com/iamjaisuthar" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/jai-kumar-7462a1260/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-COMMERCE STORE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
