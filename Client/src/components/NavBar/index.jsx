import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap/Navbar';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Nome da APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/private">My Account</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/sign-in">Log In</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
