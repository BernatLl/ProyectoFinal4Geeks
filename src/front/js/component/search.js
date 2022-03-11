import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../../styles/search.css"
import {ListadoCursos} from '../component/listadoCursos.js'
import FormCheck from 'react-bootstrap/FormCheck'
import Form from 'react-bootstrap/Form'

export const Search = ()=>{
    return (
        <Container fluid>
            <Row>
                <h1>Search result</h1>
            </Row>
            <Row>
                <Col className="col-3">
                    <Row className="selection">
                        <Col>Filter</Col>
                        <Col >Sort By</Col>
                    </Row>

                    <div className="filter">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Form.Label as="legend" column sm={2}>
                            Chefs
                        </Form.Label>
                                              
                        <Col sm={{ span: 10, offset: 2 }}>
                         <Form.Check label="Chef 1" />
                         <Form.Check label="Chef 2" />
                         <Form.Check label="Chef 3" />
                         <Form.Check label="Chef 4" />
                        </Col>

                    </Form.Group>
                    </div>

                    <div className="filter">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Form.Label as="legend" column sm={2}>
                           Country
                        </Form.Label>
                                              
                        <Col sm={{ span: 10, offset: 2 }}>
                         <Form.Check label="Country 1" />
                         <Form.Check label="Country 2" />
                         <Form.Check label="Country 3" />
                         <Form.Check label="Country 4" />
                        </Col>

                    </Form.Group>
                    </div>
                    <div className="filter">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Form.Label as="legend" column sm={2}>
                            Level
                        </Form.Label>
                                              
                        <Col sm={{ span: 10, offset: 2 }}>
                         <Form.Check label="Level 1" />
                         <Form.Check label="Level 2" />
                         <Form.Check label="Level 3" />
                         <Form.Check label="Level 4" />
                        </Col>

                    </Form.Group>
                    </div>
                    <div className="filter">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Form.Label as="legend" column sm={2}>
                            Price
                        </Form.Label>
                                              
                        <Col sm={{ span: 10, offset: 2 }}>
                         <Form.Check label="Price 1" />
                         <Form.Check label="Price 2" />
                         <Form.Check label="Price 3" />
                         <Form.Check label="Price 4" />
                        </Col>

                    </Form.Group>
                    </div>
                   
                </Col>
                <Col className="col-9">
                    <ListadoCursos/>
                </Col>
            </Row>


        </Container>
    )
}