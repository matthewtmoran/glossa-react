import React from 'react'
import NotebookList from '../Notebooks/NotebookList';

const TranscriptionDetail = ({selectedTranscription, showNotebooks, notebooksVisible, notebooks, searchTerm}) => {
  return (
  !!selectedTranscription ? (
    <div className="Transcription-Detail">
      <label><b>Title:</b></label>
      <p>{selectedTranscription.title}</p>
      <label><b>Description:</b></label>
      <p>{selectedTranscription.desc}</p>
      <button onClick={() => showNotebooks(notebooksVisible)}>Attach Notebook</button>

      {notebooksVisible ? (
        <NotebookList notebooksVisible={notebooksVisible} notebooks={notebooks} searchTerm={searchTerm} />
      ) : (null)}

    </div> ) :
    (
      <div><h2>Select Transcription</h2></div>
    )
  )
};


export default TranscriptionDetail;