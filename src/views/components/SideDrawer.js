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
    const {classes, isOpen, toggleDrawer} = this.props;
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
          <MenuItem onClick={()=>toggleDrawer(isOpen)} component={props => <Link to="/corpus"/>}>Corpus</MenuItem>
        </List>
      </div>
    );

    return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(isOpen)}>
      <div
        tabIndex={0}
        role="button"
        onClick={ () => toggleDrawer(isOpen)}
        onKeyDown={() => toggleDrawer(isOpen)}>

        {sideList}

      </div>
    </Drawer>

    );
  }
}

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isOpen: state.ui.drawer.isOpen,
  }
};

const mapDispatchToProps = {
  toggleDrawer: uiOperations.toggleDrawer,
};


SideDrawer = connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
export default withStyles(styles)(SideDrawer);