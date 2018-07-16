import api from "../../../server";
import {
  create,
  remove,
  update,
  saveNotebook,
  selectNotebook,
  requestNotebooks,
  receivedNotebooks,
  hideImage,
  showImage,
  cacheNotebook,
  cacheImage,
  restoreNotebook,
  restoreImage,
  clearCache
} from "./actions";
import { create as createImageAction } from "../image/actions";

const {
  fetchNotebooksAPI,
  updateNotebookAPI,
  removeNotebookAPI,
  updateOrCreateNotebookAPI,
  createImageAPI,
  removeImageAPI
} = api;

export const fetchNotebooks = () => dispatch => {
  dispatch(requestNotebooks());
  return fetchNotebooksAPI().then(notebooks => {
    dispatch(receivedNotebooks(notebooks));
  });
};

const imageUpload = image => {
  if (image && typeof image === "object") {
    createImageAPI(image).then(imageData => {
      return imageData;
    });
  } else {
    Promise.resolve(null);
  }
};

//could be no image upload and no image attached
//could be no image upload and image is attached

//coulde be image upload and no image attached
//could be image upload and image is attached
//coulde be image removed and notebook is updated

export const removeImage = imageId => {
  //remove image from fs
  //remove image from db
  return new Promise((resolve, reject) => {
    removeImageAPI(imageId).then(data => {
      resolve(data);
    });
  });
};

const createImage = (notebookData, image) => {
  //create image in fs
  //create image in db
  return new Promise((resolve, reject) => {
    createImageAPI(image).then(data => {
      resolve(data);
    });
  });
};

const handleImage = action => {
  const imagePromises = [];
  switch (action) {
    case "REMOVE": {
      imagePromises.push(removeImage);
      break;
    }
    case "REPLACE": {
      imagePromises.push(createImage, removeImage);
      break;
    }
    case "ADD": {
      imagePromises.push(createImage);
      break;
    }
    default: {
      imagePromises.push(null);
      // imagePromises.push(() => Promise.resolve(null));
      break;
    }
  }
  return imagePromises;
};

const updateNotebook = state => {
  return dispatch => {
    dispatch(saveNotebook());
    Promise.all(
      handleImage(state.imageAction).map(fn => {
        if (fn) {
          return fn(state.notebook.image, state.imageFile);
        }
        return Promise.resolve();
      })
    )
      .then(results => {
        console.log("image promises resutls");
        switch (state.imageAction) {
          case "REPLACE":
          case "ADD":
            state.notebook.image = results[0]._id;
            dispatch(createImageAction(results[0]));
            break;
          case "REMOVE":
            state.notebook.image = null;
            break;
          default:
            console.log("default");
            break;
        }
        return state.notebook;
      })
      .then(notebook => {
        console.log("notebook", notebook);
        updateOrCreateNotebookAPI(notebook)
          .then(n => {
            if (!notebook._rev) {
              console.log("dispatching create");
              dispatch(create(n));
              // dispatch(selectNotebook(n._id));
              // dispatch(apiComplete());
            } else {
              dispatch(update(n));

              // dispatch(selectNotebook(n._id));
              // dispatch(apiComplete());
            }
          })
          .catch(reason => {
            // dispatch(apiFail());
          });
      });
  };
};

const removeNotebook = notebook => {
  console.log("removeNotebook");
  return dispatch => {
    removeNotebookAPI(notebook)
      .then(response => {
        dispatch(remove(response.id));
        // dispatch(apiComplete());
      })
      .catch(reason => {
        // dispatch(apiFail());
      });
  };
};

export {
  create,
  remove,
  update,
  selectNotebook,
  updateNotebook,
  removeNotebook,
  showImage,
  hideImage
};
