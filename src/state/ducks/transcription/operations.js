import { create, remove, update, select, requestList, receiveList, failedList, hydrateList, beginUpdate, completeUpdate, failedUpdate } from "./actions";
import fetch from 'cross-fetch'


function fetchPost() {
  return (dispatch) => {
    dispatch(requestList());
    fetch(`/api/transcription`)
      .then((response) => {
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



export {
  create,
  remove,
  update,
  select,
  fetchPost,
  updateTranscription
};