import React from 'react';
import { Link, Route, Switch } from "react-router-dom";

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