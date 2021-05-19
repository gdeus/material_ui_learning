import React from "react";
import {
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import CreateCompany from "./screens/createCompany";
import Home from "./screens/home";

export default function Routes() {
  return (
      <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/createCompany" component={CreateCompany} />
          <Route path="*">
              <Redirect to="/home" />
          </Route>
      </Switch>
  );
}