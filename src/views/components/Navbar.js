import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {uiOperations} from "../../state/ducks/ui";
import {searchOperations} from "../../state/ducks/search";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  navBar: {
    zIndex: 9999,
  },
});

let NavBar = (props) => {
  const {classes, toggleDrawer, isOpen, searchFilter} = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.navBar}>
        <IconButton>
          <MenuIcon
            onClick={() => {
              toggleDrawer(isOpen);
            }}/>
        </IconButton>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <TextField
          placeholder="Search..."
          fullWidth={true}
          onChange={(e) => {
            e.preventDefault();
            searchFilter(e.target.value);
          }}
        />

      </Toolbar>
    </AppBar>
  )
};

NavBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  searchFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isOpen: state.ui.drawer.isOpen,
  }
};

const mapDispatchToProps = {
  toggleDrawer: uiOperations.toggleDrawer,
  searchFilter: searchOperations.set
};

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default withStyles(styles)(NavBar);