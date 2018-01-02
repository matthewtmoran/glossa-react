import React from "react";
import { Link, Route, Switch, ReactDOM } from "react-router-dom";
import routes from "../../routes";

const App = ( ) => (
  <Switch>
      {routes.map(({layout: Component, ...route}) => (
        <Component key={route.path} path={route.path} component={route.component} exact />
      ))}
  </Switch>

);
export default App;