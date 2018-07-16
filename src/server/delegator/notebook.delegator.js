// here are the actual calls to the api
//the response we return should be serialized and identical to that of the electron controller
// here we make calls to the api

// THIS IS NOT THE EXPRESS API
// THIS CALLS THE API

const fetchNotebooksAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(`/api/notebook`)
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

const updateNotebookAPI = notebook => {
  fetch(`/api/notebook`, {
    method: "PUT",
    body: JSON.stringify(notebook)
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
      if (!notebook._rev) {
      } else {
      }
    })
    .catch(reason => {});
};

const createNotebookAPI = () => {};

const removeNotebookAPI = notebook => {
  return new Promise((resolve, reject) => {
    fetch(`/api/notebook/${notebook._id}`, {
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

function updateOrCreateNotebookAPI(notebook) {
  console.log("updateOrCreateNotebookAPI ", notebook);
  return new Promise((resolve, reject) => {
    fetch(`/api/notebook`, {
      method: "PUT",
      body: JSON.stringify(notebook)
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
}

export {
  fetchNotebooksAPI,
  updateNotebookAPI,
  createNotebookAPI,
  removeNotebookAPI,
  updateOrCreateNotebookAPI
};
