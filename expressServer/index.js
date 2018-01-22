const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const {find, create} = require('../pouchdb/transcription');


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.get('/api/hello', (req, res) => {
  console.log('requesting hello path...');
});

app.get('/api/transcription', (req, res) => {
  console.log('requesting transcriptions...');
  find()
    .then((result) => {

      console.log('result',result);

      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('err reason', reason);
    });
});


app.post('/api/transcription', (req, res) => {
  create()
    .then((result) => {
      console.log('result', result);
    })
    .catch((reason) => {
      console.log('reason')
    })
  // res.send({ express: 'Hello From Express' });
});

app.listen(PORT, function () {
  console.log(`API server Listening on port ${PORT}`);
});