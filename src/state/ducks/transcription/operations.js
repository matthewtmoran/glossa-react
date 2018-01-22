import { create, remove, update, select, requestList, receiveList, failedList, hydrateList } from "./actions";
import fetch from 'cross-fetch'


function fetchPost() {
  console.log('fetching post');
  return (dispatch) => {
    dispatch(requestList());

    fetch(`/api/transcription`)
      .then((response) => {
        dispatch(receiveList());
        return response.json();
      })
      .then((data) => dispatch(hydrateList(data)))
      .catch(() => dispatch(failedList()));
  };
}

// const fetchPost = () => (dispatch) => {
//   console.log('fetchPost');
//   // dispatch(requestList());
//   return dispatch => fetch(`/api/transcription`)
//     .then(res => res.json())
//     .then(
//       data => dispatch(receiveList()),
//       err => dispatch(failedList())
//     );
//
//
//
//   // return fetch(`/api/transcription`)
//   //   .then((response )=> {
//   //     dispatch(receiveList());
//   //     return response.json()
//   //   })
//   //   .catch((error) => {
//   //     dispatch(failedList());
//   //   }).then((list) => {
//   //     dispatch(hydrateList())
//   //   })
// };


export {
  create,
  remove,
  update,
  select,
  fetchPost
};