import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export const NavTop = () => {
  return (

  <Navbar  bg="light" expand="lg">
    <Container id="NavBack" fluid>
      <Navbar.Brand className="logo" href="#"> <img id="logo" src={logo}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" id="student" >Student</Nav.Link>
          <Nav.Link href="#action2" id="professor">Professor</Nav.Link>
          <NavDropdown title="Categories" id="categories">
            <NavDropdown.Item href="#action3">Chef</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Style</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Country </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Button variant="outline-success">Cart</Button>
          <Button variant="outline-success">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
</Navbar>
    
   
  );
};
