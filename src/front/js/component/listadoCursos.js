import React,{useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Clase from '../../img/claseRemote.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router-dom";

export const ListadoCursos = () => {
	const { store, actions } = useContext(Context);
	const id = useParams().id;
	
	useEffect (()=>{
		actions.loadCourses();
	},[])

	return(
		<>
			<h1 className="title" >
				Courses List
			</h1>
			<div className="container" >		
						<Row className="g-4">
							{store.course.map((select, i) => (
								<Col >
									<Card key={i}>
										<Card.Img className="card-img-top p-5" variant="top" src={select.img} />
										<Card.Body >
										<Card.Title>{select.title}</Card.Title>
											<Card.Text >
												{select.description}
											</Card.Text>
										</Card.Body>
										<Link to={"/courseview/"+ select.id}>
										<Button variant="outline-primary">Read More</Button>
										</Link>
									</Card>
								</Col>
							))}
						</Row>
						
				
			</div>		
					
		</>
	);
};

