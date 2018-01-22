import * as types from './types';

const create = (transcription) => ({
  type: types.CREATE,
  payload: {
    ...transcription
  }
});

const remove = (transcription) => ({
  type: types.REMOVE,
  payload: {
    ...transcription
  }
});

const update = (transcription) => ({
  type: types.UPDATE,
  payload: {
    ...transcription
  }
});

const select = (transcription) => ({
  type: types.SELECT,
  payload: {
    transcription
  }
});

const requestList = () => ({
  type: types.FETCH_LIST,
  payload: true
});


const receiveList = () => ({
  type: types.FETCH_LIST_COMPLETED,
  payload: false
});

const failedList = () => ({
  type: types.FETCH_LIST_FAILED,
  payload: true
});

const hydrateList = (list) =>  ({
  type: types.HYDRATE,
  payload: list
});



export {
  create,
  remove,
  update,
  select,
  requestList,
  receiveList,
  failedList,
  hydrateList
}
