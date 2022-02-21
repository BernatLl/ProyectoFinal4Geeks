import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";
export const Navbar = () => {
  return (
    <div className="Back">
      <nav id="NavBack" className="nav nav-pills flex-column flex-md-row">
        <a id="logo" className="flex-sm-fill text-sm-center nav-link" href="#">
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
        <a
          id="student"
          className="flex-sm-fill text-sm-center nav-link"
          href="#"
        >
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
          <button
            id="SButton"
            type="button"
            className="btn btn-secondary btn-sm"
          >
            Search
          </button>
        </form>

        <button id="cart" type="button" className="btn btn-secondary btn-sm">
          Cart
        </button>
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
          Login
        </button>
      </nav>
    </div>
  );
};
