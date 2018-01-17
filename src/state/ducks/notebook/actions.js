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

const update = ( notebook ) => ({
  type: types.UPDATE,
  payload: {
    ...notebook
  }
});


const select = (notebook) => ({
  type: types.SELECT,
  payload: {
    notebook
  }
});

export {
  create,
  remove,
  update,
  select
}
