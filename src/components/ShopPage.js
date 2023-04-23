import React from 'react';
import ProductCard from './ProductCard';
import ProductDetailsPage from './ProductDetailsPage';
import { Col, Container, Row } from 'react-bootstrap';
import { PRODUCT_DATA } from './ProductData';

export default function HomePage({ props, productList }) {
    return (
        
        <Container>
            <Row className='mt-4'>
                {productList.map((product, i) => 
                <Col key={i}><ProductCard product={product} />
                </Col>)}
            </Row>
        </Container>
    )
}