import React from 'react';
import {connect} from 'react-redux'
import {notebookOperations} from '../../state/ducks/notebook/index';
import {uiOperations} from '../../state/ducks/ui/index';
import NotebookList from '../components/notebook/NotebookList';
import ModalRoot from '../components/ModalRoot';
import CircularIndeterminate from '../components/ProgressCircle';

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


  render() {
    const {
      classes,
      notebooks,
      isRequesting,
      selectAndModal,
      update
    } = this.props;
    return (
      <div className="Notebook">
        {isRequesting && (
          <CircularIndeterminate/>
        )}

          <NotebookList notebooks={notebooks}
                        selectAndModal={selectAndModal}/>

        <Button onClick={() => selectAndModal(null) } fab mini color="primary" aria-label="add"
                className={classes.button}>
          <AddIcon />
        </Button>
        <ModalRoot update={update}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks.list,
    isRequesting: state.notebooks.request.requesting,
    searchTerm: state.search.searchTerm,
    // notebook: state.notebooks.details
  }
};

const mapDispatchToProps = {
  create: notebookOperations.create,
  selectAndModal: (n) => uiOperations.selectAndModal(n),
  update: (d) => notebookOperations.updateNotebook(d),
  fetch: (n) => notebookOperations.fetchNotebooks(n),
};

Notebook = connect(mapStateToProps, mapDispatchToProps)(Notebook);

export default withStyles(styles)(Notebook);