import React from 'react';
import ProductCard from './ProductCard';

export default function HomePage({ productList }) {
  return (
    <div>
        { productList.map((product, i) => <li key={i}><ProductCard product={product}/></li>)}
    </div>
  )
}
