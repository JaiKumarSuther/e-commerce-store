import Card from "./Card";
import './Cards.css';
function Cards({products}) {
    return (
        <div className="cards">
            {
                products.map(product => (
                    <Card key={product.id} product ={product}/>
                ))
            }
        </div>
    )
}
export default Cards;