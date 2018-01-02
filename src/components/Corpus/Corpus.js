import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TranscriptionForm from '../transcription/TranscriptionForm';
import TranscriptionDetail from '../transcription/TranscriptionDetail';
import NotebookForm from "../Notebooks/NotebookForm";

const Corpus = ({...props}) => {
  console.log('props', props);
  return (
    <div>
      <Sidebar notebooks={props.notebooks} searchTerm={props.searchTerm} />
      <div className="MainContent">
        <h1>Corpus Component</h1>
        <TranscriptionDetail notebooks={props.notebooks} searchTerm={props.searchTerm} selectedTranscription={props.selectedTranscription} showNotebooks={props.showNotebooks} notebooksVisible={props.notebooksVisible}/>
        <TranscriptionForm addTranscription={props.addTranscription}/>
        <NotebookForm addNotebook={props.addNotebook}/>
      </div>
    </div>
  )};


// const Corpus = ({addTranscription, selectedTranscription, notebooks, addNotebook, searchTerm, showNotebooks, notebooksVisible}) => {
//   return (
//     <div>
//       <Sidebar notebooks={notebooks} searchTerm={searchTerm} />
//       <div className="MainContent">
//         <h1>Corpus Component</h1>
//         <TranscriptionDetail selectedTranscription={selectedTranscription} showNotebooks={showNotebooks} notebooksVisible={notebooksVisible}/>
//         <TranscriptionForm addTranscription={addTranscription}/>
//         <NotebookForm addNotebook={addNotebook}/>
//       </div>
//     </div>
//   )};

export default Corpus