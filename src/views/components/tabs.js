import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import TranscriptionDetail from '../components/transcription/TranscriptionDetail';
import Baseline from '../components/Baseline';
import { Link, Route, matchPath, HashRouter, Switch, withRouter } from "react-router-dom";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flex: 1
  },
});

const mountTabValueFactory = (location, tabId) => {
  return (route) => {
    return !!matchPath(location.pathname, { path: route, exact: true }) ? tabId : Infinity;
  }
};

class Gist extends React.Component {
  render () {
    return (
      <div>
        <h1>Gist</h1>
      </div>
    )
  }
}

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };
  //
  //
  //
  // handleChange = (event, value) => {
  //   console.log('value', value);
  //   this.setState({ value });
  // };
  //
  // handleChangeIndex = index => {
  //   console.log('index', index);
  //   this.setState({ value: index });
  //   this.props.changeTab(index)
  // };

  render() {
    const {history, match, classes, theme, selectedTranscription} = this.props;
    const tabId = 'myTabId';
    const getTabValue = mountTabValueFactory(history.location, tabId);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={tabId}>
            <Tab
              value={getTabValue('/corpus/meta')}
              label="tab1"
              onClick={() => history.push(`${match.url}/meta`)}/>
            <Tab
              value={getTabValue('/corpus/baseline')}
              label="tab2"
              onClick={() => history.push(`${match.url}/baseline`)}
            />
            <Tab
              value={getTabValue('/corpus/gist')}
              label="tab3"
              onClick={() => history.push(`${match.url}/gist`)}
            />
          </Tabs>
        </AppBar>
        <TabContainer dir={theme.direction}>
          <Route path={`${match.url}/meta`} render={(props) => <TranscriptionDetail selectedTranscription={selectedTranscription}/>}/>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Route path={`${match.url}/baseline`} component={Baseline}/>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Route path={`${match.url}/gist`} component={Gist}/>
        </TabContainer>
      </div>
    )


  }
}


FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(FullWidthTabs));