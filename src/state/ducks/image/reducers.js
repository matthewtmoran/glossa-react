import { combineReducers } from "redux";
import * as types from "./types";

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVED: {
      return {
        ...state,
        ...action.images.reduce((obj, image) => {
          obj[image._id] = image;
          return obj;
        }, {})
      };
    }
    case types.CREATE: {
      return {
        ...state,
        [action.image._id]: action.image
      };
    }
    case types.UPDATE: {
      return state.map(item => {
        if (item._id !== action.payload._id) {
          return item;
        }
        return {
          ...item,
          ...action.payload
        };
      });
    }
    case types.REMOVE: {
      return state.filter(d => d._id !== action.payload.id);
    }
    default:
      return state;
  }
};

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT: {
      return state.entities.notebook.list.find(action.payload);
    }
    case types.DESELECT: {
      return action.payload;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  byId
});

export default reducer;
