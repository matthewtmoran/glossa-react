import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Meta from './Meta';
import Baseline from './Baseline';
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
    flex: 1,
    zIndex:1
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
  render() {
    const {history, match, classes, theme, selectedTranscription, update} = this.props;
    const tabId = 'myTabId';
    const getTabValue = mountTabValueFactory(history.location, tabId);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={tabId}>
            <Tab
              value={getTabValue(`${match.url}/meta`)}
              label="Meta"
              onClick={() => history.push(`${match.url}/meta`)}/>
            <Tab
              value={getTabValue(`${match.url}/baseline`)}
              label="Baseline"
              onClick={() => history.push(`${match.url}/baseline`)}
            />
          </Tabs>
        </AppBar>
        <TabContainer dir={theme.direction}>
          <Route path={`${match.url}/meta`} render={(props) => <Meta selectedTranscription={selectedTranscription} update={update}/>}/>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Route path={`${match.url}/baseline`} component={Baseline}/>
        </TabContainer>
      </div>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(FullWidthTabs));