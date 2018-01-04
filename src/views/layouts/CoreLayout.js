import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from '../components/Navbar';
import SideDrawer from "../components/SideDrawer";
// import Grid from 'material-ui/Grid';

export const CoreLayout = ({component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={props => (
        <div className="CoreLayout">
          <Navbar/>
          <SideDrawer/>
          {/*<Grid container spacing={24}>*/}
            <Component/>
          {/*</Grid>*/}
        </div>
      )}
    />
  )
};

CoreLayout.propTypes = {
  component: PropTypes.func.isRequired
};

export default CoreLayout