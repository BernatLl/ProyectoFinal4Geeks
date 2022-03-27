import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import { PublicProfile } from "../component/PublicProfile";
import { Profile } from "../component/Profile";
import { PaymentMethods } from "../component/PaymentMethods";
import { CloseAccount } from "../component/CloseAccount.js";
import "../../styles/student.css";
import { ListadoCursos } from "../component/listadoCursos.js";
import { ProgressBar } from "react-bootstrap";
import { CreateCourse } from "./CreateCourse";
import "../../styles/home.css";
import HeaderImg from "../../img/HeaderImg.jpg";
import { ChefProfile } from "../component/chefProfile";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

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
                world, do you want to learn how to cut like a professional Click
                here, Do you want to learn about Venezuelan food, New Zeleand,
                Canada, Scotland, etc? We give the chance to professional or no
                professional chefs around the world that want to share for a
                modest price their recipe or skill with the rest of the
                world!!!!
              </p>
              <p>If you are a user yet, you can login, if not you can create your profile at signIn button</p>

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
                  <Button variant="outline-primary" type="button" >
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
          <h1 className="titulo">This is your profile page</h1>
          <div className="container p-1 my-5">
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
                      <Nav.Link eventKey="4">Payment methods</Nav.Link>
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
                    <Tab.Pane eventKey="4">
                      <PaymentMethods />
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
        <div className="row">
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Master Cutting Class</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={45}
                label={"45%"}
              />
            </div>
          </div>
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Master Class Stock</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={60}
                label={"60%"}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Beginner Course Risotto</h5>
              <ProgressBar
                animated
                striped
                variant="success"
                now={100}
                label={"100%"}
              />
            </div>
          </div>
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Advanced Cook</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={10}
                label={"10%"}
              />
            </div>
          </div>
        </div>
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
