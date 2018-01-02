import { connect } from 'react-redux'
import TranscriptionList from '../components/TranscriptionList'


const mapStateToProps = state => {
  return {
    transcriptions: state.transcriptions
  }
};

const VisibleTranscriptionList = connect(
  mapStateToProps,
)(TranscriptionList);

export default VisibleTranscriptionList