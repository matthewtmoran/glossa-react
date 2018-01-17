import { combineReducers } from "redux";
import * as types from "./types";


/* State Shape
 {
 id: string,
 title: string
 }
 */

const defaultState =[
  {
    id: 1,
    title: 'Notebook 1',
    desc: 'Notebook 1 text',
  },
  {
    id: 2,
    title: 'Notebook 2',
    desc: 'Notebook 2 Text',
  },
  {
    id: 3,
    title: 'Notebook 3',
    desc: 'Notebook 3Text',
  },
  {
    id: 4,
    title: 'Notebook 4',
    desc: 'Notebook 4 Text',
  },
  {
    id: 5,
    title: 'Notebook 5',
    desc: 'Notebook 5 Text',
  },
  {
    id: 6,
    title: 'Notebook 6',
    desc: 'Notebook 6 Text',
  },
  {
    id: 7,
    title: 'Notebook 7',
    desc: 'Notebook 7Text',
  }
];

let notebookId = defaultState.length;


const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE: {
      notebookId = notebookId + 1;
      return [
        ...state,
        {
          id: notebookId,
          title: action.payload.title,
          desc: action.payload.desc
        }
      ]
    }
    case types.UPDATE: {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
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
    default:
      return state;
  }
};


const detailsReducer = (state = null , action) => {
  switch (action.type) {
    case types.SELECT: {
      return action.payload.notebook
    }
    default:
      return state;
  }
};

//
// const notebookReducer = ( state = [], action) => {
//   switch ( action.type ) {
//     case types.CREATE: {
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           title: action.payload.title
//         }
//       ]
//     }
//     case 'REMOVE_NOTEBOOK': {
//       return []
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const reducer = combineReducers({
//   notebook: notebookReducer
// });


const reducer = combineReducers( {
  list: listReducer,
  details: detailsReducer
});

export default reducer

