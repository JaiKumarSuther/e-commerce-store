import { useState } from "react";
import Card from "./Card";
import EmptyCart from "./EmptyCart";
import './Cards.css';

function Cards({ products, category, setCategory }) {
  const [cart, setCart] = useState([]);

  function getProducts() {
    if (category === 'all') {
      return products; // No need to spread products, it's already an array
    } else if (category === 'cart') {
      return cart;
    } else {
      return products.filter(item => item.category === category);
    }
  }

  const productsToDisplay = getProducts();

  const handleShopNow = () => {
    setCategory('all');
  };

  return (
    <div className="cards">
      {category === 'cart' && cart.length === 0 ? (
        <EmptyCart onShopNow={handleShopNow} />
      ) : (
        productsToDisplay.map(product => (
          <Card key={product.id} cart={cart} setCart={setCart} product={product} />
        ))
      )}
    </div>
  );
}

export default Cards;
