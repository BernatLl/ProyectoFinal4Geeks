import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";


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

