import "../../styles/formProfile.css";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";

export const PublicProfile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadUser();
  }, [store.token]);

  return (
    <>
    <div className="container pt-10">
      <div className="titulo-profile">
          <h1>Public profile</h1>
        </div>
      
        
        {store.user.map((select, i) => (
          <div className="container-fluid" key={i}>
            <Row>
              <Col className="col-6">
                <div>
                  <img src={select.image} className="fotoperfil" />
                </div>
              </Col>
              <Col className="col-6">
                <div>
                  <h4>Name: </h4>
                  <p>{select.full_name}</p>
                  <h4>Description: </h4>
                  <p>{select.student_description}</p>
                  <h4>User Name: </h4>
                  <p> {select.username}</p>
                  <h4>Email: </h4>
                  <p> {select.email}</p>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
};
