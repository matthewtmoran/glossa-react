import React from 'react';
import Transcription from './Transcription';

const Transcriptions = ({ transcriptions, searchTerm, selectTranscription}) => {
  return (
    <ul>
      {transcriptions.filter((t) => (
        searchTerm === '' || t.title.includes(searchTerm)
      )).map((transcription, i) => (<Transcription key={transcription.id} transcription={transcription} selectTranscription={selectTranscription} />))}
    </ul>
)};

export default Transcriptions