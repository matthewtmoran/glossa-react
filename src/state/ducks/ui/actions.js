import * as types from './types';

const toggleDrawer = ( drawerOpen ) => ({
  type: types.TOGGLE,
  payload: {
    drawerOpen
  }
});

const toggleModal = ( notebook ) => ({
  type: types.SHOW_MODAL,
  modalType: types.MODAL_TYPE,
  payload: {
    ...notebook
  }
});


const showModal = ( notebook ) => ({
  type: types.SHOW_MODAL,
  modalType: types.MODAL_TYPE,
  payload: {
    ...notebook
  }
});

const hideModal = ( notebook ) => ({
  type: types.HIDE_MODAL,
  modalType: types.MODAL_TYPE,
  payload: {

  }
});

export {
  toggleDrawer,
  toggleModal,
  showModal,
  hideModal
}