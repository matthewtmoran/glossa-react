import React from 'react';
import {connect} from 'react-redux'
import {notebookOperations} from '../../state/ducks/notebook/index';
import {uiOperations} from '../../state/ducks/ui/index';
import NotebookList from '../components/notebook/NotebookList';
import CircularIndeterminate from '../components/ProgressCircle';
import {NOTEBOOK_MODAL} from '../../state/ducks/ui/types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Notebook extends React.Component {

  componentDidMount() {
    this.props.fetch()
  }

  createNotebook() {

  }

  openModal(notebook) {
    this.props.selectAndModal({
      modalType: NOTEBOOK_MODAL,
      notebook: notebook
    })
  }


  render() {
    const {
      classes,
      notebooks,
      isRequesting,
      removeNotebook,
    } = this.props;
    return (
      <div className="Notebook">
        {isRequesting && (
          <CircularIndeterminate/>
        )}

          <NotebookList notebooks={notebooks}
                        selectAndModal={this.openModal.bind(this)}
                        removeNotebook={removeNotebook}/>

        <Button onClick={() => this.openModal({}) } fab mini color="primary" aria-label="add"
                className={classes.button}>
          <AddIcon />
        </Button>
        {/*<ModalRoot/>*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks.list,
    isRequesting: state.notebooks.request.requesting,
    searchTerm: state.search.searchTerm,
  }
};

const mapDispatchToProps = {
  create: notebookOperations.create,
  selectAndModal: (data) => uiOperations.selectAndModal(data),
  fetch: (n) => notebookOperations.fetchNotebooks(n),
  removeNotebook: (id) => notebookOperations.removeNotebook(id),
};

Notebook = connect(mapStateToProps, mapDispatchToProps)(Notebook);

export default withStyles(styles)(Notebook);