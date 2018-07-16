import * as types from "./types";

export const requestImages = () => ({
  type: types.REQUEST
});

export const receivedImages = images => ({
  type: types.RECEIVED,
  images
});

export const create = image => ({
  type: types.CREATE,
  image
});

export const remove = image => ({
  type: types.REMOVE,
  payload: {
    ...image
  }
});

export const update = image => {
  return {
    type: types.UPDATE,
    payload: {
      ...image
    }
  };
};
