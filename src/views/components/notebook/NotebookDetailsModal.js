import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';


class NotebookDetailsModal extends React.Component {
  handleClose = () => {
    this.props.hide();
  };

  render() {
    const {notebook } = this.props;
    return (
      <div>
        <Typography type="title" id="modal-title">
          {notebook.title}
        </Typography>
        <Typography type="subheading" id="simple-modal-description">
          {notebook.desc}
        </Typography>
        <IconButton onClick={this.handleClose.bind(this)}>
          <CloseIcon/>
        </IconButton>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    notebook: state.ui.modal.modalProps
  }
};

const mapDispatchToProps = {
  hide: uiOperations.hideModal
};


NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(NotebookDetailsModal);

export default NotebookDetailsModal ;