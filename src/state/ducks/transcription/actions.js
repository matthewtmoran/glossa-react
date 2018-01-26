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
    transcription: transcription || null
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

const beginUpdate = () => ({
  type: types.BEGIN_UPDATE,
  payload: true
});

const completeUpdate = () => ({
  type: types.COMPLETE_UPDATE,
  payload: false
});

const failedUpdate = () => ({
  type: types.FAILED_UPDATE,
  payload: {
    didInvalidate: true,
    updateRequest: false
  }
});




export {
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
}
