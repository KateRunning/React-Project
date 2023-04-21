import React from 'react';
import ProductCard from './ProductCard';

export default function HomePage({ productList }) {
  return (
    <div>
        { productList.map((product, i) => <ul key={i}><ProductCard product={product}/></ul>)}
    </div>
  )
}
