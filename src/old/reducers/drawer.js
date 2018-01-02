
const defaultState = false
;

const drawerOpen = (state = defaultState, action) => {

  switch (action.type) {
    case 'TOGGLE_DRAWER': {
      console.log(`received ${action.drawerOpen} returning ${!action.drawerOpen}`);
      return !action.drawerOpen
    }
    default:
      return state;
  }
};

export default drawerOpen;