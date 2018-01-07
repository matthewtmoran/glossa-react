import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import Transcriptions from '../components/transcription/Transcriptions';
import TranscriptionDetail from '../components/transcription/TranscriptionDetail';
import { transcriptionOperations } from "../../state/ducks/transcription";
import CenteredTabs from '../components/tabs';
import { withStyles } from 'material-ui/styles';

const styles = {
  flex: {
    flex: 1,
    boxSizing: 'border-box'
  },
  layoutColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  layoutRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  CorpusContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  Corpus: {
    flexDirection: 'row',
    display: 'flex',
    height: '100%',
    flex: 1
  },
  Sidebar: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    zIndex: 1101,
    width: '20%',
    minWidth: 200,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
  }
};

class Corpus extends React.Component {

  selectTranscription(transcription) {
    this.props.select(transcription);
    this.selectedIndex = this.props.transcriptions.indexOf(transcription)
  }

  componentWillMount() {
    if (this.props.transcriptions.length > 0 && !this.props.selectedTranscription) {
      this.selectTranscription(this.props.transcriptions[0])
    }
    this.authTab = 0;
  }

  tabHandler(e, i) {
    this.authTab = i;
  }

  render() {
    const {classes, transcriptions, searchTerm, selectedTranscription} = this.props;
    let filteredTranscriptions = transcriptions.filter((t, i) => (searchTerm === '' || t.title.toLowerCase().includes(searchTerm.toLowerCase())));
    const selectedIndex = filteredTranscriptions.indexOf(selectedTranscription);

    return (
      <div className={classes.CorpusContainer}>
        <div className={classes.Corpus}>
          <div className={classes.Sidebar}>
            {transcriptions.length > 0 &&
            <Transcriptions transcriptions={filteredTranscriptions}
                            searchTerm={searchTerm}
                            selectedIndex={selectedIndex}
                            selectTranscription={this.selectTranscription.bind(this)}/>}
          </div>
          <CenteredTabs selectedTranscription={selectedTranscription} authTab={this.authTab} changeTab={this.tabHandler}/>
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

export default withStyles(styles)(Corpus);
