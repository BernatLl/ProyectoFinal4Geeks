const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			course: [],
			student: [],
			chef: []

		},
		actions: {
			loadSomeData: () => {
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/course")
					.then(response => response.json())
					.then(data => setStore({ course: data.results}))
					.catch(error => console.error(error));
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/chef")
					.then(response => response.json())
					.then(data => setStore({ chef: data.results}))
					.catch(error => console.error(error));
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/student")
					.then(response => response.json())
					.then(data => setStore({ student: data.results}))
					.catch(error => console.error(error));

				
			},
		}
	};
};

export default getState;
