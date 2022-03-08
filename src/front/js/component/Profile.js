import React, { useContext, useEffect, useState } from "react";
import "../../styles/formProfile.css";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  const [newStudent, setNewStudent] = useState({});

  return (
    <>
      <h1>Profile</h1>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="AddUsername"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a Username"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, username: e.target.value });
              }}
            />
          </Form.Group>
          <Row>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="FullName"></Form.Label>
              <Form.Control
                id="TextInput"
                placeholder="FullName"
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({ ...newStudent, full_name: e.target.value });
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Email"></Form.Label>
            <Form.Control
              id="email"
              placeholder="Add an email"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, email: e.target.value });
              }}
            />
          </Form.Group>
          <Row>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="Password"></Form.Label>
              <Form.Control
                id="Password"
                placeholder="Password"
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({ ...newStudent, password: e.target.value });
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Website"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a website"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, password: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Linkedin"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a Linkedin"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, linkedin_url: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Twitter"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a Twitter"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, twitter_url: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Facebook"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a Facebook"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, facebook_url: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Instagram"></Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Add a Instagram"
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({ ...newStudent, instagram_url: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Something about you</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                e.preventDefault();
                setNewStudent({
                  ...newStudent,
                  student_description: e.target.value,
                });
              }}
            />
          </Form.Group>

          {!store.token ? (
            <button
              id="submit"
              type="button"
              className="bcart col"
              onClick={() => {
                actions.createUser(newStudent);
              }}
            >
              Create
            </button>
          ) : (
            <button
              id="Save"
              type="button"
              onClick={() => actions.editUser()}
              className="bcart col"
            >
              Save Changes
            </button>
          )}
        </fieldset>
      </Form>
    </>
  );
};
