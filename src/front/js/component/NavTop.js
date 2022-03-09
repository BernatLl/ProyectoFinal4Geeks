import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/NavEdit.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";

export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="wraper">
      <div className="navbody col">
        <Link to="/">
        <img src={logo} className="logo col"></img>
        </Link>
        <Link to="/user">
          <div className="student col" >
          Students
          </div>
        </Link>
        
        <Link to="/chef/:id">
          <div className="professor col" src="/professor">
            Professor
          </div>
        </Link>
        <div className="dropdown col">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
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

        <button className="bcart col">cart</button>
        {!store.token ?
          <Link to="/createuser">
          <button id="SignIn" type="button" className="bcart col">
            SignIn
          </button>
          </Link>
          :
          <Link to="/createuser">
          <button id="logOut" type="button" onClick={() => actions.editUser()} className="bcart col">
            Edit Profile
          </button>
          </Link> 

          }
        {!store.token ?
          <Link to="/login">
          <button id="logIn" type="button" className="bcart col">
            Login
          </button>
          </Link>
          :
          <Link to="/">
          <button id="logOut" type="button" onClick={() => actions.logout()} className="bcart col">
            Logout
          </button>
          </Link>

          }
      </div>
    </div>
  );
};

