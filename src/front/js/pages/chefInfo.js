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

export const ChefInfo = () => {
  const { store, actions } = useContext(Context);
  
  
  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      
        <>
          <h1 className="titulo">This is your chef profile page</h1>
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
                      <Nav.Link eventKey="first">Chef Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Create Course</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="contenido">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {!store.token ? (<ChefForm/>):(<ChefProfile />)}
                      
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="2">
                    {!store.token ? (<h1>Create a profile First</h1>):(<CreateCourse />)}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </>
      
    </>
  );
};