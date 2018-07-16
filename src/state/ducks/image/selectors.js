export const getImages = state =>
  Object.keys(state.byId).map(id => state.byId[id]);

export const getImage = (state, id) => state.byId[id];
