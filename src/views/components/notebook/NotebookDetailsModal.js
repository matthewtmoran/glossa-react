import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';

import NotebookForm from './NotebookForm';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  button: {
    position: 'absolute',
    top: 0,
    right: '12px',
    margin: 'auto'
  }
});

class NotebookDetailsModal extends React.Component {
  handleClose = () => {
    this.props.deselectAndModal();
  };

  render() {
    console.log('NotebookDetailsModal')
    const {notebook, classes, update} = this.props;
    return (
      <div>
        <NotebookForm notebook={notebook} update={update}/>
        <IconButton className={classes.button} onClick={this.handleClose.bind(this)}>
          <CloseIcon/>
        </IconButton>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    notebook: state.notebooks.details
  }
};

const mapDispatchToProps = {
  deselectAndModal: uiOperations.deselectAndModal
};


NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(NotebookDetailsModal);

export default withStyles(styles)(NotebookDetailsModal);