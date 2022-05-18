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
  const [chefDetail, setChefDetail] = useState({});

  useEffect(() => {
    loadChefId();
  }, []);

  const loadChefId = async () => {
    const response = await fetch(store.urlapi + "chefbyid/" + id);
    const data = await response.json();
    setChefDetail(data.results);
  };

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>

      <div className="container">
        <h1>Chef Profile</h1>

        
          <div className="container">
            <h4>Name: {chefDetail.full_name}</h4>
            <p> Email: {chefDetail.email}</p>
            <p>Description: {chefDetail.chef_description}</p>
          </div>;
        
      </div>
    </>
  );
};
