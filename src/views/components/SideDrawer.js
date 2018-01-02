import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { uiOperations } from "../../state/ducks/ui";

class SideDrawer extends React.Component {

  handleClose = () => this.props.toggleDrawer(this.props.drawerOpen);

  render() {
    return (
      <Drawer
        open={this.props.drawerOpen}
        docked={false}
        onRequestChange={(open) => this.props.toggleDrawer(this.props.drawerOpen)}
        width={200}>
        <MenuItem onClick={this.handleClose}  containerElement={<Link to="/corpus" />}>Corpus</MenuItem>
        <MenuItem onClick={this.handleClose}  containerElement={<Link to="/notebook" />}>Notebook</MenuItem>
        <MenuItem onClick={this.handleClose}  containerElement={<Link to="/settings" />}>Settings</MenuItem>
      </Drawer>
    );
  }
}


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