import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/NavEdit.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";

export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="wraper">
      <div className="navbody row grid">
        <Link className="homebutton" to="/">
          <img src={logo} className="logo col-md"></img>
        </Link>
        <div className="stu-prof-cat col-md">
          <Link to="/user">
            <a className="student">Student</a>
          </Link>

          <Link to="/chef/">
            <div className="professor" src="/professor">
              Professor
            </div>
          </Link>
        </div>

        <div className="search-button col-md">
          <div className="search ">
            <input
              type="search"
              className="searchbar "
              placeholder="Type Here"
            ></input>
            <button className="sbutton">
              <div className="seart">Search</div>
            </button>
          </div>
        </div>

        <div className="endbuttons col-md">
          <button className="bcart ">Cart</button>
          {!store.token ? (
            <Link to="/createuser">
              <button id="cartb" type="button" className="bcart ">
                SignIn
              </button>
            </Link>
          ) : (
            <Link to="/createuser">
              <button
                id="logOut"
                type="button"
                onClick={() => actions.editUser()}
                className="blogout "
              >
                Edit Profile
              </button>
            </Link>
          )}

          {!store.token ? (
            <Link to="/login">
              <button id="logIn" type="button" className="blogin ">
                Login
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                id="login"
                type="button"
                onClick={() => actions.logout()}
                className="blogin "
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
