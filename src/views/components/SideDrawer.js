import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import List, {ListItem, ListItemText}  from 'material-ui/List';
import {uiOperations} from "../../state/ducks/ui";

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class SideDrawer extends React.Component {
  render() {
    const {classes, drawerOpen, toggleDrawer} = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            component={props => <Link to="/corpus" {...props}/>}>

            <ListItemText primary="Corpus" />

          </ListItem>
          <ListItem
            button
            component={props => <Link to="/notebook" {...props}/>}>
            <ListItemText primary="Notebook" />
          </ListItem>
          <MenuItem onClick={()=>toggleDrawer(drawerOpen)} component={props => <Link to="/corpus"/>}>Corpus</MenuItem>
        </List>
      </div>
    );
    return (

    <Drawer open={drawerOpen} onClose={() => toggleDrawer(drawerOpen)}>
      <div
        tabIndex={0}
        role="button"
        onClick={ () => toggleDrawer(drawerOpen)}
        onKeyDown={() => toggleDrawer(drawerOpen)}
      >
        {sideList}
      </div>
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
export default withStyles(styles)(SideDrawer);