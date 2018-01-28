import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import NotebookCard from './NotebookCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  subroot: {
    maxWidth: '100%'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AdvancedGridList(props) {
  const {classes, notebooks, toggleModal, select, selectAndModal} = props;

  return (
    <div className={classes.root}>
      <Grid className={classes.subroot} container spacing={24}>

        {notebooks.map((notebook, index ) => (
          <Grid key={notebook._id item xs={12} sm={6} md={3}>
            <NotebookCard notebook={notebook} toggleModal={toggleModal} select={select} selectAndModal={selectAndModal}/>
          </Grid>
        ))}

      </Grid>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);