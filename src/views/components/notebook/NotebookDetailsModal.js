import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';

import NotebookForm from './NotebookForm';

import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import DoneIcon from 'material-ui-icons/Done';
import CachedIcon from 'material-ui-icons/Cached';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  button: {
    position: 'absolute',
    top: 0,
    right: '12px',
    margin: 'auto'
  },
  info: {
    position: 'absolute',
    top: 0,
    left: '12px',
    margin: 'auto'
  },
  info2: {
    position: 'absolute',
    top: 0,
    left: '100px',
    margin: 'auto'
  },
  inline: {
    display: 'inline-block',
  },
  progress: {
    paddingTop: '10px',
  }
});

class NotebookDetailsModal extends React.Component {
  handleClose = () => {
    this.props.deselectAndModal();
  };

  render() {
    const {notebook, classes, update, request} = this.props;
    return (
      <div>
        <NotebookForm notebook={notebook} update={update}/>
        <IconButton className={classes.button} onClick={this.handleClose.bind(this)}>
          <CloseIcon/>
        </IconButton>

        <div className={classes.info} >
            {!!request.requesting ?
            (
              <IconButton disabled={true}>
                <CachedIcon/>
                <Typography type="caption">Saving... </Typography>
              </IconButton>
            ) : (
              <IconButton disabled={true}>
                <DoneIcon/>
                <Typography type="caption">Saved!</Typography>
              </IconButton>
              )
            }
        </div>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    notebook: state.notebooks.details,
    request: state.notebooks.request,
  }
};

const mapDispatchToProps = {
  deselectAndModal: uiOperations.deselectAndModal
};


NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(NotebookDetailsModal);

export default withStyles(styles)(NotebookDetailsModal);