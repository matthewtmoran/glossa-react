import React from "react";
import { connect } from "react-redux";

import { uiOperations } from "../../../state/ducks/ui/index";
import {
  notebookOperations,
  notebookSelectors
} from "../../../state/ducks/notebook/index";
import { imageSelectors } from "../../../state/ducks/image/index";

import NotebookForm from "./NotebookForm";
import ImageUpload from "../ImageUpload";
import NotebookMedia from "./NotebookMedia";
import SaveStatus from "./NotebookSaveStatus";
import NotebookActions from "./NotebookActions";

import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";
import VisibilityOffIcon from "material-ui-icons/VisibilityOff";
import DoneIcon from "material-ui-icons/Done";
import CachedIcon from "material-ui-icons/Cached";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  button: {
    position: "absolute",
    top: 0,
    right: "12px",
    margin: "auto"
  },
  info: {
    position: "absolute",
    bottom: 0,
    left: "12px",
    margin: "auto"
  },
  inline: {
    display: "inline-block"
  },
  progress: {
    paddingTop: "10px"
  },
  contentParent: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  contentChild: {
    display: "flex",
    flexDirection: "row",
    flex: "0 0 50%",
    height: "50%"
  },
  mediaSection: {
    extend: "contentChild",
    minHeight: "200px",
    textAlign: "center",
    flex: 1
  },
  paddingSection: {
    padding: "32px 32px 8px 32px",
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  buttons: {
    display: "block",
    margin: "25px auto"
    // flexDirection: 'row',
  },
  mediaImage: {
    margin: "auto",
    width: "100%",
    overflow: "hidden"
  },
  imagePreview: {
    maxHeight: "600px"
  }
});

class NotebookDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.baseState = JSON.stringify(this.props.notebook);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      notebook: Object.assign({}, this.props.notebook),
      image: this.props.image
    });
  }

  getInitialState() {
    return {
      notebook: {
        title: "Notebook"
      },
      image: null,
      imageMeta: null,
      imageFile: null,
      imageAction: null,
      isSaved: true
    };
  }

  //handles the image preview selection
  handleImageSelect(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = e => {
      this.setState(currentState => {
        return {
          image: e.target.result,
          imageFile: file,
          imageAction: currentState.imageAction === "REMOVE" ? "REPLACE" : "ADD"
        };
      });
      this.setState({
        image: e.target.result,
        imageFile: file
      });
    };
  }

  //close button event
  handleCancel() {
    this.setState(currState => {
      this.props.deselectAndModal();
      return {
        notebook: JSON.parse(this.baseState)
      };
    });
  }

  hideImagePreview() {
    // let notebook = { ...this.state.notebook };
    // notebook.image = null;
    // this.setState({ notebook });
    this.setState(currentState => {
      return {
        image: null,
        imageFile: currentState.notebook.image ? "REMOVE" : null,
        imageAction: currentState.notebook.image ? "REMOVE" : null
      };
    });
  }

  //handels change of notebook input fields
  handleChange(field, value) {
    let notebook = this.state.notebook;
    notebook[field] = value;
    this.setState(prevState => {
      return { notebook, isSaved: false };
    });
  }

  handleUpdate() {
    console.log("handleUpdate");
    this.setState({ isSaved: true });
    this.props.update(this.state);
  }

  render() {
    const { notebook, image, classes, request, deselectAndModal } = this.props;
    return (
      <div className={classes.contentParent}>
        <div className={classes.mediaSection}>
          {this.state.image ? (
            <NotebookMedia
              className={classes.imagePreview}
              remove={this.hideImagePreview.bind(this)}
              imageSrc={this.state.image.path || this.state.image}
            />
          ) : (
            <ImageUpload onImageSelect={this.handleImageSelect}>
              Add Image
            </ImageUpload>
          )}
          <Button className={classes.buttons} variant="raised">
            Add Audio
          </Button>
        </div>

        <div className={classes.paddingSection}>
          <NotebookForm
            notebook={this.state.notebook}
            handleChange={this.handleChange}
            className={classes.contentChild}
            deselectAndModal={deselectAndModal}
          />
          <NotebookActions
            className={classes.formActions}
            isSaved={this.state.isSaved}
            handleCancel={this.handleCancel}
            handleUpdate={this.handleUpdate}
          />
          {/*<SaveStatus className={classes.info} request={request.requesting} />*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notebook, image } = notebookSelectors.getDetails(state);
  return {
    notebook,
    image
  };
};

const mapDispatchToProps = {
  update: notebookOperations.updateNotebook,
  deselectAndModal: uiOperations.deselectAndModal,
  hideImagePreview: notebookOperations.hideImage,
  showImagePreview: notebookOperations.showImage
};

NotebookDetailsModal = connect(mapStateToProps, mapDispatchToProps)(
  NotebookDetailsModal
);

export default withStyles(styles)(NotebookDetailsModal);
