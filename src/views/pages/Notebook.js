import React from "react";
import { connect } from "react-redux";
import {
  notebookOperations,
  notebookSelectors
} from "../../state/ducks/notebook/index";
import { uiOperations } from "../../state/ducks/ui/index";
import { imageOperations, imageSelectors } from "../../state/ducks/image/index";
// import { getNotebooks } from "../../state/ducks/notebook/selectors";

import NotebookList from "../components/notebook/NotebookList";
import ModalRoot from "../components/ModalRoot";
import CircularIndeterminate from "../components/ProgressCircle";

import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Notebook extends React.Component {
  componentDidMount() {
    //TODO: use selector to call both these???
    this.props.fetchNotebooks();
    this.props.fetchImages();
  }

  render() {
    const {
      classes,
      notebooks,
      images,
      isRequesting,
      selectAndModal,
      removeNotebook
    } = this.props;
    console.log("notebooks.length", notebooks.length);
    return (
      <div className="Notebook">
        {isRequesting && <CircularIndeterminate />}

        <NotebookList
          notebooks={notebooks}
          images={images}
          selectAndModal={selectAndModal}
          removeNotebook={removeNotebook}
        />

        <Button
          onClick={() => selectAndModal({})}
          variant="fab"
          mini
          color="primary"
          aria-label="add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
        <ModalRoot />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notebooks: notebookSelectors.getNotebooks(state.entities.notebooks),
  images: imageSelectors.getImages(state.entities.images)
});

const mapDispatchToProps = {
  create: notebookOperations.create,
  selectAndModal: id => uiOperations.selectAndModal(id),
  fetchNotebooks: n => notebookOperations.fetchNotebooks(n),
  fetchImages: n => imageOperations.fetchImages(n),
  removeNotebook: n => notebookOperations.removeNotebook(n)
};

Notebook = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);

export default withStyles(styles)(Notebook);
