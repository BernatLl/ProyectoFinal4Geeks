import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const PaymentMethods =()=>{
    return(
        <>
            <h1>Payment methods</h1>
            <Form>
                <fieldset>
                <h4>Payment methods</h4>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Fullname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Fullname" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="CardNumber"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Card number" />
                    </Form.Group>
                    <Row>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label htmlFor="CVC"></Form.Label>
                            <Form.Control id="TextInput" placeholder="CVC" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label htmlFor="ExpDate"></Form.Label>
                            <Form.Control id="TextInput" placeholder="Exp. Date" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="PayPal">PayPal payment method</Form.Label>
                        <Form.Control id="TextInput" placeholder="PayPal email" />
                    </Form.Group>
    
                </fieldset>
            </Form>
        </>
    )
}