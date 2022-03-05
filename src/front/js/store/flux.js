const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			course: [],
			student: [],
			chef: []

		},
		actions: {
			loadCourses: () => {
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/course")
					.then(response => response.json())
					.then(data => setStore({ course: data.results}))
					.catch(error => console.error(error));
			},
			loadChefs: ()=>{
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/chef")
					.then(response => response.json())
					.then(data => setStore({ chef: data.results}))
					.catch(error => console.error(error));
			},
			loadStudents: ()=>{
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/student")
				.then(response => response.json())
				.then(data => setStore({ student: data.results}))
				.catch(error => console.error(error));
			},

			// getUserInformation: async()=>{
			// 	const response = await fetch(
			// 		"https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/" + "user", {
			// 			headers: {
			// 				'Accept':'application/json',
			// 				'Authorization': `Bearer ${localStorage.getItem('token')}`
			// 			}
			// 		}
			// 	);
			// 	const data = await response.json();
			// 	console.log(data); //Informacion del usuario que inicia sesion
			// },

			// login: async(username, password)=> {
			// 	const response = await fetch(
			// 		"https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/" +"login", {
			// 			'method': 'POST',
			// 			'header': {
			// 				'Content-Type': 'application/json',
			// 				'Accept': 'application/json'
			// 			},
			// 			body: JSON.stringify({
			// 				username: username,
			// 				password: password,
			// 			})
			// 		}
			// 	);
			// 	const data = await response.json();
			// 	localStorage.setItem('token', data.token);
			// },
			

			// getMessage: function () {
			// 	// fetching data from the backend
			// 	fetch('postgresql://gitpod@localhost:3001/me', {
			// 		method: 'GET',
			// 		headers: {
			// 			'Accept': 'application/json',
			// 			'Authorization': `Bearer ${localStorage.getItem('token')}`
			// 		},
			// 	}).then((res) => res.json())
			// 		.then((data) => {
			// 			console.log(data);
			// 	}).catch((err) => console.error(err));
			// },
		}
	};
};

export default getState;
