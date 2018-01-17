import React from 'react';
import {connect} from 'react-redux'
import {notebookOperations} from '../../state/ducks/notebook/index';
import {uiOperations} from '../../state/ducks/ui/index';
import Notebooks from '../components/notebook/NotebookList';
import ModalRoot from '../components/notebook/modal';

class Notebook extends React.Component {
  render() {
    const {notebooks, toggleModal, select, show} = this.props;
    return (
      <div className="Notebook">
        <h1> Notebook component</h1>
        <Notebooks notebooks={notebooks} toggleModal={toggleModal} select={select} show={show}/>
        <ModalRoot/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    selectedNotebook: state.notebooks.details,
    notebooks: state.notebooks.list,
    searchTerm: state.search.searchTerm,
    modalOpen: state.ui.modalOpen,
  }
};

const mapDispatchToProps = {
  toggleModal: uiOperations.toggleModal,
  select: notebookOperations.select,
  create: notebookOperations.create,
  show: uiOperations.showModal
};

Notebook = connect(mapStateToProps, mapDispatchToProps)(Notebook);

export default Notebook;