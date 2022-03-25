import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/WeCook.png";
import { Link } from "react-router-dom";
import "../../../front/styles/NavBar.css";
import {Search} from "../component/search";
import { Row, Col } from "react-bootstrap";



export const NavTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="navbody row grid">
      <Row className="align-items-center">
        <Col>
          <Link className="homebutton" to="/">
            <img src={logo} className="logo col-xl"></img>
          </Link>
        </Col>
        <Col>
          <div className="stu-prof-cat col-xl">
            
                <Link to="/user">
                  <div>
                    <a className="student m-4">Student</a>
                  </div>
                </Link>
             

              <div>
                  <a  className="professor" href="#profe">Professor</a>
              </div>
          </div>
        </Col>
      <Col>
      <div className="search-button col-xl">
        <Search/>
      </div>
      </Col>
      <Col className="buttons">
      <div className="endbuttons col-xl">
      {!store.token ? (
        <Link to="/login">
        <button id="logIn" type="button" className="blogin ">
          Cart
        </button>
      </Link>):(<Link to="/payment">
        <button className="bcart ">Cart</button>
        </Link>)}
        

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
      </Col>
      </Row>
    </div>
  );
};
