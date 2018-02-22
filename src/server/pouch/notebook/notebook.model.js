import PouchDb from 'pouchdb';
import path from 'path';

let databasePath;
let appData;
let appName = 'glossa-react';   //TODO Use package.json file for this var
let pouchPath = 'storage';
let databaseName = 'notebook';
let storagePath;


if (isElectron()) {
  const remote = window.require('electron').remote;
  const app = remote.app;
  appData = app.getPath('userData');

  databasePath = path.join(appData, pouchPath, databaseName)

} else {
  appData = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local');

  storagePath = path.join(appData, appName, pouchPath);

  databasePath = path.join(storagePath, databaseName);
}


function isElectron() {
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }
}

const NotebookDb = new PouchDb(databasePath);

export {
  storagePath
}

export default NotebookDb;