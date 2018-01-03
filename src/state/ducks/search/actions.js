import * as types from './types';

const set = ( searchTerm ) => ({
  type: types.SET,
  payload: {
    searchTerm
  }
});

export {
  set,
}