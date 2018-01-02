import { combineReducers } from "redux";
import * as types from "./types";


/* State Shape
 {
 id: string,
 title: string
 }
 */

const notebookReducer = ( state = [], action) => {
  switch ( action.type ) {
    case types.CREATE: {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title
        }
      ]
    }
    case 'REMOVE_NOTEBOOK': {
      return []
    }
    default: {
      return state;
    }
  }
};

// const reducer = combineReducers({
//   notebook: notebookReducer
// });

const reducer = notebookReducer;

export default reducer

