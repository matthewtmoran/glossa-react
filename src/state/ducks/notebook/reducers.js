import { combineReducers } from "redux";
import * as types from "./types";
import { merge } from "lodash";

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVED: {
      return {
        ...state,
        ...action.notebooks.reduce((obj, notebook) => {
          obj[notebook._id] = notebook;
          return obj;
        }, {})
      };
    }
    case types.CREATE:
    case types.UPDATE: {
      return {
        ...state,
        [action.notebook._id]: Object.assign({}, action.notebook)
      };
    }
    // case types.REMOVE: {
    //   return state.filter(d => d._id !== action.payload.id);
    // }
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.REMOVE:
      console.log("state", state);
      console.log("action", action);

      return state.filter(id => id !== action.id);
    case types.CREATE:
      if (state.indexOf(action.notebook._id) !== -1) {
        return state;
      }
      return [...state, action.notebook._id];
    case types.RECEIVED:
      return action.notebooks.map(notebook => notebook._id);
    default:
      return state;
  }
};

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT: {
      return action.id;
    }
    case types.DESELECT: {
      return action.id;
    }
    default:
      return state;
  }
};

const imageReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW: {
      const returnObj = {
        ...state,
        ...action.payload
      };
      return returnObj;
    }
    case types.HIDE: {
      return action.payload;
    }
    default:
      return state;
  }
};

// function cacheReducer(state = null, action) {
//   switch (action.type) {
//     case types.CACHE_NOTEBOOK: {
//       return action.payload;
//     }
//     case types.CLEAR_CACHE: {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// }

// const reducer = combineReducers({
//   notebooks: listReducer,
//   details: detailsReducer,
// });

export default combineReducers({
  byId,
  visibleIds,
  details: detailsReducer
  // request: apiReducer
  // cached: cacheReducer
});
