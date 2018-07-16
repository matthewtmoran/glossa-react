import { toggleDrawer, hideModal, showModal } from "./actions";
import { selectNotebook, deSelect } from "../notebook/actions";

const selectAndModal = id => {
  return dispatch => {
    dispatch(selectNotebook(id));
    dispatch(showModal());
  };
};

const deselectAndModal = () => {
  return dispatch => {
    dispatch(deSelect());
    dispatch(hideModal());
  };
};

export { toggleDrawer, hideModal, showModal, selectAndModal, deselectAndModal };
