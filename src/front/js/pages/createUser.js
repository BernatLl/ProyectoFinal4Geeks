import React, { useContext, useEffect, useState } from "react";
import "../../styles/formProfile.css";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import { Profile } from "../component/Profile";

export const CreateUser = ()=>{
    const { store, actions } = useContext(Context);
    
    return(
            <div className="container">
             <Profile/>
            </div>
       
    )
}