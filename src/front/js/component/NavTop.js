import React from "react";
import "../../../front/styles/NavBar.css";
import logo from "../../img/NavEdit.png";

export const NavTop = () => {
  return (
    <div className="wraper">
      <div className="navbody row">
        <img src={logo} className="logo col"></img>

        <div className="student col" src="/student">
          Students
        </div>

        <div className="professor col" src="/professor">
          Professor
        </div>

        <div class="dropdown col">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
            <a href="#">Country</a>
            <a href="#">Style</a>
            <a href="#">Chef</a>
          </div>
        </div>
        <div className="search col">
          <input
            type="search"
            className="searchbar "
            placeholder="Type Here"
          ></input>
          <button className="sbutton">
            <div className="seart">Search</div>
          </button>
        </div>
        <div className="endbuttons col">
          <button className="bcart">cart</button>
          <button className="blogin">Log in</button>
        </div>
      </div>
    </div>
  );
};
