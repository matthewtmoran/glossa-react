import React from 'react';
import {connect} from 'react-redux'
import {notebookOperations} from '../../state/ducks/notebook/index';
import {uiOperations} from '../../state/ducks/ui/index';
import Notebooks from '../components/notebook/NotebookList';
import ModalRoot from '../components/ModalRoot';

class Notebook extends React.Component {
  render() {
    const {notebooks, show} = this.props;
    return (
      <div className="Notebook">
        <h1> Notebook component</h1>
        <Notebooks notebooks={notebooks} show={show}/>
        <ModalRoot/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    notebooks: state.notebooks.list,
    searchTerm: state.search.searchTerm,
  }
};

const mapDispatchToProps = {
  create: notebookOperations.create,
  show: uiOperations.showModal
};

Notebook = connect(mapStateToProps, mapDispatchToProps)(Notebook);

export default Notebook;