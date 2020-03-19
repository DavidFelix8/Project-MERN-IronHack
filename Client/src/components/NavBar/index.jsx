import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.scss';
import { signOut } from '../../services/authentication';

const NavBar = props => {
  const handleSignOut = () => {
    signOut()
      .then(() => {
        props.updateUserInformation(null);
      })
      .catch(error => {
        console.log(error);
      });
  };
  //{JSON.stringify(props, null, 2)}
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Nome da APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {(props.user && (
            <Nav className="mr-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/my-account">{props.user.name}'s Account</Nav.Link>
              <button className="Navbar-SignOut" onClick={handleSignOut}>
                <span>Sign Out</span>
              </button>
            </Nav>
          )) || (
            <Nav>
              <Nav.Link href="/sign-in">Sign In</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
