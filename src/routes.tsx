import React from "react";
import {
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import Home from "./screens/home";

export default function Routes() {
  return (
      <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="*">
              <Redirect to="/home" />
          </Route>
      </Switch>
  );
}