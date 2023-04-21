import React from 'react';
import KnitAndGather from '../assets/knitandgathercircle.png';
import { Col, Image } from 'react-bootstrap'

export default function HomePage() {
  return (
    <Col className="d-flex justify-content-center m-4">
      <Image
        img src={KnitAndGather} alt="cur"
        width='25%'
      />
    </Col>
  )
}


