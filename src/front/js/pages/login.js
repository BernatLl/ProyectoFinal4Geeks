import React, { useContext } from "react";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css"
import { LoginStudent } from "../component/loginStudent";
import { LoginChef } from "../component/loginChef";

export const Login =()=>{
    return(
        <>
            <h1>Login</h1>
            <div className="container-fluid p-1 my-5">
                    
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="container-menu">
                    <Row className="marco">
                        <Col sm={3} className="contenido-menu">
                           
                        <Nav justify variant="pills" className="flex-column menu">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Student Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="2">Chef Login</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                        </Col>
                        <Col sm={9} className="contenido" >
                        <Tab.Content >
                            <Tab.Pane eventKey="first">
                            <LoginStudent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                            <LoginChef/>
                            </Tab.Pane>
                            
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}