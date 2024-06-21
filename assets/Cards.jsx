import React from 'react'
import Card from './Card'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='cards'>
        {
            props.products.map((product) => (
                <Card key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Cards
