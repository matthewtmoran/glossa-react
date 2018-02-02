import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';
import {notebookOperations} from '../../../state/ducks/notebook/index';

import NotebookForm from './NotebookForm';
import ImageUpload from '../ImageUpload';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import VisibilityOffIcon from 'material-ui-icons/VisibilityOff';
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

  },
  paddingSection: {
    padding: 8 * 4
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
  hideButton: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
    margin: 'auto',
  }
});

function getMediaSectionStyle(imagePreview) {
  let imgUrl = (imagePreview && imagePreview.imageSrc) ? imagePreview.imageSrc : imagePreview;

  if (imgUrl) {
    const mediaStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };
    return mediaStyle;
  }
  return imgUrl
}


class NotebookDetailsModal extends React.Component {
  handleClose = () => {
    this.props.deselectAndModal();
  };

  showImagePreview = (file) => {
    this.props.showImage(file);
  };

  hideImagePreview = (file) => {
    this.props.hideImage(file);
  };

  render() {
    const {
      notebook,
      classes,
      update,
      request,
      imagePreview,
      hideImagePreview,
      showImagePreview
    } = this.props;


    return (
      <div className={classes.contentParent}>
        <div className={classes.mediaSection}>

          {imagePreview ? (
            <div>
              <img className={classes.mediaImage} src={imagePreview.imageSrc} alt=""/>

              <IconButton className={classes.hideButton} onClick={hideImagePreview}>
                <VisibilityOffIcon/>
              </IconButton>

            </div>
          ) : (
            <ImageUpload showImagePreview={showImagePreview}>Add Image</ImageUpload>
          )}

          <Button className={classes.buttons} raised={true}>Add Audio</Button>

        </div>

        <div className={classes.paddingSection}>
          <NotebookForm notebook={notebook} update={update} className={classes.contentChild}/>
          <IconButton className={classes.button} onClick={this.handleClose.bind(this)}>
            <CloseIcon/>
          </IconButton>

          <div className={classes.info}>
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


      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    notebook: state.notebooks.details,
    request: state.notebooks.request,
    imagePreview: state.notebooks.imagePreview
  }
};

const mapDispatchToProps = {
  deselectAndModal: uiOperations.deselectAndModal,
  hideImagePreview: notebookOperations.hideImage,
  showImagePreview: notebookOperations.showImage
};


NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(NotebookDetailsModal);

export default withStyles(styles)(NotebookDetailsModal);