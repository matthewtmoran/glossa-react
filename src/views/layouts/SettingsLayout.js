import React from 'react';
import { Route } from "react-router-dom";

export const SettingsLayout = ({component: Component, ...rest}) => {

  console.log('SettingsLayout');
  return (
    <Route
      {...rest}
      render={props => (
        <div>
          <Component/>
        </div>
      )}
    />
  )

};

export default SettingsLayout