import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

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

CoreLayout.propTypes = {
  component: PropTypes.func.isRequired
};

export default CoreLayout