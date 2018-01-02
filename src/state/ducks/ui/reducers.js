import { combineReducers } from "redux";
import * as types from "./types";

const drawerReducer = (state = false, action ) => {
  switch (action.type) {
    case types.TOGGLE: {
      return !action.payload.drawerOpen;
    }
    default:
      return state;
  }
};


const reducer = combineReducers({
  drawerOpen: drawerReducer
});


export default reducer
