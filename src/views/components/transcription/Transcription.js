import React from 'react'
import { Link, Route, Switch, ReactDOM } from "react-router-dom";
import {List, ListItem} from 'material-ui/List';

const Transcription = ({transcription, i}) => (
  <ListItem primaryText={transcription.title} value={i}/>
);
  {/*<li onClick={() => selectTranscription(transcription)}>*/}
    {/*{transcription.title}*/}
  {/*</li>*/}


export default Transcription