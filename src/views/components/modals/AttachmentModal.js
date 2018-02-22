import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';
import {notebookOperations} from '../../../state/ducks/notebook/index';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
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
    bottom: 0,
    left: '12px',
    margin: 'auto'
  },
  inline: {
    display: 'inline-block',
  },
  progress: {
    paddingTop: '10px',
  },
  contentParent: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  contentChild: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 50%',
    height: '50%'
  },
  mediaSection: {
    extend: 'contentChild',
    minHeight: '200px',
    textAlign: 'center',
    flex: 1
  },
  paddingSection: {
    padding: '32px 32px 8px 32px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  buttons: {
    display: 'block',
    margin: '25px auto'
    // flexDirection: 'row',
  },
  mediaImage: {
    margin: 'auto',
    width: '100%',
    overflow: 'hidden'
  },
  imagePreview: {
    maxHeight: '600px'
  }

});


class AttachmentModal extends React.Component {

  handleClose = () => {
    this.props.deselectAndModal();
  };


  render() {
    const {
      classes,
      request,
      deselectAndModal,
    } = this.props;
    return (
      <div className={classes.contentParent}>
      {/*<div className={classes.contentParent}>*/}

        <h1>attachment modal</h1>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    notebooks: state.notebooks.list,
    request: state.notebooks.request,
  }
};

const mapDispatchToProps = {
  deselectAndModal: uiOperations.deselectAndModal,
};


AttachmentModal = connect(mapStateToProps, mapDispatchToProps)(AttachmentModal);

export default withStyles(styles)(AttachmentModal);