import React from "react";
import "../../../front/styles/NavBar.css";

export const Navbar = () => {
  return (
    <div className="Back">
      <nav id="NavBack" className="nav nav-pills flex-column flex-sm-row">
        <a id="logo" className="flex-sm-fill text-sm-center nav-link" href="#">
          We Cook!
        </a>
        <a
          id="categories"
          className="flex-sm-fill text-sm-center nav-link"
          href="#"
        >
          Categories
        </a>
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

        <a
          id="search"
          className="flex-sm-fill text-sm-center nav-link "
          href="#"
        >
          Search
        </a>

        <button id="cart" type="button" className="btn btn-secondary btn-sm">
          Cart
        </button>
        <button id="logIn" type="button" className="btn btn-secondary btn-sm">
          Log In
        </button>
      </nav>
    </div>
  );
};
