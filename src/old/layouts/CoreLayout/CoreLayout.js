import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import SideDrawer from '../../components/Drawer/Drawer';

export const CoreLayout = ({component: Component, ...rest}) => {
  return (

    <Route
      {...rest}
      render={props => (
      <div>
        <SideDrawer/>
        <NavBar />
        <Component />
      </div>
    )} />
  )
};

export default CoreLayout;
