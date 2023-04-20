import React from 'react';
import Toad from '../assets/toad.jpg';
import { Row, Col, Button, onClick } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.css';

export default function ProductDetailsPage({ productList, addToCart }) {
    
    let { productId } = useParams()
    productId = parseInt(productId)

    const product = productList.find(p => p.id === productId)

    return (
        <Row>
            <Col md="4">
                <img src={Toad} className='productImage' />
                <h4>{product.title}</h4>
                <p>Made from birch. Check your knitting needle size from US 00 - 17</p>
                <h5>{product.price}</h5>
                <Button variant="outline-primary"
                onClick={() => addToCart(product) }

              > 
                Add to Cart</Button>
            </Col>
        </Row>
    )
}
