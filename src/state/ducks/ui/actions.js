import * as types from './types';

const toggleDrawer = ( isOpen ) => ({
  type: types.TOGGLE,
  payload: {
    isOpen
  }
});

const showModal = ( notebook ) => ({
  type: types.SHOW_MODAL,
  modalType: types.MODAL_TYPE,
  payload: {
    ...notebook
  }
});

const hideModal = ( ) => ({
  type: types.HIDE_MODAL,
  modalType: types.MODAL_TYPE,
  payload: null
});

export {
  toggleDrawer,
  showModal,
  hideModal
}