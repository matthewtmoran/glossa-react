// here are the actual calls to the api
//the response we return should be serialized and identical to that of the electron controller
// here we make calls to the api

// THIS IS NOT THE EXPRESS API
// THIS CALLS THE API

const fetchImagesAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(`/api/image`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(reason => {
        reject(reason);
      });
  });
};

const updateImageAPI = image => {
  fetch(`/api/image`, {
    method: "PUT",
    body: JSON.stringify(image)
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
      if (!image._rev) {
      } else {
      }
    })
    .catch(reason => {});
};

const createImageAPI = image => {
  console.log("createImageAPI");
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("file", image);
    fetch("/api/image", {
      method: "POST",
      body: formData
    })
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(reason => reject(reason));
  });
};

const removeImageAPI = id => {
  return new Promise((resolve, reject) => {
    fetch(`/api/image/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        response.json().then(data => {
          resolve(data);
        });
      })
      .catch(reason => {
        reject(reason);
      });
  });
};

const updateOrCreateImageAPI = image => {
  console.log("updateOrCreateImageAPI ");
  return new Promise((resolve, reject) => {
    let imageFile = image.image && image.image.file ? image.image.file : null;

    let formData = new FormData();
    formData.append("file", imageFile ? imageFile : null);
    fetch(`/api/image`, {
      method: "PUT",
      body: formData
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(reason => {
        reject(reason);
      });
  });
};

export {
  fetchImagesAPI,
  updateImageAPI,
  createImageAPI,
  removeImageAPI,
  updateOrCreateImageAPI
};
