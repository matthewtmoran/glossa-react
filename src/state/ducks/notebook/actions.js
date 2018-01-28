import * as types from './types';

const create = ( notebook ) => ({
  type: types.CREATE,
  payload: {
    ...notebook
  }
});

const remove = ( notebook ) => ({
  type: types.REMOVE,
  payload: {
    ...notebook
  }
});

// const update = ( notebook ) => ({
//   type: types.UPDATE,
//   payload: {
//     ...notebook
//   }
// });
const update = ( notebook ) => {
  console.log('notebook', notebook);
  return {
    type: types.UPDATE,
    payload: {
      ...notebook
    }
  }
};


const selectNotebook = (notebook) => ({
  type: types.SELECT,
  payload: {
    notebook: notebook || null
  }
});

const deSelect = () => ({
  type: types.DESELECT,
  payload: null
});

const apiRequest = () => ({
  type: types.API_REQUESTING,
  payload: true
});

const apiComplete = () => ({
  type: types.API_COMPLETE,
  payload: false
});

const apiFail = () => ({
  type: types.API_FAILED,
  payload: {
    failed: true,
    requesting: false,
  }
});

const allNotebooks = (data) => ({
  type: types.ALL,
  payload: data
});

export {
  create,
  remove,
  update,
  selectNotebook,
  deSelect,
  apiRequest,
  apiComplete,
  apiFail,
  allNotebooks
}
