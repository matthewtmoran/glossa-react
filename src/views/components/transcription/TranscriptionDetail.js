import React from 'react'
import PropTypes from 'prop-types';

const TranscriptionDetail = (props) => {
  console.log('props', props);
  const {selectedTranscription} = props;
  return (
    selectedTranscription
      ? (<div>
      <p>{selectedTranscription.title}</p>
      <p>{selectedTranscription.desc}</p>
    </div>)
      : (<div>Select transcription</div>)
  )
};

TranscriptionDetail.propTypes = {
  selectedTranscription: PropTypes.object
};

export default TranscriptionDetail;