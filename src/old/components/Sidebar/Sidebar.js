import React from 'react';
import TranscriptionsContainer from '../../containers/TranscriptionsContainer';
import NotebookList from '../../components/Notebooks/NotebookList';


const Sidebar = ({notebooks, searchTerm}) => {
  return (
    <div className="Sidebar">
      <h5>Transcriptions</h5>
      <TranscriptionsContainer />
      <NotebookList notebooks={notebooks} searchTerm={searchTerm} />
    </div>
  )
};



export default Sidebar;