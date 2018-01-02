import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Corpus from "../components/Corpus/Corpus";

import * as actionCreators from '../actions';

const mapStateToProps = state => {
  return {
    transcriptions: state.transcriptions,
    notebooks: state.notebooks,
    searchTerm: state.searchTerm,
    selectedTranscription: state.selectedTranscription,
    notebooksVisible: state.notebooksVisible
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const CorpusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Corpus);

export default CorpusContainer;