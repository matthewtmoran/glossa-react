import * as types from "./types";

const create = notebook => ({
  type: types.CREATE,
  notebook
});

const remove = id => ({
  type: types.REMOVE,
  id
});

// const update = ( notebook ) => ({
//   type: types.UPDATE,
//   payload: {
//     ...notebook
//   }
// });
const update = notebook => ({
  type: types.UPDATE,
  notebook
});

export const saveNotebook = () => ({
  type: types.SAVE
});

const selectNotebook = id => ({
  type: types.SELECT,
  id
});

const deSelect = () => ({
  type: types.DESELECT,
  id: null
});

export const requestNotebooks = () => ({
  type: types.REQUEST
  // payload: [...data]
});

export const receivedNotebooks = notebooks => ({
  type: types.RECEIVED,
  notebooks
});

const showImage = data => ({
  type: types.SHOW,
  payload: data
});

const hideImage = () => ({
  type: types.HIDE,
  payload: null
});

const uploadSuccess = data => ({
  type: types.UPLOAD_SUCCESS,
  payload: { ...data }
});

const uploadFailed = error => ({
  type: types.UPLOAD_FAIL,
  payload: { ...error }
});

export {
  create,
  remove,
  update,
  selectNotebook,
  deSelect,
  showImage,
  hideImage
};
