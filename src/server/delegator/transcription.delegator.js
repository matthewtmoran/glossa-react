// here are the actual calls to the api
//the response we return should be serialized and identical to that of the electron controller
// here we make calls to the api


// THIS IS NOT THE EXPRESS API
// THIS CALLS THE API


const fetchTranscriptionsAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(`/api/transcription`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((reason) => {
        reject(reason);
      })
  });
};

const updateTranscriptionAPI = (transcription) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/transcription`, {
      method: 'PUT',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then((data) => {
        resolve(data);
      })
      .catch((reason) => {
        reject(reason);
      })
  })
};

const createTranscriptionAPI = (transcription) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/transcription`, {
      method: 'POST',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
        response.json().then((data) => {
          resolve(data);
        })
      })
      .catch((response) => {
        console.log('error response', response);
        reject(response);
      })
  });
};

const removeTranscriptionAPI = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/transcription/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('response', response);
        response.json().then((data) => {
          resolve(data);
        })
      })
      .catch((reason) => {
      console.log("reason", reason)
        reject(reason);
      })
  })

};

const updateOrCreateTranscriptionAPI = (transcription) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/transcription`, {
      method: 'PUT',
      body: JSON.stringify(transcription)
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then((data) => {
        resolve(data);
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
  updateOrCreateTranscriptionAPI
}