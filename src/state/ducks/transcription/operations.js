import { create, remove, update, select, requestList, receiveList, failedList, hydrateList, beginUpdate, completeUpdate, failedUpdate } from "./actions";
import fetch from 'cross-fetch'


function fetchTranscriptions() {
  return (dispatch) => {
    dispatch(requestList());
    fetch(`/api/transcription`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        dispatch(receiveList());
        return response.json();
      })
      .then((data) => {
        dispatch(hydrateList(data));
        dispatch(select(data[0]));
      })
      .catch(() => dispatch(failedList()));
  };
}
function updateTranscription(transcription) {
  return (dispatch) => {
    dispatch(beginUpdate());
    fetch(`/api/transcription/${transcription._id}`, {
      method: 'PUT',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
         response.json().then((data) => {
          dispatch(completeUpdate());
          dispatch(update(data));
          dispatch(select(data));
        })
      })
      .catch((response) => {
        console.log('error response', response);
        dispatch(failedUpdate());
      })
  }
}
function createTranscription(transcription) {
  return (dispatch) => {
    dispatch(beginUpdate());

    fetch(`/api/transcription`, {
      method: 'POST',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
        response.json().then((data) => {
          dispatch(completeUpdate());
          dispatch(create(data));
          dispatch(select(data));
        })
      })
      .catch((response) => {
        console.log('error response', response);
        dispatch(failedUpdate());
      })
  }
}
function removeTranscription(transcription, newTranscription) {
  return (dispatch) => {
    dispatch(beginUpdate());

    fetch(`/api/transcription/${transcription._id}`, {
      method: 'DELETE',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
        response.json().then((data) => {
          dispatch(completeUpdate());
          dispatch(remove(data));
          dispatch(select(newTranscription));
        })
      })
      .catch((response) => {
        console.log('error response', response);
        dispatch(failedUpdate());
      })
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