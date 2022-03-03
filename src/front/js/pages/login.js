import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css"
import { LoginStudent } from "../component/loginStudent";
import Form from 'react-bootstrap/Form'


export const Login =()=>{
    const { store, actions } = useContext(Context);

	
	useEffect (()=>{
		actions.login();
	},[])
    return(
        <>
            <h1>Login</h1>
            <div className="container-fluid p-1 my-5">
                    
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  defaultValue="email@example.com" required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" required/>
                        </Col>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}