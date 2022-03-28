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
      
      

      <div className="container">
      <div className="titulo-profile">
        <h1>Public profile</h1>
      </div>
        {store.user.map((select, i)=>(
          <div className="container-fluid" key={i}>
            <Row>
              <Col className="col-6">
                  <div   >
                  <img src={select.image} className="fotoperfil"  />
                  </div>
              </Col> 
              <Col className="col-6">   
                  <div>
                    <h4>Name: {select.full_name}</h4>
                    <p>Description: {select.student_description}</p>
                    <p>User Name: {select.username}</p>
                    <p>Email: {select.email}</p>
                  </div>
              </Col>    
            </Row>
            
          </div>
        ))}
      </div>
    </>
  );
};
