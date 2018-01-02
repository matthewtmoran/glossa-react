
const defaultState =[
  {
    id: '1234',
    title: 'This is the first notebook',
  }
];

const notebooks = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTEBOOK': {
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ]
    }
    case 'REMOVE_NOTEBOOK': {
      return []
    }
    default:
      return state;
  }
};

export default notebooks;