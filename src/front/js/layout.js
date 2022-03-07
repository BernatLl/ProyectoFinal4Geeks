import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { NavTop } from "./component/NavTop";
import { CreateCourse } from "./pages/CreateCourse";
import { Student } from "./pages/student";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import {Search} from "./component/search";
import Payment from "./pages/payment";
import { Chef } from "./pages/chef";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "We Cook!";

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/createcourse">
              <CreateCourse />
            </Route>
            <Route exact path="/student">
							<Student />
						</Route>
            <Route exact path="/login">
							<Login />
						</Route>
            <Route exact path="/search">
							<Search/>
						</Route>
            <Route exact path="/payment">
							<Payment/>
						</Route>
            <Route exact path="/chef">
							<Chef/>
						</Route>

					</Switch>
					<Footer />
         
        </div>
      </BrowserRouter>
    </div>
  );
	
};

export default injectContext(Layout);
