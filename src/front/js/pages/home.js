import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { MeetTheCrew } from "../component/meetTheCrew.js"
import { FormContacto } from "../component/formContacto.js";
import { ListadoCursos } from "../component/listadoCursos.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<ListadoCursos/>
			<MeetTheCrew/>
			<FormContacto/>
		</div>
	);
};
