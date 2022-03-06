import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


export const Navbar = () => {

  const { store, actions } = useContext(Context);
  // const [islogged, setIsLogged] = useState(false);

  // useEffect(()=>{
  //   if (localStorage.getItem('token')){
  //     setIsLogged(True);
  //   }
  // })

  return (
    <Nav id="NavBack" className="nav nav-pills flex-column flex-md-row">
      
      <Link to="/" id="logo"><img className="logo" src={logo}></img></Link>
      
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="categories"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Chef
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Style
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Country
          </a>
        </li>
      </ul>
      <a id="student" className="flex-sm-fill text-sm-center nav-link" href="#">
        Student
      </a>
      <a
        id="professor"
        className="flex-sm-fill text-sm-center nav-link "
        href="#"
      >
        Professor
      </a>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-1"
          aria-label="Search"
        />
        <ButtonGroup size="lg" className="mb-2">
        <Button variant="outline-success">Search</Button>
        <Button id="cart" type="button" className="btn btn-secondary btn-sm">
        Cart
        </Button>
        {!store.token ?
          <Link to="/login">
          <Button id="logIn" type="button" className="btn btn-secondary btn-sm">
            Login
          </Button>
          </Link>
          :
          <Button id="logOut" type="button" onClick={() => actions.logout()} className="btn btn-secondary btn-sm">
            Logout
          </Button>
           

          }
        </ButtonGroup>
      </Form>

      

      
      
      

      {/* {
        islogged ? 
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
        My Account
        </button>
        :
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
        Login
        </button>
      } */}
      
    </Nav>
  );
};
