import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css";
import { LoginStudent } from "../component/loginStudent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickUser = () => {
    actions.loginuser(email, password);
    actions.loadUser();
  };
  const handleClickChef = () => {
    actions.loginchef(email, password);
    actions.loadChef();
  };

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>

      <div className="container">
        <Row className="logins">
          <Col className="col-5">
            <h1 className="mt-5">Login Student</h1>
            {store.tokenuser &&
            store.tokenuser != "" &&
            store.tokenuser != undefined ? (
              "You are Logged "
            ) : (
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Link to="/user">
                  <Button variant="outline-primary" onClick={handleClickUser}>
                    Login
                  </Button>
                </Link>
              </Form>
            )}
          </Col>
          <Col className="col-5">
            <h1 className="mt-5">Login Chef</h1>
            {store.tokenchef &&
            store.tokenchef != "" &&
            store.tokenchef != undefined ? (
              "You are Logged "
            ) : (
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Link to="/chef">
                  <Button variant="outline-primary" onClick={handleClickChef}>
                    Login
                  </Button>
                </Link>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
