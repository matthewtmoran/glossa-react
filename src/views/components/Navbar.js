import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {uiOperations} from "../../state/ducks/ui";
import {searchOperations} from "../../state/ducks/search";

import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
// import SvgIcon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';

let NavBar = (props) => {
  const {toggleDrawer, drawerOpen, searchFilter} = props;
  return (
    <Toolbar>
      <IconButton>
        <MenuIcon
          // color={red}
          // hoverColor={green}
          onClick={() => {
            toggleDrawer(drawerOpen);
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
  )
};

NavBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  searchFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawerOpen: state.ui.drawerOpen,
  }
};

const mapDispatchToProps = {
  toggleDrawer: uiOperations.toggleDrawer,
  searchFilter: searchOperations.set
};

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBar;