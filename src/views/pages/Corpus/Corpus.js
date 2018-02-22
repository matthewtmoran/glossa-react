import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from "prop-types";

import {ATTACHMENT_MODAL} from '../../../state/ducks/ui/types';

import Transcriptions from '../../components/transcription/Transcriptions';
import {transcriptionOperations} from "../../../state/ducks/transcription/index";
import {uiOperations} from "../../../state/ducks/ui/index";
import CenteredTabs from '../../components/tabs';
import CircularIndeterminate from '../../components/ProgressCircle';

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
};

class Corpus extends React.Component {

  selectTranscription(transcription) {
    this.props.select(transcription);
    this.selectedIndex = this.props.transcriptions.indexOf(transcription)
  }

  handleRemove(t ) {
    let newTrans = this.props.transcriptions[1];
    this.props.remove(t, newTrans );
  }

  componentWillMount() {
    this.authTab = 0;
  }

  componentDidMount() {
    this.props.fetchTranscriptions()
  }

  tabHandler(e, i) {
    this.authTab = i;
  }

  openModal() {
    this.props.showModal({
      modalType: ATTACHMENT_MODAL,
      modalProps: {

      }
    })
  }


  render() {
    const {
      classes,
      transcriptions,
      searchTerm,
      selectedTranscription,
      createTranscription,
      update,
      isFetching,
    } = this.props;

    let filteredTranscriptions = transcriptions.filter((t, i) => (searchTerm === '' || t.title.toLowerCase().includes(searchTerm.toLowerCase())));

    if (selectedTranscription) {
      filteredTranscriptions.forEach((t, i) => {
        if (t._id === selectedTranscription._id) {
          this.selectedIndex = i;
        }
      });
    }

    return (
      <div className={classes.CorpusContainer}>
        <div className={classes.Corpus}>
          <div className={classes.Sidebar}>

            {isFetching ? (
                <CircularIndeterminate/>
              ) : (
                <Transcriptions transcriptions={filteredTranscriptions}
                                searchTerm={searchTerm}
                                selectedIndex={this.selectedIndex}
                                selectTranscription={this.selectTranscription.bind(this)}/>
              )}

            <Button onClick={() => createTranscription(untitledTranscription)} fab mini color="primary" aria-label="add"
                    className={classes.button}>
              <AddIcon />
            </Button>
          </div>
          <CenteredTabs selectedTranscription={selectedTranscription}
                        authTab={this.authTab}
                        update={update}
                        openModal={this.openModal.bind(this)}
                        remove={this.handleRemove.bind(this)}
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
    isFetching: state.transcriptions.request.isFetching,
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  select: transcriptionOperations.select,
  update: (t) => transcriptionOperations.updateTranscription(t),
  remove: (t, n) => transcriptionOperations.removeTranscription(t, n),
  createTranscription: (t) => transcriptionOperations.createTranscription(t),
  fetchTranscriptions: () => transcriptionOperations.fetchTranscriptions(),
  showModal: (modalType, modelProps) => uiOperations.showModal(modalType, modelProps),
}, dispatch);

Corpus = connect(mapStateToProps, mapDispatchToProps)(Corpus);

export default withStyles(styles)(Corpus);
