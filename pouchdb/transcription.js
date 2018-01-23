const path = require('path');
const PouchDB = require('pouchdb');
let databasePath;
let appData = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local');

//TODO: need to create file structure programatically
//puchdb intended path
let pouchPath = 'storage';
let appName = 'glossa-react';   //TODO Use package.json file for this var
let databaseName = 'transcription';
databasePath = path.join(appData, appName, pouchPath, databaseName);

var db = new PouchDB(databasePath);

const docs = [
  {_id: 'doc01', title: 'uno'}, {_id: 'doc02', title: 'dos'},
  {_id: 'doc03', title: 'tres'}, {_id: 'doc04', title: 'cuatro'},
  {_id: 'doc05', title: 'cinco'}, {_id: 'doc06', title: 'seis'},
  {_id: 'doc07', title: 'siete'}, {_id: 'doc08', title: 'ocho'},
  {_id: 'doc09', title: 'nueve'}, {_id: 'doc10', title: 'diez'},
  {_id: 'doc11', title: 'once'}, {_id: 'doc12', title: 'doce'},
  {_id: 'doc13', title: 'trece'}, {_id: 'doc14', title: 'catorce'},
  {_id: 'doc15', title: 'quince'}, {_id: 'doc16', title: 'dieciseis'},
  {_id: 'doc17', title: 'diecisiete'}, {_id: 'doc18', title: 'dieciocho'},
  {_id: 'doc19', title: 'diecinueve'}, {_id: 'doc20', title: 'veinte'},
]

// db.bulkDocs({docs : docs}, (err, response) => {
//   if (err) {
//     throw err;
//   }
//   console.log('seeded db');
// });


module.exports.find = function find() {
  return new Promise((resolve, reject) => {
    db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      let items = result.rows.map((row) => {
        return row.doc;
      });
      // let data = {
      //   transcriptions: items
      // };
      resolve(items);
    }).catch(function (err) {
      console.log(err);
      reject(err)
    });
  })
};

module.exports.create = function create(transcription) {
  return new Promise((resolve, reject) => {
    db.put(transcription).then((response) => {
      console.log('success in adding transcription', response);

      resolve(response);

      // handle response
    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  })
};

module.exports.update = function update(transcription) {
  return new Promise((resolve, reject) => {
    db.get(transcription._id).then((doc) => {
      transcription._rev = doc._rev;
      return db.put(transcription).then((response) => {
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
