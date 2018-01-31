import NotebookPouch from '../../pouch/notebook';
// here we define all our functions and pass them to client
//the response we return should be serialized and identical to that of the express controller
//here we connect to the database directly

const {
  find,
  create,
  remove,
  update,
  updateOrCreate
} = NotebookPouch;

const fetchNotebooksAPI = () => {
  return new Promise((resolve, reject) => {
    find()
      .then((response) => {
        console.log('electron response', response);
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const updateNotebookAPI = (data) => {
  return new Promise((resolve, reject) => {
    update(data)
      .then((response) => {
        console.log('electron response', response);
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const createNotebookAPI = (data) => {
  return new Promise((resolve, reject) => {
    create(data)
      .then((response) => {
        console.log('electron response', response);
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const removeNotebookAPI = (data) => {
  return new Promise((resolve, reject) => {
    remove(data)
      .then((response) => {
        console.log('electron response', response);
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const updateOrCreateNotebookAPI = (data) => {
  return new Promise((resolve, reject) => {
    updateOrCreate(data)
      .then((response) => {
        console.log('electron response', response);
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

export {
  fetchNotebooksAPI,
  updateNotebookAPI,
  createNotebookAPI,
  removeNotebookAPI,
  updateOrCreateNotebookAPI
}