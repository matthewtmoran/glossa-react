import React from 'react';
import NotebookForm from './NotebookForm';
import NotebookList from './NotebookList';

const Notebooks = (props) => {
  return (
    <div className="Notebooks">
      <h1> Notebook component</h1>
      <NotebookForm/>
      <NotebookList {...props}/>
    </div>
  )
};

export default Notebooks;
