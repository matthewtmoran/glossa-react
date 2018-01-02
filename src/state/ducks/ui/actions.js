import * as types from './types';

const toggleDrawer = ( drawerOpen ) => ({
  type: types.TOGGLE,
  payload: {
    drawerOpen
  }
});

export {
  toggleDrawer,
}