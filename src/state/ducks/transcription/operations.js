import { create, remove, update, select, requestList, receiveList, failedList, hydrateList } from "./actions";
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



export {
  create,
  remove,
  update,
  select,
  fetchPost
};