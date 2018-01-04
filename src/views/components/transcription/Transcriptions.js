import React from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';

let SelectableList = makeSelectable(List);

class Transcriptions extends React.Component {
  render() {

    const {
      transcriptions,
      selectedIndex,
      selectTranscription
    } = this.props;

    return (
      <SelectableList value={selectedIndex} transcriptions={transcriptions} >
        {transcriptions.map((transcription, i) => (<ListItem value={i} key={transcription.id} primaryText={transcription.title} onClick={() => selectTranscription(transcription)} />))}
      </SelectableList>
    )
  }
}




export default Transcriptions;