import React from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { uiOperations } from "../../state/ducks/ui";

class SideDrawer extends React.Component {

  constructor(props) {
    super(props);
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.props.toggleDrawer(this.props.drawerOpen);

  render() {
    return (
      <Drawer
        open={this.props.drawerOpen}
        docked={false}
        onRequestChange={(open) => this.props.toggleDrawer(this.props.drawerOpen)}
        width={200}>
        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
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