// ./client/src/routes.js
import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import Todos from "./containers/Todos";
import Todo from "./container/Todo";

export default (
  <Route path="/" compoent={App}>
    <IndexRoute component={Todos} />
    <Route path="/:id" component={Todo} />
  </Route>
);
