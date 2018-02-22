import * as types from './types';

const toggleDrawer = ( isOpen ) => ({
  type: types.TOGGLE,
  payload: {
    isOpen
  }
});

const showModal = (data) => ({
  type: types.SHOW_MODAL,
  modalType: data.modalType,
  payload: {
    ...data.modalProps
  }
});

const hideModal = ( ) => ({
  type: types.HIDE_MODAL,
  modalType: types.NOTEBOOK_MODAL,
  payload: null
});

const showAttachmentModal = () => ({
  type: types.ATTACHMENT_MODAL,
  modalType: types.ATTACHMENT_MODAL,
  payload: null
});

export {
  toggleDrawer,
  showModal,
  hideModal,
  showAttachmentModal
}