import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from "prop-types";

import Transcriptions from '../../components/transcription/Transcriptions';
import {transcriptionOperations} from "../../../state/ducks/transcription/index";
import CenteredTabs from '../../components/tabs';

import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
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
    position: 'relative',
    flexDirection: 'column',
    minHeight: '100%',
    zIndex: 1101,
    width: '20%',
    minWidth: 200,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
  },
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },

});

let untitledTranscription = {
  title: 'Untitled',
  desc: null,
  id: null
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

  componentDidMount() {
    this.props.fetchTranscriptions();
  }

  tabHandler(e, i) {
    this.authTab = i;
  }

  render() {
    const {classes, transcriptions, searchTerm, selectedTranscription, createTranscription, update} = this.props;
    let filteredTranscriptions = transcriptions.filter((t, i) => (searchTerm === '' || t.title.toLowerCase().includes(searchTerm.toLowerCase())));

    if (selectedTranscription) {
      filteredTranscriptions.forEach((t, i) => {
        if (t.id === selectedTranscription.id) {
          this.selectedIndex = i;
        }
      });
    }

    return (
      <div className={classes.CorpusContainer}>
        <div className={classes.Corpus}>
          <div className={classes.Sidebar}>
            {transcriptions.length > 0 &&
            <Transcriptions transcriptions={filteredTranscriptions}
                            searchTerm={searchTerm}
                            selectedIndex={this.selectedIndex}
                            selectTranscription={this.selectTranscription.bind(this)}/>}

            <Button onClick={() => createTranscription(untitledTranscription)} fab mini color="primary" aria-label="add"
                    className={classes.button}>
              <AddIcon />
            </Button>
          </div>
          <CenteredTabs selectedTranscription={selectedTranscription} authTab={this.authTab} update={update}
                        changeTab={this.tabHandler}/>
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
  select: PropTypes.func,
  update: PropTypes.func
};

const mapStateToProps = state => {
  return {
    transcriptions: state.transcriptions.list,
    selectedTranscription: state.transcriptions.details,
    notebooks: state.notebooks.list,
    searchTerm: state.search.searchTerm,
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  createTranscription: transcriptionOperations.create,
  select: transcriptionOperations.select,
  update: transcriptionOperations.update,
  fetchTranscriptions: () => transcriptionOperations.fetchPost()
}, dispatch);

// const mapDispatchToProps = dispatch => {
//   console.log('dispatch', dispatch)
//   return {
//     createTranscription: transcriptionOperations.create,
//     select: transcriptionOperations.select,
//     update: transcriptionOperations.update,
//     fetchTranscriptions: dispatch(transcriptionOperations.fetchPost())
//   }
// };

// const mapDispatchToProps = {
//   createTranscription: transcriptionOperations.create,
//   select: transcriptionOperations.select,
//   update: transcriptionOperations.update,
//   fetchTranscriptions: transcriptionOperations.fetchPost,
// };

Corpus = connect(mapStateToProps, mapDispatchToProps)(Corpus);

export default withStyles(styles)(Corpus);
