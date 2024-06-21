import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        let data = await response.json();
        setProducts(data);
      } else {
        throw new Error('there is a problem in connection');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <Header products = {products}/>
      <Cards products = {products}/>
    </>
  )
}

export default App
