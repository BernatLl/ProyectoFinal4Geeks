import React, { useContext } from "react";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'


export const LoginChef = ()=>{
    return (
        <>
        <h4>Student Chef</h4>
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="User"></Form.Label>
                     <Form.Control id="TextInput" placeholder="User" />
                </Form.Group>
                               
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Email"></Form.Label>
                     <Form.Control id="email" placeholder="Add an email" />
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password"></Form.Label>
                        <Form.Control id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password"></Form.Label>
                        <Form.Control id="Password" placeholder="Repeat Password" />
                    </Form.Group>
                </Row>
                <Row>
                <Button as="input" type="submit" value="Send" />{' '}
                </Row>
                
 
            </fieldset>
        </Form>
        </>
    )

}