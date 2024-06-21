import Card from "./Card";
import './Cards.css';
function Cards({products, category}) {

    function getProducts() {
        console.log(products);
        let arr = [];
        if (category === 'all') {
            arr = [...products];
            return arr;
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
                    <Card key={product.id} product ={product}/>
                ))
            }
        </div>
    )
}
export default Cards;