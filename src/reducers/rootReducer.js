import { combineReducers } from 'redux';
import transcriptions from './transcriptions'
import searchTerm from './searchTerm';
import notebooks from './notebook';
import selectedTranscription from './selectTranscription';
import notebooksVisible from './notebooksVisible';
import drawerOpen from './drawer';

const appReducer = combineReducers({
  transcriptions,
  notebooks,
  searchTerm,
  selectedTranscription,
  notebooksVisible,
  drawerOpen
});

const rootReducer = (state, action) => {
  let currentState = state;

  if (action.type === 'RESET_STATE') {
    currentState = undefined;
  }

  return appReducer(currentState, action);
};

export default rootReducer;
