import React from "react";
import "../../../front/styles/NavBar.css";

export const Navbar = () => {
  return (
    <div classNameName="Back">
      <nav id="NavBack" classNameName="nav nav-pills flex-column flex-sm-row">
        <a
          id="logo"
          classNameName="flex-sm-fill text-sm-center nav-link"
          href="#"
        >
          We Cook!
        </a>
        <a
          id="categories"
          classNameName="flex-sm-fill text-sm-center nav-link"
          href="#"
        >
          Categories
        </a>
        <a
          id="student"
          classNameName="flex-sm-fill text-sm-center nav-link"
          href="#"
        >
          Student
        </a>
        <a
          id="professor"
          classNameName="flex-sm-fill text-sm-center nav-link "
          href="#"
        >
          Professor
        </a>

        <a
          id="search"
          classNameName="flex-sm-fill text-sm-center nav-link "
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
