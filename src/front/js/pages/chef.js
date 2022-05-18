import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import "../../styles/student.css";
import { Link } from "react-router-dom";
import "../../styles/listadoCursos.css";
import { ChefProfile } from "../component/chefProfile.js";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";
import { ListadoCursos } from "../component/listadoCursos.js";
import { ProgressBar } from "react-bootstrap";
import { CreateCourse } from "./CreateCourse";
import { CloseAccount } from "../component/CloseAccount";
import Button from "react-bootstrap/Button";
import { ChefForm } from "../component/chefForm";

export const Chef = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>

      <div className="container">
        <Row>
          <h1 className=" mt-5">Chef Information</h1>
          <div className="pb-5 ">
            <h5 className="StuTittle">Chefs</h5>
            <p>
              Welcome to "We Cook", with us you will be able to access to a
              digital library with hundreds of professional cooks around the
              world, do you want to learn how to cut like a professional Click
              here, Do you want to learn about Venezuelan food, New Zeleand,
              Canada, Scotland, etc? We give the chance to professional or no
              professional chefs around the world that want to share for a
              modest price their recipe or skill with the rest of the world!!!!
            </p>
            <p>
              If you are a user yet, you can login, if not you can create your
              profile at signIn button
            </p>

            <div className="buttonsLog">
              <Link to="/login">
                <Button variant="outline-primary" type="button">
                  Login
                </Button>
              </Link>
              <Link to="/chef/1">
                <Button variant="outline-primary" type="button">
                  Create a Chef Profile
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};
