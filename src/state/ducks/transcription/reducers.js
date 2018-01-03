import { combineReducers } from "redux";
import * as types from "./types";

const defaultState =[
  {
    id: '123',
    title: 'Transcription',
    desc: 'Description Text',
  },
  {
    id: '124',
    title: 'A Little trans',
    desc: 'Description Text',
  },
  {
    id: '125',
    title: 'Trans the man',
    desc: 'Description Text',
  }
];

const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE: {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          desc: action.desc
        }
      ]
    }
    case types.UPDATE: {
      return []
    }
    case types.REMOVE: {
      return []
    }
    default:
      return state;
  }
};

const detailsReducer = (state = null , action) => {
  switch (action.type) {
    case types.SELECT: {
      return action.payload.transcription
    }
    default:
      return state;
  }
};

const reducer = combineReducers( {
  list: listReducer,
  details: detailsReducer,
});

export default reducer;
