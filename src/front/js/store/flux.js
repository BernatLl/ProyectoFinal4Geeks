const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message:null,
      token: null,
      urlapi:
        "https://3001-bernatll-proyectofinal4g-83i6p2xqvp6.ws-eu34xl.gitpod.io/api/",
      course: [],
      student: [],
      chef: [],
      newStudent:[],
      newCourse:[]
    },
    actions: {
      loadCourses: () => {
        fetch(getStore().urlapi + "course")
          .then((response) => response.json())
          .then((data) => setStore({ course: data.results }))
          .catch((error) => console.error(error));
      },
      loadChefs: (id) => {
        fetch(
			getStore().urlapi + "chef".concat(id)
        )
          .then((response) => response.json())
          .then((data) => setStore({ chef: data.results }))
          .catch((error) => console.error(error));
      },
      loadStudents: (id) => {
        fetch(
			getStore().urlapi + "student/".concat(id)
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

      createCourse: (newCourse)=>{
        fetch(
          getStore().urlapi + "newcourse", {
            method: "POST",
            body: JSON.stringify(newCourse),
            headers: {
                "Content-Type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((responseAsJason) => {
              setStore({
                  course: [...getStore().newCourse, responseAsJason],
              });
          })
          .catch((err) => console.log(err));
          
      },

      syncTokenFromSessionStore: () =>{
          const token = sessionStorage.getItem("token");
          if(token && token!="" && token!= undefined)setStore({token: token})
      },
      logout: ()=>{
          sessionStorage.removeItem("token");
          setStore({token: null})
      },

      login: async (email, password)=>{
              const opts = {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            };
        try{
          const resp = await fetch(  getStore().urlapi + "token", opts)
            
          if(resp.status!==200) { 
            alert("There has been an error!!!");
            return false;
          };

          const data = await resp.json();
          sessionStorage.getItem("token", data.access_token);
          setStore({token: data.access_token})
          return true;
        }
        catch(error){
          console.error("There was been an error login in")
        }
            
        
      },

      getMessage: ()=> {
        const store = getStore();
        const opts = {
          headers: {
      			'Content-Type': 'application/json',
      			'Authorization': "Bearer " + store.token
      		},
        }
      	// fetching data from the backend
      	fetch( getStore().urlapi + "hello", opts)
      	
        .then((res) => res.json())
      	.then(data => setStore({message: data.message}))
      	.catch((error) => console.log("Error loading message from backend", error));
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

      
    },
  };
};

export default getState;
