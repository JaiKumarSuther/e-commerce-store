import React from 'react';
import './EmptyCart.css';
import img from '../assets/emptycart.webp'

const EmptyCart = ({ onShopNow }) => (
  <div className="empty-cart">
    <img src={img} alt="Empty Cart" className="empty-cart-image" />
    <h2>Your Cart is Empty</h2>
    <p>Looks like you haven't added anything to your cart yet.</p>
    <button className="shop-now-button" onClick={onShopNow}>Shop Now</button>
  </div>
);

export default EmptyCart;
