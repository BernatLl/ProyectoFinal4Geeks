import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import { PublicProfile } from "../component/PublicProfile";
import { Profile } from "../component/Profile";
import Card from "react-bootstrap/Card";
import { CloseAccount } from "../component/CloseAccount.js";
import "../../styles/student.css";
import { ListadoCursos } from "../component/listadoCursos.js";
import { ProgressBar } from "react-bootstrap";
import { CreateCourse } from "./CreateCourse";
import "../../styles/home.css";
import HeaderImg from "../../img/HeaderImg.jpg";
import { ChefProfile } from "../component/chefProfile";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CourseUser } from "../component/courseUser";

export const User = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadUser();
  }, [store.token]);

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      {!store.token ? (
        <>
          <div className="container">
            <Row>
              <h1>Student Information</h1>
              <div className="pb-5">
                <h5 className="StuTittle">Students</h5>
                <p>
                  Welcome to "We Cook", with us you will be able to access to a
                  digital library with hundreds of professional cooks around the
                  world, do you want to learn how to cut like a professional
                  Click here, Do you want to learn about Venezuelan food, New
                  Zeleand, Canada, Scotland, etc? We give the chance to
                  professional or no professional chefs around the world that
                  want to share for a modest price their recipe or skill with
                  the rest of the world!!!!
                </p>
                <p>
                  If you are a user yet, you can login, if not you can create
                  your profile at signIn button
                </p>

                <div className="buttonsLog">
                  {!store.token ? (
                    <Link to="/createuser">
                      <Button variant="outline-primary" type="button">
                        SignIn
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/user">
                      <Button
                        variant="outline-primary"
                        type="button"
                        onClick={() => actions.editUser()}
                        className="blogout "
                      >
                        Profile
                      </Button>
                    </Link>
                  )}
                  {!store.token ? (
                    <Link to="/login">
                      <Button variant="outline-primary" type="button">
                        Login
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <Button
                        variant="outline-primary"
                        type="button"
                        onClick={() => actions.logout()}
                      >
                        Logout
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div className="container pt-6 my-4">
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="first"
              className="container-menu"
            >
              <Row className="marco">
                <Col sm={3} className="contenido-menu">
                  <Nav justify variant="pills" className="flex-column menu">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Public Profile</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="5">Close account</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="contenido">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <PublicProfile />
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                      <CloseAccount />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          <h1 className="titulo">My Courses</h1>
          <div className="container">
         <CourseUser/>

          </div>
        </>
      )}

      <h1 className="titulo">Recomended for you</h1>
      <div className="container-fluid p-1 my-5">
        <ListadoCursos />
      </div>
    </>
  );
};
