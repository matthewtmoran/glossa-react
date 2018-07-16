import {storagePath} from '../pouch/notebook/notebook.model';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const transcriptionAPI = require('./api/transcription');
const notebookAPI = require('./api/notebook');
const imageAPI = require('./api/image');

const app = express();
const PORT = process.env.PORT || 8080;
app.use('/image', express.static(path.join(storagePath, 'image')));



// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/api/transcription', transcriptionAPI);
app.use('/api/notebook', notebookAPI);
app.use('/api/image', imageAPI);


app.listen(PORT, function () {
  console.log(`API server Listening on port ${PORT}`);
});