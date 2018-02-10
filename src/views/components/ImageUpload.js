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

class ImageUpload extends React.Component {
  handleButtonClick() {
    console.log('handleButtonClick');

  }

  handleImageChange(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.props.showImagePreview({
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
              label='My Label'>Upload Image
        <FileUploadIcon/>
        <input
          onChange={e => this.handleImageChange(e) }
          style={{display: 'none'}}
          type="file"
          accept="image/*"
          multiple={false}
        />
      </Button>
    )
  }
}


export default withStyles(styles)(ImageUpload);