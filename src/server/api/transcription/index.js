import TranscriptionPouch from '../../pouch/transcription';
// here we define all our functions and pass them to client
//the response we return should be serialized and identical to that of the express controller
//here we connect to the database directly

const {
  find,
  create,
  remove,
  update,
} = TranscriptionPouch;

const fetchTranscriptionsAPI = () => {
  return new Promise((resolve, reject) => {
    find()
      .then((response) => {
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const updateTranscriptionAPI = (data) => {
  return new Promise((resolve, reject) => {
    update(data)
      .then((response) => {
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const createTranscriptionAPI = (data) => {
  return new Promise((resolve, reject) => {
    create(data)
      .then((response) => {
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

const removeTranscriptionAPI = (data) => {
  return new Promise((resolve, reject) => {
    remove(data)
      .then((response) => {
        resolve(response);
      })
      .catch((reason) => {
        reject(reason)
      })
  })
};

export {
  fetchTranscriptionsAPI,
  updateTranscriptionAPI,
  createTranscriptionAPI,
  removeTranscriptionAPI,
}