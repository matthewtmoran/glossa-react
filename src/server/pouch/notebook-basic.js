import PouchDB from 'pouchdb';
// const PouchDB = require('pouchdb').default;
const path = require('path');
let databasePath;
let appData;
let appName = 'glossa-react';   //TODO Use package.json file for this var
let pouchPath = 'storage';
let databaseName = 'notebook';

//TODO: need to create file structure programatically
//works for express note electron
if (isElectron()) {
  const remote = window.require('electron').remote;
  const app = remote.app;
  appData = app.getPath('userData');
  databasePath = path.join(appData, pouchPath, databaseName)
} else {
appData = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local');
  databasePath = path.join(appData, appName, pouchPath, databaseName);
}

function isElectron() {
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }
}

const db = new PouchDB(databasePath);
// const docs = [
//   {_id: 'doc01', title: 'uno'}, {_id: 'doc02', title: 'dos'},
//   {_id: 'doc03', title: 'tres'}, {_id: 'doc04', title: 'cuatro'},
//   {_id: 'doc05', title: 'cinco'}, {_id: 'doc06', title: 'seis'},
//   {_id: 'doc07', title: 'siete'}, {_id: 'doc08', title: 'ocho'},
//   {_id: 'doc09', title: 'nueve'}, {_id: 'doc10', title: 'diez'},
//   {_id: 'doc11', title: 'once'}, {_id: 'doc12', title: 'doce'},
//   {_id: 'doc13', title: 'trece'}, {_id: 'doc14', title: 'catorce'},
//   {_id: 'doc15', title: 'quince'}, {_id: 'doc16', title: 'dieciseis'},
//   {_id: 'doc17', title: 'diecisiete'}, {_id: 'doc18', title: 'dieciocho'},
//   {_id: 'doc19', title: 'diecinueve'}, {_id: 'doc20', title: 'veinte'},
// ]

// db.bulkDocs({docs : docs}, (err, response) => {
//   if (err) {
//     throw err;
//   }
//   console.log('seeded db');
// });

const findAPI = () => {
  return new Promise((resolve, reject) => {
    db.allDocs({
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

const createAPI = (notebook) => {
  return new Promise((resolve, reject) => {

    return db.post(notebook).then((response) => {
      if (!response.ok) {
        reject(response)
      }

      return db.get(response.id).then((t) => {
        resolve(t);
      });

    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  })
};
const updateAPI = (notebook) => {
  return new Promise((resolve, reject) => {
    db.get(notebook._id).then((doc) => {
      notebook._rev = doc._rev;
      return db.put(notebook).then((response) => {
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
const removeAPI = (notebookId) => {
  return new Promise((resolve, reject) => {
    db.get(notebookId)
      .then((doc) => {
        db.remove(doc._id, doc._rev)
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

const updateOrCreateAPI = (data) => {
  return new Promise((resolve, reject) => {

    //if there is no id with doc we are sending its a new document
    if (!data._id) {
      //posting it creates a dynamic id
      db.post(data)
        .then((response) => {
          db.get(response.id)
            .then(res => resolve(res))
            .catch(reason => {
              reject(reason)
            })
        })
        .catch(reason => reject(reason))
      //otherwise its an existing doc so retrieve it
    } else {
      db.get(data._id).catch((err) => {
        if (err.name === 'not_found') {
          //if for whatever reason we can't find it post it again...
          db.post(data)
            .then((response) => {
              db.get(response._id)
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
        db.put(data).then(response => !response.ok ? reject(response) : resolve(data));
      }).catch((err) => {
        reject(err)
      });
    }

  })
};

export {
  findAPI,
  createAPI,
  removeAPI,
  updateOrCreateAPI
}
