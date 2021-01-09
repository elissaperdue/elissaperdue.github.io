
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const menunav = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
        <h1>NAVNAVBAR</h1>
    </div>


  );
};


export default menunav;

