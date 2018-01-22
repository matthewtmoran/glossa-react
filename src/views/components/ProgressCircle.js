import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  parent: {
    textAlign: 'center'
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.parent}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);