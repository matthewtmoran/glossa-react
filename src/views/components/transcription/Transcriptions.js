import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import {withTheme} from 'material-ui/styles';



const Transcriptions = (props) => {
  const {
    theme,
    selectedIndex,
    transcriptions,
    selectTranscription
  } = props;

  console.log('selectedIndex', selectedIndex);

  return (
    <List>
      {transcriptions.map((transcription, index) => (
        <ListItem button onClick={() => selectTranscription(transcription)} style={{ backgroundColor: index === selectedIndex ? theme.palette.text.divider : 'transparent'}}
                  key={transcription.id}>
          <ListItemText primary={transcription.title}/>
        </ListItem >

      ))}
    </List>
  )
};


export default withTheme()(Transcriptions);

// export default Transcriptions;