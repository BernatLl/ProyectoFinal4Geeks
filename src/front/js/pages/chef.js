import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import "../../styles/student.css"
import { Link } from "react-router-dom";
import "../../styles/listadoCursos.css"
import { ChefProfile } from "../component/chefProfile.js";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";

export const  Chef = ()=>{
    const { store, actions } = useContext(Context);
    // const id = useParams().id;
	
	// useEffect (()=>{
	// 	actions.loadChefs(id);
	// },[])

    return (
        <>
        <img id="BackHead" className="mt-m" src={HeaderImg}></img>
        <ChefProfile/>
        </>
        )

    }