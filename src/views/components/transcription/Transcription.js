import React from 'react'
import {Route, Switch, ReactDOM} from "react-router-dom";
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';

const Transcription = ({transcription, i}) => (
  <ListItem primaryText={transcription.title} value={i}/>
);

Transcription.propTypes = {
  transcription: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};

export default Transcription