import React from 'react';

import { render } from 'react-dom';

import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import App from "./views/layouts/app";
import configureStore from "./state/store";
import Reboot from 'material-ui/Reboot';


const theme = createMuiTheme({
  palette: {},
});

const reduxStore = configureStore(  );

const RootHtml = ( ) => (
  <MuiThemeProvider theme={theme}>
    <Reboot>
      <ReduxProvider store={ reduxStore }>
          <Router>
            <App />
          </Router>
      </ReduxProvider>
    </Reboot>
  </MuiThemeProvider>
);

render( <RootHtml />, document.getElementById( "react-root" ) );
