import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/NavEdit.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";

export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="wraper">
      <div className="navbody row">
        <Link className="homebutton" to="/">
          <img src={logo} className="logo col"></img>
        </Link>
        <div className="stu-prof-cat col">
          <Link to="/user">
            <a className="student">Student</a>
          </Link>

          <Link to="/chef/">
            <div className="professor col" src="/professor">
              Professor
            </div>
          </Link>
          <div className="dropdown ">
            <button className="categories">Categories</button>
            <div className="dropdown-content">
              <a href="#">Country</a>
              <a href="#">Style</a>
              <a href="#">Chef</a>
            </div>
          </div>
        </div>

        <div className="search-button col">
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

          <button className="bcart col">Cart</button>
          {!store.token ? (
            <Link to="/createuser">
              <button id="cartb" type="button" className="bcart col">
                SignIn
              </button>
            </Link>
          ) : (
            <Link to="/createuser">
              <button
                id="logOut"
                type="button"
                onClick={() => actions.editUser()}
                className="blogout col"
              >
                Edit Profile
              </button>
            </Link>
          )}

          {!store.token ? (
            <Link to="/login">
              <button id="logIn" type="button" className="blogin col">
                Login
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                id="login"
                type="button"
                onClick={() => actions.logout()}
                className="blogin col"
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
