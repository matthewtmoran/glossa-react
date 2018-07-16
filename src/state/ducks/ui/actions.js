import * as types from "./types";

const toggleDrawer = isOpen => ({
  type: types.TOGGLE,
  payload: {
    isOpen
  }
});

const showModal = () => ({
  type: types.SHOW_MODAL,
  modalType: types.MODAL_TYPE
});

const hideModal = () => ({
  type: types.HIDE_MODAL,
  modalType: types.MODAL_TYPE,
  payload: null
});

export { toggleDrawer, showModal, hideModal };
