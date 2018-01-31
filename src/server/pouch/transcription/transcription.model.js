import PouchDb from 'pouchdb';
import path from 'path';

let databasePath;
let appData;
let appName = 'glossa-react';   //TODO Use package.json file for this var
let pouchPath = 'storage';
let databaseName = 'transcription';

//NOTE: the web server and node server will be looking at different data due to the adapter(and possible the name) of pouchdb


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

const NotebookDb = new PouchDb(databasePath);

export default NotebookDb;