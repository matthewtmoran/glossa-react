import { combineReducers } from "redux";
import * as types from "./types";


/* State Shape
 {
 id: string,
 title: string
 }
 */


const defaultAPIState = {
  requesting: false,
  failed: false,
};

const apiReducer = (state = defaultAPIState, action) => {
  switch (action.type) {
    case types.API_REQUESTING : {
      return {
        ...state,
        requesting: action.payload
      }
    }
    case types.API_COMPLETE: {
      return {
        ...state,
        requesting: action.payload
      }
    }
    case types.API_FAILED: {
      return {...action.payload};
    }
    default: {
      return state
    }
  }
};

const listReducer = (state = [], action) => {
  switch (action.type) {
    case types.ALL: {
      return action.payload
    }
    case types.CREATE: {
      return [
        action.payload,
        ...state,
      ]
    }
    case types.UPDATE: {
      return state.map((item) => {
        if (item._id !== action.payload._id) {
          return item;
        }
        return {
          ...item,
          ...action.payload
        };
      })
    }
    case types.REMOVE: {
      return state.filter(d => d._id !== action.payload.id);
    }
    default:
      return state;
  }
};

const detailsReducer = (state = null , action) => {
  switch (action.type) {
    case types.SELECT: {
      return action.payload.notebook
    }
    case types.DESELECT: {
      return action.payload
    }
    default:
      return state;
  }
};

const imageReducer = (state = null, action) => {
  switch(action.type) {
    case types.SHOW: {
      return {
        ...state,
        ...action.payload
      }
    }
    case types.HIDE: {
      return action.payload;
    }
    default:
      return state;
  }
};

const reducer = combineReducers( {
  list: listReducer,
  details: detailsReducer,
  request: apiReducer,
  imagePreview: imageReducer
});

export default reducer

