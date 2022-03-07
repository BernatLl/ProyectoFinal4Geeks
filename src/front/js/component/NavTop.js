import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";

export const NavTop = () => {
  return (
    <div className="navbody row container-fluid">
      <img src={logo} className="logo col "></img>
      <div className="stu-prof-cat col">
        <div className="student " src="/student">
          Students
        </div>

        <div className="professor " src="/professor">
          Professor
        </div>

        <button type="dropdown" class="dropbtn ">
          Categories
        </button>
        <div class="dropdown-content">
          <a href="#">Country</a>
          <a href="#">Style</a>
          <a href="#">Chef</a>
        </div>
      </div>
      <div className="search col ">
        <input
          type="search"
          className="searchbar "
          placeholder="Type Here"
        ></input>
        <button className="sbutton ">
          <div className="seart ">Search</div>
        </button>
      </div>
      <div className="endbuttons col ">
        <button className="bcart ">cart</button>
        <button className="blogin ">Login</button>
      </div>
    </div>
  );
};
