import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/WeCook.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";
import { Search } from "../component/search";
import { Row, Col, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="sticky-top navbarwidth"
      bg="dark"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand href="/">
        <img src={logo} className="logo col-xl"></img>
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          <Nav.Link href="/user">Student</Nav.Link>
          <Nav.Link href="/chef">Professor</Nav.Link>
        </Nav>
        <Nav className="me-auto mr-0">
          <div className="search-button col-xl">
            <Search />
          </div>
        </Nav>
        <Nav>
          {!store.token ? (
            <Nav.Link href="/createuser">
              <button id="cartb" type="button" className="bcart ">
                SignIn
              </button>
            </Nav.Link>
          ) : (
            <Nav.Link href="/createuser">
              <button
                id="logOut"
                type="button"
                onClick={() => actions.editUser()}
                className="blogout "
              >
                Profile
              </button>
            </Nav.Link>
          )}

          {!store.token ? (
            <Nav.Link href="/login">
              <button id="logIn" type="button" className="blogin ">
                Login
              </button>
            </Nav.Link>
          ) : (
            <Nav.Link href="/">
              <button
                id="login"
                type="button"
                onClick={() => actions.logout()}
                className="blogin "
              >
                Logout
              </button>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
