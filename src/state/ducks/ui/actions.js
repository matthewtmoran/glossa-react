import * as types from './types';

const toggleDrawer = ( drawerOpen ) => ({
  type: types.TOGGLE,
  payload: {
    drawerOpen
  }
});

const toggleModal = ( modalOpen ) => ({
  type: types.MODAL,
  payload: {
    modalOpen
  }
});

export {
  toggleDrawer,
  toggleModal
}