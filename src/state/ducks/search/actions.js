import * as types from './types';

const set = ( text ) => ({
  type: types.SET,
  payload: {
    text
  }
});

export {
  set,
}