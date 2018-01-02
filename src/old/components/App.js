import React  from 'react';
import CorpusContainer from '../containers/CorpusContainer';
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import NotebookContainer from '../containers/NotebookContainer';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import '../App.css';

let App = () => {
  return (
    <div className="App">
      <Router >
        <Switch>
          <CoreLayout path="/" component={CorpusContainer} exact/>
          <CoreLayout path="/notebooks" component={NotebookContainer} exact/>

          {/*<SettingsLayout path="/profile" component={Profile}/>*/}
        </Switch>
      </Router>
    </div>
  )
};

App = connect()(App);

export default App;