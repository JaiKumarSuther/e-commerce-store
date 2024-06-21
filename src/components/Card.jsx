import React, { useState } from 'react';
import './Card.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Card = (props) => {

  let product = props.product;
  const [show, setShow] = useState(false);

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

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-details">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="description">
          {show ? product.description.toLowerCase() : `${product.description.toLowerCase().substring(0, 100)}...`}
          <button onClick={showHandler} className="toggle-description">
            {show ? ' show less' : ' show more'}
          </button>
        </p>
        <div className="card-rating">
          {renderStars(product.rating.rate)}
          <span> ({product.rating.count} reviews)</span>
        </div>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
