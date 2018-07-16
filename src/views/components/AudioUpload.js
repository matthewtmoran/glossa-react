import React from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import FileUploadIcon from 'material-ui-icons/FileUpload';

const styles = theme => ({
  buttons: {
    display: 'block',
    margin: '25px auto'
  }
});

class AudioUpload extends React.Component {
  handleButtonClick() {

  }

  handleAudioChange(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.props.showAudioPreview({
        file: file,
        path: reader.result
      })
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <Button className={classes.buttons}
              raised
              component="label"
              onClick={this.handleButtonClick}
              label='Upload Audio'>Upload Audio
        <FileUploadIcon/>
        <input
          onChange={e => this.handleAudioChange(e) }
          style={{display: 'none'}}
          type="file"
          accept="audio/*"
          multiple={false}
        />
      </Button>
    )
  }
}




export default withStyles(styles)(AudioUpload);