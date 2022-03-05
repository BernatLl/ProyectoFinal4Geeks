const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlapi:
        "https://3001-bernatll-proyectofinal4g-mk371x337gt.ws-eu34xl.gitpod.io/api/",
      course: [],
      student: [],
      chef: [],
      newStudent:[]
    },
    actions: {
      loadCourses: () => {
        fetch(getStore().urlapi + "course")
          .then((response) => response.json())
          .then((data) => setStore({ course: data.results }))
          .catch((error) => console.error(error));
      },
      loadChefs: () => {
        fetch(
			getStore().urlapi + "chef"
        )
          .then((response) => response.json())
          .then((data) => setStore({ chef: data.results }))
          .catch((error) => console.error(error));
      },
      loadStudents: () => {
        fetch(
			getStore().urlapi + "student"
        )
          .then((response) => response.json())
          .then((data) => setStore({ student: data.results }))
          .catch((error) => console.error(error));
      },
      
      createStudent: (newStudent)=>{
        fetch(
          getStore().urlapi + "newstudent", {
            method: "POST",
            body: JSON.stringify(newStudent),
            headers: {
                "Content-Type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((responseAsJason) => {
              setStore({
                  student: [...getStore().newStudent, responseAsJason],
              });
          })
          .catch((err) => console.log(err));
          
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
    },
  };
};

export default getState;
