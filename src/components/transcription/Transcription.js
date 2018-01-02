import React from 'react'
import PropTypes from 'prop-types'

const Transcription = ({transcription, selectTranscription}) => (
  <li onClick={() => selectTranscription(transcription)}>
    {transcription.title}
  </li>
);

Transcription.propTypes = {
  transcription: PropTypes.object.isRequired,
  selectTranscription: PropTypes.func.isRequired
};

export default Transcription