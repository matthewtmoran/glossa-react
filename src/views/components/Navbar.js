import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {uiOperations} from "../../state/ducks/ui";
import {searchOperations} from "../../state/ducks/search";

import {Toolbar} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';
import {red500, greenA200} from 'material-ui/styles/colors';


const MenuIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </SvgIcon>
);

const SearchIcon = (props) => (
  <SvgIcon {...props}>
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </SvgIcon>
);

let NavBar = (props) => {
  const {toggleDrawer, drawerOpen, searchFilter} = props;
  return (
    <Toolbar>
      <IconButton>
        <MenuIcon
          color={red500}
          hoverColor={greenA200}
          onClick={() => {
            toggleDrawer(drawerOpen);
          }}/>
      </IconButton>
      <IconButton>
        <SearchIcon/>
      </IconButton>
      <TextField
        hintText="Search..."
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