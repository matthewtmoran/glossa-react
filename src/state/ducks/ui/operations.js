import {toggleDrawer, hideModal, showModal} from "./actions";
import {selectNotebook, deSelect} from "../notebook/actions";

const selectAndModal = (notebook) => {
  return (dispatch) => {
    dispatch(selectNotebook(notebook));
    dispatch(showModal());
  }
};

const deselectAndModal = () => {
  return (dispatch) => {
    dispatch(deSelect());
    dispatch(hideModal());
  }
};


export {
  toggleDrawer,
  hideModal,
  showModal,
  selectAndModal,
  deselectAndModal
};