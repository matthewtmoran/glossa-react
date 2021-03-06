import React from 'react'
import PropTypes from 'prop-types';
import TranscriptionFrom from '../../components/transcription/TranscriptionForm';

const Meta = (props) => {
  const {selectedTranscription, update, remove} = props;
  return (
    selectedTranscription && <TranscriptionFrom transcription={selectedTranscription} update={update} remove={remove}/>
  )
};

Meta.propTypes = {
  selectedTranscription: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func
};

export default Meta;