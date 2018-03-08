import React from 'react';
import {connect} from 'react-redux';

import {uiOperations} from '../../../state/ducks/ui/index';
import {notebookOperations} from '../../../state/ducks/notebook/index';

import NotebookForm from './NotebookForm';
import ImageUpload from '../ImageUpload';
import AudioUpload from '../AudioUpload';
import AudioPreview from '../AudioPreview';
import NotebookMedia from './NotebookMedia';

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


class NotebookDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      notebook: {...this.props.notebook}
    })
  }


  handleClose = () => {
    this.props.deselectAndModal();
  };


  showImagePreview = (file) => {
    let notebook = {...this.state.notebook};
    notebook.image = file;
    this.setState({notebook});
  };

  showAudioPreview(file) {
    console.log('showAudioPreview');
    const notebook = {...this.state.notebook};
    notebook.audio = file;
    this.setState({notebook});
  }

  hideImagePreview = (file) => {
    let notebook = {...this.state.notebook};
    notebook.image = null;
    this.setState({notebook});
  };

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.notebook) !== JSON.stringify(nextProps.notebook)) {
      this.setState({notebook: nextProps.notebook});
    }
  }

  handleChange(field, value) {
    let notebook = this.state.notebook;
    notebook[field] = value;
    this.setState({notebook});
  }

  handleUpdate() {
    this.props.update(this.state.notebook);
  }

  onTimeUpdate(data) {
    console.log('onTimeUpdate', data);
  }
  onProgress(data) {
    console.log('onProgress', data);
  }


  render() {
    const {
      notebook,
      classes,
      request,
      deselectAndModal,
    } = this.props;
    return (
      <div className={classes.contentParent}>
        <div className={classes.mediaSection}>

          {(this.state.notebook.image) ? (
            <NotebookMedia className={classes.imagePreview}
                           remove={this.hideImagePreview.bind(this)}
                           imageSrc={this.state.notebook.image.path}/>
          ) : (<ImageUpload showImagePreview={this.showImagePreview.bind(this)}>Add Image</ImageUpload>)}


          {(this.state.notebook.audio) ? (
            <AudioPreview audioSrc={this.state.notebook.audio.path}
                          isPlaying={false}
                          defaultTime={0}
                          onTimeUpdate={this.onTimeUpdate.bind(this)}
                          onProgress={this.onProgress.bind(this)}
                            />
          ) : (
            <AudioUpload showAudioPreview={this.showAudioPreview.bind(this)}/>
          )}

          {/*<Button className={classes.buttons} raised={true}>Add Audio</Button>*/}

        </div>

        <div className={classes.paddingSection}>

          <NotebookForm notebook={notebook}
                        handleChange={this.handleChange.bind(this)}
                        className={classes.contentChild}
                        deselectAndModal={deselectAndModal}/>



          <div className={classes.formActions}>
            <Button onClick={this.handleUpdate.bind(this)}>Save Text</Button>
            <Button onClick={this.handleClose.bind(this)}>{this.state.unsaved ? 'Cancel' : 'Close' }</Button>
          </div>


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

// defaultTime: PropTypes.number,
//   onProgress: React.PropTypes.func.isRequired,
//   onTimeUpdate: React.PropTypes.func.isRequired,
//   onEnd: React.PropTypes.func.isRequired


const mapStateToProps = state => {
  return {
    notebook: state.notebooks.details,
    request: state.notebooks.request,
    imagePreview: state.notebooks.imagePreview
  }
};

const mapDispatchToProps = {
  update: notebookOperations.updateNotebook,
  deselectAndModal: uiOperations.deselectAndModal,
  hideImagePreview: notebookOperations.hideImage,
  showImagePreview: notebookOperations.showImage
};


NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(NotebookDetailsModal);

export default withStyles(styles)(NotebookDetailsModal);