import React from 'react';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function CartBadge({ cart }) {
    if (cart.length === 0)
    {
       return <></>
    }
    return (
        <>
                <Badge bg="success me-2" >{cart.length}</Badge>
                <span className="visually-hidden"></span>
 
        </>
    )
}