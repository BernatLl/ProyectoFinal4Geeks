import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";

export const Navbar = () => {

  const { store, actions } = useContext(Context);
  const [islogged, setIsLogged] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem('token')){
      setIsLogged(True);
    }
  })

  return (
    <nav id="NavBack" className="nav nav-pills flex-column flex-md-row">
      <a
        id="logo"
        className="flex-sm-fill text-sm-center nav-link"
        href="https://3000-bernatll-proyectofinal4g-cqtsmybwg7u.ws-eu33.gitpod.io/"
      >
        <img className="logo" src={logo}></img>
      </a>
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

      <form id="SearchBar" className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          id="Search"
          placeholder="Type Here"
          aria-label="Search"
        ></input>
        <button id="SButton" type="button" className="btn btn-secondary btn-sm">
          Search
        </button>
      </form>

      <button id="cart" type="button" className="btn btn-secondary btn-sm">
        Cart
      </button>
      {
        islogged ? 
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
        My Account
        </button>
        :
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
        Login
        </button>
      }
      
    </nav>
  );
};
