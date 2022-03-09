import "../../styles/formProfile.css";
// import Form from "react-bootstrap/Form";
import React, { useEffect, useContext, useState } from "react";
// import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import { Row, Col } from "react-bootstrap";
// import FormCheck from "react-bootstrap/FormCheck";
// import Button from "react-bootstrap/Button";

export const PublicProfile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadUser();
  }, [store.token]);

  return (
    <>
      <h1>Public profile</h1>

      <div className="container">
        {store.user.map((select, i)=>(
          <div className="container" key={i}>
            
            <h4>{select.full_name}</h4>

            <p>{select.student_description}</p>
            <p>{select.username}</p>
            <p>{select.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};
