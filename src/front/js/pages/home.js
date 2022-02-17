import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { MeetTheCrew } from "../component/meetTheCrew.js"
import { FormContacto } from "../component/formContacto.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<MeetTheCrew/>
			<FormContacto/>
		</div>
	);
};
