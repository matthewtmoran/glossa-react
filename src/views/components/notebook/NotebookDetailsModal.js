import React from 'react';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import CloseIcon from 'material-ui-icons/Close';

function rand() {
  return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: 'absolute',
    width: '50%',
    minHeight: '400px',
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

class NotebookDetailsModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {notebook} = this.props;
    return (
      <div>
        <Modal
          disableBackdropClick={true}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <Typography type="title" id="modal-title">
              {notebook.title}
            </Typography>
            <Typography type="subheading" id="simple-modal-description">
              {notebook.desc}
            </Typography>


            <IconButton onClick={this.handleClose}>
              <CloseIcon/>
            </IconButton>
          </div>
        </Modal>

      </div>
    );
  }
}

export default NotebookDetailsModal ;