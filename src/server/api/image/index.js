import ImagePouch from "../../pouch/image";

const { find, create, remove, update } = ImagePouch;

function findAllImagesAPI() {
  return new Promise((resolve, reject) => {
    find()
      .then(response => {
        resolve(response);
      })
      .catch(reason => {
        reject(reason);
      });
  });
}

function updateImage(data) {
  return new Promise((resolve, reject) => {
    find()
      .then(response => {
        resolve(response);
      })
      .catch(reason => {
        reject(reason);
      });
  });
}

function createImage(data) {
  return new Promise((resolve, reject) => {
    create(data)
      .then(response => {
        resolve(response);
      })
      .catch(reason => {
        reject(reason);
      });
  });
}
