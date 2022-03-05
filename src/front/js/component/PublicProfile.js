import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'
import React,{useEffect, useContext, useState } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const PublicProfile =()=>{
    const { store, actions } = useContext(Context);
    const id = useParams().id;
	
	useEffect (()=>{
		actions.loadStudents(id);
	},[])

    return(
        <>
            <h1>Public profile</h1>
            
                            
            <div className="container" >		
						
                {
                    <div >

                        <h4>{store.student.nick_name}</h4>
                        
                        <p>{store.student.student_description}</p>
                        <p>{store.student.full_name}</p>
                        <p>{store.student.email}</p>
                      
                    </div>
                }
					
						
				
			</div>		
        </>
    )
}