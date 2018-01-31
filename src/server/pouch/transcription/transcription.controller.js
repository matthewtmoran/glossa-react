import TranscriptionDb from './transcription.model';

const find = () => {
  return new Promise((resolve, reject) => {
    TranscriptionDb.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      let items = result.rows.map((row) => {
        return row.doc;
      });
      resolve(items);
    }).catch(function (err) {
      console.log(err);
      reject(err)
    });
  })
};

const create = (transcription) => {
  return new Promise((resolve, reject) => {

    return TranscriptionDb.post(transcription).then((response) => {
      if (!response.ok) {
        reject(response)
      }

      return TranscriptionDb.get(response.id).then((t) => {
        resolve(t);
      });

    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  })
};

const update = (transcription) => {
  return new Promise((resolve, reject) => {
    TranscriptionDb.get(transcription._id).then((doc) => {
      transcription._rev = doc._rev;
      return TranscriptionDb.put(transcription).then((response) => {
        if (!response.ok) {
          reject(response)
        }
        resolve(transcription);
      })
    }).catch((err) => {
      console.log(err);
      reject(err);
    });

  })
};

const remove = (transcriptionId) => {
  console.log('removing transcription with id', transcriptionId);
  return new Promise((resolve, reject) => {
    TranscriptionDb.get(transcriptionId)
      .then((doc) => {
        TranscriptionDb.remove(doc._id, doc._rev)
          .then((response) => {
            resolve(response);
          })
          .catch((reason) => {
            reject(reason);
          })
      })
      .catch((reason) => {
        reject(reason);
      })

  })
};



export {
  create,
  find,
  update,
  remove,
}