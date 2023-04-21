import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function ShoppingCart({ cart, product, removeFromCart }) {
  return (
    <div>
        { cart.map((product, i) => <ul key={i}><ProductCard product={product}/>
        <Button variant="outline-danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
        </ul>)}
        <>
        {/* <Button variant="outline-danger" onClick={() => removeFromCart(product.id)}>Remove</Button> */}
        {/* { cart.map((product, id) => (
                <ul className="list" key={id}>

                    <Button variant="outline-danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </ul>
            ))} */}
        </>
    </div>
  )
}
