import React from 'react';
import {Button, Col, Row, Stack} from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function SearchResults({ productList }) {
  
  const searchQuery = "toad"

  const SearchResults = productList.filter(product => product.title.toLowerCase().includes(searchQuery));
  
  return (
    <>
    <Row>
    { SearchResults.map(product => <ProductCard product={product.title} key={product.id}/>)}
    </Row>
    </>
  )
}
