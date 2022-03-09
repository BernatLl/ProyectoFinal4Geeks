import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css"
import { LoginStudent } from "../component/loginStudent";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const Login =()=>{
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    

    const handleClick = ()=>{
        actions.login(email, password);
        actions.loadUser();
                   
    };

    
	
	
    return(
        <>
            <h1>Login</h1>
            <div className="container-fluid p-1 my-5">
                    {( store.token && store.token!="" && store.token != undefined) ? "You are Logged " : 
                    <Form>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label> 
                        <Col sm="10">
                        <Form.Control type="text"  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </Col>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    {/* <Link to="/"> */}
                     <Button variant="dark" onClick={handleClick}>Login</Button>
                     {/* </Link> */}

                </Form>}
                
            </div>
        </>
    );
}