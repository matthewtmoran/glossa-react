import React from "react";
import {  Switch } from "react-router-dom";
import routes from "../../routes";

const App = ( ) => (
    <Switch>
        {routes.map(({layout: Component, ...route}) => (
          <Component key={route.path} path={route.path} component={route.component} exact={route.exact} {...route} />
        ))}
    </Switch>
);
export default App;