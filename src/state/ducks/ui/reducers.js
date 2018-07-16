import { combineReducers } from "redux";
import * as types from "./types";

const drawerReducer = (state = {isOpen: false}, action ) => {
  switch (action.type) {
    case types.TOGGLE: {
      return {
        ...state,
        isOpen: !action.payload.isOpen
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
  switch(action.type) {
    case types.SHOW_MODAL: {
      console.log('action.modalType', action.modalType);
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.payload
      }
    }
    case types.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};


const reducer = combineReducers({
  drawer: drawerReducer,
  modal: modalReducer
});


export default reducer
