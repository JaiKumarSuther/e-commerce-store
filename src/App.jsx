import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Loader from './components/Loader';
import Error from './components/Error';
import {data} from './data';

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(data[0].title);

  let fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        let data = await response.json();
        setProducts(data);
      } else {
        throw new Error('There is a problem with the connection');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header data={data} setCategory={setCategory} category={category}/>
      {
        loading ? <Loader /> : ((error) ? <Error error={error} /> : <Cards products={products} category={category} />)
      }
    </>
  );
}

export default App;
