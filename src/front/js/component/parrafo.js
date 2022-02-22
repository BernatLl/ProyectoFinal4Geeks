import React from "react";
import "../../styles/parrafo.css"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Form"
import { Row, Col } from "react-bootstrap";

export const Parrafo1 =()=>{
    return(
        <>
            <h1>Public profile</h1>
            <Form>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Nickname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Nickname" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Favorite courses"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Favorite courses" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="InterestedIn"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Interested in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
    
                </fieldset>
            </Form>
        </>
    )
}
export const Parrafo2 = ()=>{
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
                        <Form.Control id="TextInput" placeholder="Surnema" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                 </Form.Group>
 
            </fieldset>
        </Form>
        </>
    )
}