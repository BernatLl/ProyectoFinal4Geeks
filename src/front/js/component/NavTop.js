import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NavTop = () => {
  return (
    <div className=" wraper ">
      <Navbar className="topnav row grid-container" bg="light" expand="lg">
        <Container fluid className="navcontainer col-12 ">
          <Navbar.Brand grid-item href="#">
            <img className="logo col-11" src={logo}></img>
          </Navbar.Brand>

          <Nav.Link className="student col" href="#action1 grid-item">
            Student
          </Nav.Link>
          <Nav.Link className="professor col grid-item" href="#action2">
            Professor
          </Nav.Link>
          <NavDropdown title="Categories" className="categories col grid-item">
            <NavDropdown.Item href="#action3">Country</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Style</NavDropdown.Item>

            <NavDropdown.Item href="#action5">Chef</NavDropdown.Item>
          </NavDropdown>

          <Form className="searchbar d-flex col grid-item">
            <input
              id="sbar"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="sbutton" variant="outline-success">
              Search
            </Button>
          </Form>
          <Button className="cart col grid-item" variant="outline-success">
            Cart
          </Button>
          <Button className="login col grid-item" variant="outline-success">
            Login
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};
