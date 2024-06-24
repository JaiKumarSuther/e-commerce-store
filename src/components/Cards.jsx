import { useState } from "react";
import Card from "./Card";
import './Cards.css';
function Cards({products, category}) {

    const [cart, setCart] = useState([]);

    function getProducts() {
        let arr = [];
        if (category === 'all') {
            arr = [...products];
            return arr;
        } else if(category === 'cart') {
            arr = [...cart];
        } else {
            products.forEach((item) => {
                if (item.category === category) {
                    arr.push(item);
                }
            })
        }

        return arr;
    }

    return (
        <div className="cards">
            {
                getProducts().map(product => (
                    <Card key={product.id} cart={cart} setCart={setCart} product ={product}/>
                ))
            }
        </div>
    )
}
export default Cards;