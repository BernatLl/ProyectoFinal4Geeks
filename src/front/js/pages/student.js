import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import { PublicProfile } from "../component/PublicProfile";
import { Profile } from "../component/Profile";
import { PaymentMethods } from "../component/PaymentMethods";
import { CloseAccount } from "../component/CloseAccount.js";
import "../../styles/student.css";
import rigo from "../../img/rigo-baby.jpg";
import { ListadoCursos } from "../component/listadoCursos";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../../styles/listadoCursos.css";

export const Student = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadStudents();
  }, [store.token]);

  return (
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
                {<img src={store.student.image} className="fotoperfil" />}

                <Nav.Item>
                  <Nav.Link eventKey="first">Public Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Payment methods</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">Close account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="contenido">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <PublicProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <PaymentMethods />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <CloseAccount />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      {/* <h1 className="titulo">My Courses</h1>
            <div className="container">
            	
				<div className="row">
                <div className="card col-6 m-0.5" >
                    <img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
                    <div className="card-body" >
                            <h5 className="card-title">Master Cutting Class</h5>
                            <ProgressBar animated striped variant="danger" now={45} label={'45%'} />                             
                            
                    </div>
                </div>
                <div className="card col-6 m-0.5" >
                    <img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
                    <div className="card-body" >
                            <h5 className="card-title">Master Class Stock</h5>
                            <ProgressBar animated striped variant="danger" now={60} label={'60%'} /> 
                    
                           
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="card col-6 m-0.5" >
                    <img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
                    <div className="card-body" >
                            <h5 className="card-title">Beginner Course Risotto</h5>
                            <ProgressBar animated striped variant="success" now={100} label={'100%'} />                                
                            
                    </div>
                </div>
                <div className="card col-6 m-0.5" >
                    <img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
                    <div className="card-body" >
                            <h5 className="card-title">Advanced Cook</h5>
                            <ProgressBar animated striped variant="danger" now={10} label={'10%'} />                                
                            
                    </div>
                </div>
                </div>
        
    </div>		
            
            <h1 className="titulo">Recomended for you</h1>
            <div className="container-fluid p-1 my-5">
               
            </div> */}
    </>
  );
};
