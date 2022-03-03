import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'
import React,{useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const PublicProfile =()=>{
    const { store, actions } = useContext(Context);

	
	useEffect (()=>{
		actions.loadStudents();
	},[])

    return(
        <>
            <h1>Public profile</h1>
            <div className="container" >		
						
                {store.student.map((select, i) => (
                    <div key={i}>
                        <h4>{select.nick_name}</h4>
                        
                        <p>{select.student_description}</p>
                        <p>{select.full_name}</p>
                        <p>{select.email}</p>
                        <img src={select.image}/>
                    </div>
                ))}
					
						
				
			</div>		
        </>
    )
}