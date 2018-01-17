import { combineReducers } from "redux";
import * as types from "./types";

const drawerReducer = (state = false, action ) => {
  switch (action.type) {
    case types.TOGGLE: {
      return {
        ...state,
        drawerOpen: !action.payload.drawerOpen
      }
    }
    default:
      return state;
  }
};

const initialState = {
  modalType: null,
  modalProps: {}
};

const modalReducer = (state = initialState, action) => {
  console.log('modalReducer', action);
  switch(action.type) {
    case types.SHOW_MODAL: {
      console.log('showing modal...', action)
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.payload
      }
      // return {
      //   ...state,
      //   modalOpen: !action.payload.modalOpen
      // }
    }
    case types.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};


const reducer = combineReducers({
  drawerOpen: drawerReducer,
  modal: modalReducer
});


export default reducer
