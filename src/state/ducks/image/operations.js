import api from "../../../server";
import {
  requestImages,
  receivedImages,
  create,
  update,
  remove
} from "./actions";

const { fetchImagesAPI } = api;

const fetchImages = () => dispatch => {
  dispatch(requestImages());
  return fetchImagesAPI().then(images => {
    dispatch(receivedImages(images));
  });
};

export { fetchImages, create, update, remove };
