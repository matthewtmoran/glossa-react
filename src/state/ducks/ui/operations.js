import {toggleDrawer, hideModal, showModal, showAttachmentModal} from "./actions";
import {selectNotebook, deSelect} from "../notebook/actions";

const selectAndModal = (data) => {
  return (dispatch) => {
    dispatch(selectNotebook(data.notebook));
    dispatch(showModal(data));
  }
};

const deselectAndModal = () => {
  return (dispatch) => {
    dispatch(deSelect());
    dispatch(hideModal());
  }
};

const attachModal = () => {
  return (dispatch) => {
    dispatch(showAttachmentModal());
  }
};


export {
  toggleDrawer,
  hideModal,
  showModal,
  selectAndModal,
  deselectAndModal,
  attachModal
};