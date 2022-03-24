import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/WeCook.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";
import {Search} from "../component/search";

export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="navbody row grid">
      <Link className="homebutton" to="/">
        <img src={logo} className="logo col-md"></img>
      </Link>
      <div className="stu-prof-cat col-md">
       
          <a className="student" href="#student" >Student</a>
       

        <a  className="professor" href="#profe">
            Professor
          
        </a>
      </div>

      <div className="search-button col-md">
        <Search/>
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
              Profile
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
  );
};
