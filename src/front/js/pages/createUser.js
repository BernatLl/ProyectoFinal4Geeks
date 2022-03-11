import React, { useContext, useEffect, useState } from "react";
import "../../styles/formProfile.css";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import { Profile } from "../component/Profile";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";

export const CreateUser = ()=>{
    const { store, actions } = useContext(Context);
    
    return(
        <>
        <img id="BackHead" className="mt-m" src={HeaderImg}></img>
        <div className="container">
             <Profile/>
            </div>
        </>
            
       
    )
}