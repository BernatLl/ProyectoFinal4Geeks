import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const PublicProfile =()=>{
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
                        <Form.Label>Something about me</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
    
                </fieldset>
            </Form>
        </>
    )
}