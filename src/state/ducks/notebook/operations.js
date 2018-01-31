import {
  create,
  remove,
  update,
  selectNotebook,
  apiRequest,
  apiComplete,
  allNotebooks,
  apiFail
} from "./actions";

import api from '../../../server';

const {
  fetchNotebooksAPI,
  updateNotebookAPI,
  removeNotebookAPI,
  updateOrCreateNotebookAPI
} = api;

console.log('updateOrCreateNotebookAPI', updateOrCreateNotebookAPI);

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

const updateNotebook = (notebook) => {
  return (dispatch) => {

    dispatch(apiRequest());

    updateOrCreateNotebookAPI(notebook)
      .then((data) => {
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

export {
  create,
  remove,
  update,
  selectNotebook,
  fetchNotebooks,
  updateNotebook,
  removeNotebook
};