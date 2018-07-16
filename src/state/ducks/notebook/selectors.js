import { imageSelectors } from "../image/index";
export const getNotebooks = state =>
  state.visibleIds.map(id => getNotebook(state, id));

export const getNotebook = (state, id) => state.byId[id] || {};

export const getDetails = state => {
  const notebook = getNotebook(
    state.entities.notebooks,
    state.entities.notebooks.details
  );
  const image = imageSelectors.getImage(state.entities.images, notebook.image);
  return { notebook, image };
};
