import { combineReducers } from "redux";
import * as types from "./types";

const defaultState = '';
//TODO: make this immutable.
const searchReducer = (state = '', action ) => {
  switch (action.type) {
    case types.SET: {
       return action.payload.searchTerm
    }
    default:
      return defaultState;
  }
};


const reducer = combineReducers({
  searchTerm: searchReducer
});

export default reducer
