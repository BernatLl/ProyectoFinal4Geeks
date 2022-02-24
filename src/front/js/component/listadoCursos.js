import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Clase from '../../img/claseRemote.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const ListadoCursos = () => {
	const { store, actions } = useContext(Context);

	const ArrayCursos = [
		{
			id: 1,
			name: 'Curso Rissotto',
			level: 'Easy'

		},
		{
			id:2,
			name: 'Curso Pasta',
			level: 'Medium'
		},
		{
			id:3,
			name: 'Curso Arroz al Horno',
			level: 'Advanced'
		},
		{
			id:4,
			name: 'Curso Postres',
			level: 'Medium'
		}
	];

	return(
		<>
			<h1 className="title" >
				Courses List
			</h1>
			<div className="container-cursos" >		
						{<Row xs={1} md={2} className="g-4">
							{ArrayCursos.map((select, i) => (
								<Col key={i}>
								<Card >
									<Card.Img className="card-img-top p-5" variant="top" src={Clase} />
									<Card.Body >
									<Card.Title>{select.name}</Card.Title>
										<Card.Text >
											{select.level}
										</Card.Text>
									</Card.Body>
								</Card>
								</Col>
							))}
						</Row>}
						{/*<div className="card" >
							<img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
							<div className="card-body" >
									<h5 className="card-title">Curso Postre</h5>
																
									<div className="card-link">
										<Link to="/">
											<button className="btn btn-primary" >Read more</button>
										</Link>		
											<button className="btn btn-primary">Add to Favorites</button>
									</div>
							</div>
						</div>
                        <div className="card" >
							<img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
							<div className="card-body" >
									<h5 className="card-title">Curso Postre</h5>
																
									<div className="card-link">
										<Link to="/">
											<button className="btn btn-primary" >Read more</button>
										</Link>		
											<button className="btn btn-primary">Add to Favorites</button>
									</div>
							</div>
						</div>
                        <div className="card" >
							<img src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d" className="card-img-top p-5" alt="..."></img>
							<div className="card-body" >
									<h5 className="card-title">Curso Postre</h5>
																
									<div className="card-link">
										<Link to="/">
											<button className="btn btn-primary" >Read more</button>
										</Link>		
											<button className="btn btn-primary">Add to Favorites</button>
									</div>
							</div>
						</div>
							*/}
				
			</div>		
					
		</>
	);
};

