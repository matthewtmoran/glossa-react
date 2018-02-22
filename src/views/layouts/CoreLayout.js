import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import ModalRoot from '../components/ModalRoot';
import Navbar from '../components/Navbar';
import SideDrawer from "../components/SideDrawer";

const styles = {
  CoreLayout: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  }
};

export const CoreLayout = ({component: Component, ...rest}) => {
  const {classes} = rest;
  return (
    <Route
      {...rest}
      render={props => (
        <div className={classes.CoreLayout}>
          <Navbar/>
          <SideDrawer/>
          <Component {...props}/>
          <ModalRoot/>
        </div>
      )}
    />
  )
};

CoreLayout.propTypes = {
  component: PropTypes.func.isRequired
};

export default withStyles(styles)(CoreLayout);