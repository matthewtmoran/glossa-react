import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link } from 'react-router-dom';

export const SettingsLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
      <div>
        <Link to={`/`}>Corpus</Link>
        <Link to={`/notebooks`}>Notebooks</Link>
        <Link to={`/profile`}>Profile</Link>
        <Component {...props} />
      </div>
    )} />
  )
};

SettingsLayout.propTypes = {
  component: PropTypes.func.isRequired
};

export default SettingsLayout;