const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: null,
      urlapi:
        "https://3001-bernatll-proyectofinal4g-0hg8qcy39bg.ws-eu38.gitpod.io/api/",

      course: [],
      chef: [],
      newUser: [],
      newCourse: [],
      newChef: [],
      user: [],
    },
    actions: {
      loadCourses: () => {
        fetch(getStore().urlapi + "course")
          .then((response) => response.json())
          .then((data) => setStore({ course: data.results }))
          .catch((error) => console.error(error));
      },

      loadChefs: () => {
        fetch(getStore().urlapi + "chef")
          .then((response) => response.json())
          .then((data) => setStore({ chef: data.results }))
          .catch((error) => console.error(error));
      },
      login: async (username, password) => {
        try {
          const resp = await fetch(getStore().urlapi + "login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });
          if (resp.status !== 200) {
            alert("Error!!!");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          localStorage.setItem("token", data.token);
          setStore({ token: data.token });
          getActions().loadUser();
          return true;
        } catch (error) {
          console.error("Error!!!!!", error);
        }
      },

      loadUser: () => {
        const store = getStore();
        fetch(getStore().urlapi + "userinfo", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + store.token,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ user: data.user });
            console.log(data.user);
          })
          .catch((error) => console.error(error));
      },

      createUser: (newStudent) => {
        fetch(getStore().urlapi + "signup", {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((responseAsJason) => {
            setStore({
              user: [...getStore().newUser, responseAsJason],
            });
          })
          .catch((err) => console.log(err));
      },
      createChef: (newChef) => {
        fetch(getStore().urlapi + "newchef", {
          method: "POST",
          body: JSON.stringify(newChef),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((responseAsJason) => {
            setStore({
              chef: [...getStore().newChef, responseAsJason],
            });
          })
          .catch((err) => console.log(err));
      },
      editUser: (user) => {
        const token = localStorage.getItem("token");
        fetch(getStore().urlapi + "editstudent", {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then((res) => res.json())
          .then((responseAsJason) => responseAsJason)
          .catch((err) => console.log(err));
      },

      createCourse: (newCourse) => {
        fetch(getStore().urlapi + "newcourse", {
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

      syncTokenFromSessionStore: () => {
        const token = localStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        localStorage.removeItem("token");
        setStore({ token: null });
      },

      // login: async (email, password) => {
      //   const opts = {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //   };
      //   try {
      //     const resp = await fetch(getStore().urlapi + "token", opts);
      //     if (resp.status !== 200) {
      //       alert("There has been an error!!!");
      //       return false;
      //     }

      //     const data = await resp.json();
      //     sessionStorage.getItem("token", data);
      //     setStore({ token: data });
      //     console.log("token", getStore().token);
      //     return true;
      //   } catch (error) {
      //     console.error("There was been an error login in");
      //   }
      // },

      getMessage: () => {
        const store = getStore();
        const opts = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        };
        // fetching data from the backend
        fetch(getStore().urlapi + "hello", opts)
          .then((res) => res.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      deleteAccount: () => {
        const store = getStore();
        fetch(getStore().urlapi + "deleteaccount", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.warn(data);
          });
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
    },
  };
};

export default getState;
