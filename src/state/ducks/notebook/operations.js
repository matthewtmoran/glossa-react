import {
  create,
  remove,
  update,
  selectNotebook,
  apiRequest,
  apiComplete,
  allNotebooks,
  apiFail,
  hideImage,
  showImage
} from "./actions";

import api from '../../../server';

const {
  fetchNotebooksAPI,
  updateNotebookAPI,
  removeNotebookAPI,
  updateOrCreateNotebookAPI
} = api;


const fetchNotebooks = () => {
  return (dispatch) => {
    dispatch(apiRequest());

    fetchNotebooksAPI()
      .then((data) => {
        dispatch(apiComplete());
        dispatch(allNotebooks(data))
      })
      .catch((reason) => {
        dispatch(apiFail())
      })
  }
};

const updateNotebook = (notebook, newImage) => {
  console.log('is there a new image?', newImage);
  return (dispatch) => {

    dispatch(apiRequest());

    updateOrCreateNotebookAPI(notebook, newImage)
      .then((data) => {
        console.log('data after update or createNotebook', data);
        if (!notebook._rev) {
            dispatch(create(data));
            dispatch(selectNotebook(data));
            dispatch(apiComplete());
          } else {
            dispatch(update(data));
            dispatch(apiComplete());
          }
      })
      .catch((reason) => {
        dispatch(apiFail())
      })
  }
};


const removeNotebook = (notebookId) => {
  return (dispatch) => {
    dispatch(apiRequest());
    removeNotebookAPI(notebookId)
      .then((data) => {
        dispatch(remove(data));
        dispatch(apiComplete());
      })
      .catch((reason) => {
        dispatch(apiFail());
      })
  }
};

const uploadRequest = (data) => {
  console.log('data', data);
};

export {
  create,
  remove,
  update,
  selectNotebook,
  fetchNotebooks,
  updateNotebook,
  removeNotebook,
  showImage,
  hideImage,
  uploadRequest
};