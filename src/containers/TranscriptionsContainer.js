import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Transcriptions from "../components/transcription/Transcriptions";

import * as actionCreators from '../actions';


const mapStateToProps = state => {
  return {
    transcriptions: state.transcriptions,
    searchTerm: state.searchTerm,
    selectedTranscription: state.selectedTranscription
  }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const TranscriptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transcriptions);

export default TranscriptionsContainer;