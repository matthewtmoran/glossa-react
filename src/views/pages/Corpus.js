import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import Transcriptions from '../components/transcription/Transcriptions';
import TranscriptionDetail from '../components/transcription/TranscriptionDetail';
import { transcriptionOperations } from "../../state/ducks/transcription";
import './Corpus.css';

class Corpus extends React.Component {

  selectTranscription(transcription) {
    this.props.select(transcription);
    this.selectedIndex = this.props.transcriptions.indexOf(transcription)
  }

  componentWillMount() {
    if (this.props.transcriptions.length > 0 && !this.props.selectedTranscription) {
      this.selectTranscription(this.props.transcriptions[0])
    }
  }

  render() {
    const {transcriptions, searchTerm, selectedTranscription} = this.props;
    let filteredTranscriptions = transcriptions.filter((t, i) => (searchTerm === '' || t.title.toLowerCase().includes(searchTerm.toLowerCase())));
    const selectedIndex = filteredTranscriptions.indexOf(selectedTranscription);

    return (
      <div className="Corpus-Container">
        <div className="Corpus">
          <div className="Sidebar">
            {transcriptions.length < 1
              ? <div>Create new Transcription...</div>

              : <Transcriptions transcriptions={filteredTranscriptions}
                                searchTerm={searchTerm}
                                selectedIndex={selectedIndex}
                                selectTranscription={this.selectTranscription.bind(this)}/>}
          </div>

          {selectedIndex > -1
            ? <TranscriptionDetail selectedTranscription={selectedTranscription}/>
            : <div></div>}
        </div>
      </div>
    )
  }

}

Corpus.propTypes = {
  transcriptions: PropTypes.array.isRequired,
  selectedTranscription: PropTypes.object,
  notebooks: PropTypes.array,
  searchTerm: PropTypes.string,
  select: PropTypes.func
};

const mapStateToProps = state => {
  return {
    transcriptions: state.transcriptions.list,
    selectedTranscription: state.transcriptions.details,
    notebooks: state.notebooks,
    searchTerm: state.search.searchTerm,
  }
};

const mapDispatchToProps = {
  select: transcriptionOperations.select,
};

Corpus = connect(mapStateToProps, mapDispatchToProps)(Corpus);

export default Corpus;
