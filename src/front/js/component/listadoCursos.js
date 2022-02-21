import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


const Home = () => {
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
			<div className="container" >		
				
						<div className="card"   key={i}>
							<img src="" className="card-img-top" alt="..."></img>
							<div className="card-body" >
									<h5 className="card-title">{}</h5>
																
									<div className="card-link">
										<Link to="/">
											<button className="btn btn-primary" id={}>Read more</button>
										</Link>		
											<button className="btn btn-primary"></button>
									</div>
							</div>
						</div>
				
			</div>		
					
		</>
	);
};

export default Home;