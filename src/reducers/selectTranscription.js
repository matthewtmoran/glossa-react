
const defaultState = null;

const selectedTranscription = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_TRANSCRIPTION': {
      return Object.assign({}, action.transcription);
    }
    default:
      return state;
  }
};

export default selectedTranscription;