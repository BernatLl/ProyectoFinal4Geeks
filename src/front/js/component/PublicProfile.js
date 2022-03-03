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
		actions.loadSomeData();
	},[])

    return(
        <>
            <h1>Public profile</h1>
            <div className="container" >		
						
                {store.student.map((select, i) => (
                    <Col key={i}>
                        <h4>{select.nickName}</h4>
                        
                        <p>{select.studentDescription}</p>
                    </Col>
                ))}
					
						
				
			</div>		
        </>
    )
}