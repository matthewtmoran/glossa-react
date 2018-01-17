import React from 'react'
import PropTypes from 'prop-types';
import TranscriptionFrom from '../../components/transcription/TranscriptionForm';

const Meta = (props) => {
  const {selectedTranscription, update} = props;
  return (
    selectedTranscription && <TranscriptionFrom transcription={selectedTranscription} update={update}/>
  )
};

Meta.propTypes = {
  selectedTranscription: PropTypes.object,
  update: PropTypes.func
};

export default Meta;