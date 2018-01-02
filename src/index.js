import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store, { history } from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
  <MuiThemeProvider>
      <App/>
  </MuiThemeProvider>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
