import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {uiOperations} from "../../state/ducks/ui";

class SideDrawer extends React.Component {
  render() {
    const {drawerOpen, toggleDrawer} = this.props;
    return (
      <Drawer
        open={drawerOpen}
        docked={false}
        onRequestChange={(open) => toggleDrawer(drawerOpen)}
        width={200}>
        <MenuItem onClick={()=>toggleDrawer(drawerOpen)} containerElement={<Link to="/corpus"/>}>Corpus</MenuItem>
        <MenuItem onClick={()=>toggleDrawer(drawerOpen)} containerElement={<Link to="/notebook"/>}>Notebook</MenuItem>
        <MenuItem onClick={()=>toggleDrawer(drawerOpen)} containerElement={<Link to="/settings"/>}>Settings</MenuItem>
      </Drawer>
    );
  }
}

SideDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawerOpen: state.ui.drawerOpen,
  }
};

const mapDispatchToProps = {
  toggleDrawer: uiOperations.toggleDrawer,
};


SideDrawer = connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

export default SideDrawer;