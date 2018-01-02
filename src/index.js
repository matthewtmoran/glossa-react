import React from 'react';

import { render } from 'react-dom';

import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from "./views/layouts/app";
import configureStore from "./state/store";

const reduxStore = configureStore(  );

const RootHtml = ( ) => (
  <ReduxProvider store={ reduxStore }>
    <MuiThemeProvider>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </ReduxProvider>
);

render( <RootHtml />, document.getElementById( "react-root" ) );
