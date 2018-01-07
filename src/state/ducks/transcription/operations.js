import { create, remove, update, select } from "./actions";

// This is a thunk which dispatches multiple actions from actions.js
const createAndSelect = ( transcription ) => ( dispatch ) => {
  dispatch( create( transcription ) ).then( ( createdTranscription ) => {
    dispatch( select( createdTranscription ) );
  });
};

export {
  createAndSelect,
  create,
  remove,
  update,
  select
};