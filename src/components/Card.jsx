import React, { useState, useEffect } from 'react';
import './Card.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { toast } from "react-toastify";

const Card = ({ product, cart, setCart }) => {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    setAdd(cart.includes(product));
  }, [cart, product]);

  const renderStars = (rate) => {
    const roundedRate = Math.round(rate * 2) / 2;
    const fullStars = Math.floor(roundedRate);
    const halfStar = roundedRate % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}
        {halfStar && <FaStarHalfAlt key="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </>
    );
  };

  const cartHandler = () => {
    const newCart = add
      ? cart.filter((item) => item !== product)
      : [...cart, product];

    setCart(newCart);
    toast[add ? 'warn' : 'success'](add ? "Removed successfully" : "Added successfully");
    setAdd(!add);
  };

  const showHandler = () => setShow(!show);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-details">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="description">
          {product.description.length <= 90 ? product.description : show ? product.description.toLowerCase() : `${product.description.toLowerCase().substring(0, 100)}...`}
          {product.description.length > 90 && (
            <button onClick={showHandler} className="toggle-description">
              {show ? 'Show less' : 'Show more'}
            </button>
          )}
        </p>
        <div className="card-rating">
          {renderStars(product.rating.rate)}
          <span> ({product.rating.count} reviews)</span>
        </div>
        <button
          className="add-to-cart"
          onClick={cartHandler}
          style={{ backgroundColor: add ? '#ababab' : '#007bff' }}
        >
          {add ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Card;
