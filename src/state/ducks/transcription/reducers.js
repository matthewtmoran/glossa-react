import { combineReducers } from "redux";
import * as types from "./types";

const defaultState =[
  {
    id: 1,
    title: 'Transcription',
    desc: 'Description Text',
  },
  {
    id: 2,
    title: 'A Little trans',
    desc: 'Description Text',
  },
  {
    id: 3,
    title: 'Trans the man',
    desc: 'Description Text',
  }
];

let transcriptionId = defaultState.length;

const listReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE: {
      transcriptionId = transcriptionId + 1;
      return [
        ...state,
        {
          id: transcriptionId,
          title: action.payload.title,
          desc: action.payload.desc
        }
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
      return []
    }
    case types.HYDRATE: {
      return action.payload

    }
    default:
      return state;
  }
};

const defaultFetchState = {
  isFethcing: false,
  updateRequest: false,
  didInvalidate: false,
};

const fetchReducer = (state = defaultFetchState, action) => {
  switch(action.type) {
    case types.FETCH_LIST: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case types.FETCH_LIST_COMPLETED: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case types.BEGIN_UPDATE: {
      return {
        ...state,
        updateRequest: action.payload
      }
    }
    case types.COMPLETE_UPDATE: {
      return {
        ...state,
        updateRequest: action.payload
      }
    }
    case types.FAILED_UPDATE: {
      return {
        ...state,
        didInvalidate: action.payload.didInvalidate,
        updateRequest: action.payload.updateRequest
      }
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
  request: fetchReducer
});

export default reducer;
