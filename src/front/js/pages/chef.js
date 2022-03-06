import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import "../../styles/student.css"
import { Link } from "react-router-dom";
import "../../styles/listadoCursos.css"
import { ChefProfile } from "../component/ChefProfile,js";

export const  Chef = ()=>{
    const { store, actions } = useContext(Context);
    const id = useParams().id;
	
	useEffect (()=>{
		actions.loadChefs(id);
	},[])

    return (

    )
}