import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Row, Col } from "react-bootstrap";
import { PublicProfile, Profile, PaymentMethods, Privacy, Notifications, CloseAccount} from "../component/formProfile.js"
import "../../styles/student.css"
import rigo from "../../img/rigo-baby.jpg"


export const Student = ()=>{
    return(
        <>
            <h1 className="titulo">This is your profile page</h1>
            <div className="container-fluid p-1 my-5">
                
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="container-menu">
                <Row className="marco">
                    <Col sm={3} className="contenido-menu">
                        <img src={rigo}  className="fotoperfil" />
                    <Nav justify variant="pills" className="flex-column menu">
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
                        <Nav.Link eventKey="4">Privacy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="5">Notifications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="6">Close account</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9} className="contenido" >
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                        <PublicProfile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                       <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                        <PaymentMethods/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                       <Privacy/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                        <Notifications/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                       <CloseAccount/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
        </>

    )
}

