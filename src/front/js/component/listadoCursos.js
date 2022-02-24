import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


export const ListadoCursos = () => {
	const { store, actions } = useContext(Context);

	useEffect (()=>{
			{/*actions.loadPeopleData();
				actions.loadPlanetData();
				actions.loadStarshipsData();
                actions.loadPeopleDetail();*/}
		}, []);

	return(
		<>
			<h1 className="title" >
				Courses List
			</h1>
			<div className="container-cursos" >		
						{/*<Row xs={1} md={2} className="g-4">
							{Array.from({ length: 4 }).map((_, idx) => (
								<Col>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a longer card with supporting text below as a natural
										lead-in to additional content. This content is a little bit longer.
									</Card.Text>
									</Card.Body>
								</Card>
								</Col>
							))}
							</Row>*/}
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
				
			</div>		
					
		</>
	);
};

