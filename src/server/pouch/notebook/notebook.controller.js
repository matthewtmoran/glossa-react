//this file communicates with the database and returns the data
//either to express or node api
import NotebookDb from './notebook.model';

const find = () => {
  return new Promise((resolve, reject) => {
    NotebookDb.allDocs({
      include_docs: true,
      attachments: true
    }).then((result) => {
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

const create = (notebook) => {
  return new Promise((resolve, reject) => {

    return NotebookDb.post(notebook).then((response) => {
      if (!response.ok) {
        reject(response)
      }

      return NotebookDb.get(response.id).then((t) => {
        resolve(t);
      });

    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  })
};

const update = (notebook) => {
  return new Promise((resolve, reject) => {
    NotebookDb.get(notebook._id).then((doc) => {
      notebook._rev = doc._rev;
      return NotebookDb.put(notebook).then((response) => {
        if (!response.ok) {
          reject(response)
        }
        resolve(notebook);
      })
    }).catch((err) => {
      console.log(err);
      reject(err);
    });

  })
};

const remove = (notebookId) => {
  return new Promise((resolve, reject) => {
    NotebookDb.get(notebookId)
      .then((doc) => {
        NotebookDb.remove(doc._id, doc._rev)
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

const updateOrCreate = (data) => {
  return new Promise((resolve, reject) => {
    //if there is no id with doc we are sending its a new document
    if (!data._id) {
      //posting it creates a dynamic id
      NotebookDb.post(data)
        .then((response) => {
          NotebookDb.get(response.id)
            .then(res => resolve(res))
            .catch(reason => {
              reject(reason)
            })
        })
        .catch(reason => reject(reason))
      //otherwise its an existing doc so retrieve it
    } else {
      NotebookDb.get(data._id).catch((err) => {
        if (err.name === 'not_found') {
          //if for whatever reason we can't find it post it again...
          NotebookDb.post(data)
            .then((response) => {
              NotebookDb.get(response._id)
                .then(res => resolve(res))
                .catch(reason => reject(reason))
            })
            .catch(reason => reject(reason))
        } else { // hm, some other error
          throw err;
        }
        //  if we get a doc back update it
      }).then((doc) => {
        //update rev id
        data._rev = doc._rev;
        //put updates with id
        NotebookDb.put(data).then(response => !response.ok ? reject(response) : resolve(data));
      }).catch((err) => {
        reject(err)
      });
    }

  })
};

export {
  find,
  create,
  remove,
  update,
  updateOrCreate
}
