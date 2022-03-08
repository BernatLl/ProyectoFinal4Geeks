import React from "react";
import "../../styles/formProfile.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

export const MyBankAccount = () => {
  return (
    <>
      <h1>My Bank Account</h1>
      <Form>
        <fieldset>
          <h4>Payment methods</h4>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Fullname"></Form.Label>
            <Form.Control id="TextInput" placeholder="Fullname" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Account Number"></Form.Label>
            <Form.Control id="TextInput" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </Form.Group>
          <Row>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="CVC">BIC</Form.Label>
              <Form.Control
                id="TextInput"
                placeholder="ESXX XXXX XXXX XXXX XXXX XX"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="ExpDate">Phone Number</Form.Label>
              <Form.Control id="TextInput" placeholder="Phone Number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="PayPal">Adress</Form.Label>
            <Form.Control id="TextInput" placeholder="Av America..." />
          </Form.Group>
        </fieldset>
      </Form>
    </>
  );
};
