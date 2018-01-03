import * as types from './types';

const create = (transcription) => ({
  type: types.CREATE,
  payload: {
    transcription
  }
});

const remove = (transcription) => ({
  type: types.REMOVE,
  payload: {
    transcription
  }
});

const update = (transcription) => ({
  type: types.UPDATE,
  payload: {
    transcription
  }
});

const select = (transcription) => ({
  type: types.SELECT,
  payload: {
    transcription
  }
});

export {
  create,
  remove,
  update,
  select
}
