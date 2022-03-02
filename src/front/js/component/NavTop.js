import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/InputGroup";

export const NavTop = () => {
  return (
    <Navbar id="Wrapper" className="w3-row" bg="light" expand="lg">
      <Container id="NavBack" fluid>
        <Navbar.Brand className="Brand w3-col m1" href="#">
          {" "}
          <img id="logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav id="links" className="me-auto my-2 my-lg-0 w3-col " navbarScroll>
            <Nav.Link className="m2" href="#action1" id="student">
              Student
            </Nav.Link>
            <Nav.Link className="w3-col m4" href="#action2" id="professor">
              Professor
            </Nav.Link>
            <NavDropdown
              className="w3-col m5"
              title="Categories"
              id="categories"
            >
              <NavDropdown.Item href="#action3">Chef</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Style</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Country </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form id="Search" className="d-flex w3-col m6">
            <Input
              id="Sbar"
              className="Form-Control"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              id="searchb"
              className="SButton w3-col m7"
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
          <Button id="cartb" className="w3-col m8" variant="outline-success">
            Cart
          </Button>
          <Button id="loginb" className="w3-col m9" variant="outline-success">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
