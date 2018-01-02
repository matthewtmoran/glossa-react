import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Navbar from '../components/Navbar';
import SideDrawer from "../components/SideDrawer";

export const CoreLayout = ({component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={props => (
        <div>
          <Navbar/>
          <SideDrawer/>
          <Component/>
        </div>
      )}
    />
  )

};

export default CoreLayout