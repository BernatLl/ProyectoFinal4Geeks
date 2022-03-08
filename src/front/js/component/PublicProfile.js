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
        {
          <div>
            <h4>{store.user.nick_name}</h4>

            <p>{store.user.student_description}</p>
            <p>{store.user.full_name}</p>
            <p>{store.user.email}</p>
          </div>
        }
      </div>
    </>
  );
};
