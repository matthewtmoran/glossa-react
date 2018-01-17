import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes/index";

const App = ( ) => (
    <Switch>
        <Route exact path="/" component={() => <Redirect to="/corpus" />}/>
        <Route exact path="/corpus" component={() => <Redirect to="/corpus/meta" />}/>
        {routes.map(({layout: Component, ...route}) => (
          <Component key={route.path} path={route.path} component={route.component} exact={route.exact} {...route} />
        ))}
    </Switch>
);
export default App;