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

const modalReducer = (state = false, action) => {
  switch(action.type) {
    case types.MODAL: {
      return {
        ...state,
        modalOpen: !action.payload.modalOpen
      }
    }
    default:
      return state;
  }
};


const reducer = combineReducers({
  drawerOpen: drawerReducer,
  modalOpen: modalReducer
});


export default reducer
