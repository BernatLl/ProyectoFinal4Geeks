import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Row, Col } from "react-bootstrap";
import { Parrafo1, Parrafo2} from "../component/parrafo.js"
import "../../styles/student.css"


export const Student = ()=>{
    return(
        <>
            <div className="container p-0 my-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row>
                    <Col sm={3}>
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
                    <Col sm={9} className="contenido">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Parrafo1/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                       <Parrafo2/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                        <Parrafo1/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                       <Parrafo2/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                        <Parrafo1/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                       <Parrafo2/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
        </>

    )
}

