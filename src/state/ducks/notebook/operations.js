import {
  create,
  remove,
  update,
  select,
  apiRequest,
  apiComplete,
  allNotebooks,
  apiFail
} from "./actions";

const fetchNotebooks = () => {
  return (dispatch) => {
    dispatch(apiRequest());

    fetch(`/api/notebook`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        dispatch(apiComplete());
        return response.json();
      })
      .then((data) => {
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
    fetch(`/api/notebook`, {
        method: 'PUT',
        body: JSON.stringify(notebook)
      })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then((data) => {
        if (!notebook._rev) {
          dispatch(create(data));
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

const createNotebook = () => {

};

const removeNotebook = () => {

};

export {
  create,
  remove,
  update,
  select,
  fetchNotebooks,
  updateNotebook,
  createNotebook
};