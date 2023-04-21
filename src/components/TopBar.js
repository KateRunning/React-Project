import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <Navbar className="navbar navbar-light bg-warning" expand="lg" >
      <Container >
        <Navbar.Brand as={Link} to='/'>Knit & Gather</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
            <Nav.Link as={Link} to='/classes'>Classes</Nav.Link>
            <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
            
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Clases</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/cart'><FontAwesomeIcon className="ms-2 me-2" icon={faBasketShopping} />Cart</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
