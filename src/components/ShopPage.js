import React from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

export default function HomePage({ productList }) {
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