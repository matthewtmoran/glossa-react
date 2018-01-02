import { combineReducers } from "redux";
import * as types from "./types";

const searchReducer = (state = '', action ) => {
  switch (action.type) {
    case types.SET: {
      return action.payload;
    }
    default:
      return state;
  }
};


const reducer = combineReducers({
  searchTerm: searchReducer
});

export default reducer
