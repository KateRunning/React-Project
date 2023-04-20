import React from 'react';
import { Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function ShoppingCart({ cart }) {
  return (
    <div>
        { cart.map((product, i) => <li key={i}><ProductCard product={product}/></li>)}
        
    </div>
  )
}
