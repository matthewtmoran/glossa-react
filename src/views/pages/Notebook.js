import React from 'react';
import {connect} from 'react-redux'
import {notebookOperations} from '../../state/ducks/notebook/index';
import Notebooks from '../components/notebook/NotebookList';

class Notebook extends React.Component {
  render() {
    const {notebooks} = this.props;
    return (
      <div className="Notebook">
        <h1> Notebook component</h1>
        <Notebooks notebooks={notebooks}/>
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
  create: notebookOperations.create
};

Notebook = connect(mapStateToProps, mapDispatchToProps)(Notebook);

export default Notebook;