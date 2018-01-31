import {
  create,
  remove,
  update,
  select,
  requestList,
  receiveList,
  failedList,
  hydrateList,
  beginUpdate,
  completeUpdate,
  failedUpdate
} from "./actions";

import api from '../../../server';

const {
  fetchTranscriptionsAPI,
  updateTranscriptionAPI,
  createTranscriptionAPI,
  removeTranscriptionAPI,
} = api;

function fetchTranscriptions() {
  return (dispatch) => {
    dispatch(requestList());
    fetchTranscriptionsAPI()
      .then((data) => {
        dispatch(hydrateList(data));
        dispatch(receiveList());
        dispatch(select(data[0]));
      })
      .catch((reason) => {
        dispatch(failedList())
      });
  };
}

function updateTranscription(transcription) {
  return (dispatch) => {
    dispatch(beginUpdate());
    updateTranscriptionAPI(transcription)
      .then((data) => {
        dispatch(completeUpdate());
        dispatch(update(data));
        dispatch(select(data));
      })
      .catch((reason) => {
        dispatch(failedUpdate());
      });
  }
}
function createTranscription(transcription) {
  return (dispatch) => {
    dispatch(beginUpdate());
    createTranscriptionAPI(transcription)
      .then((data) => {
        dispatch(create(data));
        dispatch(completeUpdate());
        dispatch(select(data));
      })
      .catch((reason) => {
        dispatch(failedUpdate());
      });
  }
}
function removeTranscription(transcription, newTranscription) {
  console.log('removing transcription');
  return (dispatch) => {
    dispatch(beginUpdate());
    removeTranscriptionAPI(transcription._id)
      .then((data) => {
        dispatch(remove(data));
        dispatch(completeUpdate());
        dispatch(select(newTranscription));
      })
      .catch((reason) => {
        dispatch(failedUpdate());
      });
  }
}


export {
  create,
  remove,
  update,
  select,
  fetchTranscriptions,
  updateTranscription,
  createTranscription,
  removeTranscription
};