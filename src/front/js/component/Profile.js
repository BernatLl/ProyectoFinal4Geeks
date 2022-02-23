import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'


export const Profile = ()=>{
    return(
        <>
        <h1>Profile</h1>
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="AddNickname"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Nickname" />
                </Form.Group>
                <Row>
                
                    <Form.Group className="mb-3 col-6">
                        
                        <Form.Label htmlFor="Name"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Surname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Surname" />
                    </Form.Group>
                </Row>
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
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Website"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a website" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Linkedin"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Linkedin" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Twitter"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Twitter" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Facebook"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Facebook" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Instagram"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Instagram" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Something about you</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                 </Form.Group>
 
            </fieldset>
        </Form>
        </>
    )
}

