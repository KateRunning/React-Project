import React, { useState }  from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Toad from '../assets/toad.jpg';
import Yarn from '../assets/yarn-ball.jpg';
import styles from './ProductDetails.css';


export default function ProductCard({ id, product}) {
    
// const handleDelete = () => {
//     removeFromCart(id);
// }
    // let { productId } = useParams()
    // productId = parseInt(productId)

    // const product = newCartItem.find(p => p.id === productId)
    
    return (
        <Link to={"/product/" + product.id} className="text-reset text-decoration-none">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Toad} className='productImage' />
                <Card.Body>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                    {/* <p>Is it Free? {product.paid ? "No" : "Yes"}</p> */}
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button variant="success">Details</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
