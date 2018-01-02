
const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.text;
    }
    default:
      return state;
  }
};

export default searchTerm;