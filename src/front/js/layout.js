import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { NavTop } from "./component/NavTop";
import { CreateCourse } from "./pages/CreateCourse";
import { Student } from "./pages/student";
import { Footer } from "./component/footer";
import { CourseView } from "./pages/CourseView";
import { ChefProfile } from "../js/pages/ChefProfile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "We Cook!";

  return (
    <BrowserRouter>
      <NavTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/CreateCourse">
          <CreateCourse />
        </Route>
        <Route exact path="/CourseView">
          <CourseView />
        </Route>
        <Route exact path="/student">
          <Student />
        </Route>
        <Route exact path="/chef">
          <ChefProfile />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
