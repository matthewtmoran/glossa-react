
const defaultState = false;

const notebooksVisible = (state = defaultState, action) => {
  switch (action.type) {

    case 'TOGGLE_NOTEBOOKS': {
      return !action.notebooksVisible;
    }
    case 'HIDE_NOTEBOOKS': {
      return false;
    }
    default:
      return state;
  }
};

export default notebooksVisible;