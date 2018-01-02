import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import * as actionCreators from '../../actions';

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
    drawerOpen: state.drawerOpen,
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

SideDrawer = connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

export default SideDrawer;