import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AuthLogin from "../Pages/AuthLogin";
import AuthRegister from "../Pages/AuthRegister";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
export default function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth-login" exact>
          <AuthLogin />
        </Route>
        <Route path="/auth-register" exact>
          <AuthRegister />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}