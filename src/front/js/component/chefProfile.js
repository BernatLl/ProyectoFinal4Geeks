import React, { useContext, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/student.css";
import "../../styles/home.css";
import HeaderImg from "../../img/HeaderImg.jpg";

export const ChefProfile = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;
  const [newChef, setNewChef] = useState({});

  return (
    <>
     <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      {!store.token ? (
        <div className="container">
          <h1>Create Chef Profile</h1>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="TextInput"
                  placeholder="Add a Username"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, full_name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="Email"
                  placeholder="Add an email"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="TextInput"
                  placeholder="Add an address"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, address: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="TextInput"
                  placeholder="Add a Bank Account"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, bank_info: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="colorbar">
                  Something about you
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({
                      ...newChef,
                      chef_description: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Button
              variant="outline-primary"
                id="submit"
                type="button"
                size="lg"
                onClick={() => {
                  actions.createChef(newChef);
                }}
              >
                Create
              </Button>
            </fieldset>
          </Form>
        </div>
      ) : (
        <div className="container">
          <h1>Chef Profile</h1>
          <div className="container">
            {
              <div>
                <h4>{store.chef.full_name}</h4>
                <p>{store.chef.email}</p>
                <p>{store.chef.description}</p>
                <p>{store.chef.bank_info}</p>
                <p>{store.chef.address}</p>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};
