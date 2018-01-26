const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const {find, create, update, deleteTrans} = require('../pouchdb/transcription');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.get('/api/transcription', (req, res) => {
  find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('err reason', reason);
    });
});


app.post('/api/transcription', (req, res) => {
  create(JSON.parse(req.body))
    .then((result) => {
      console.log('result', result);
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason')
    })
});


app.put('/api/transcription/:id', (req, res) => {
  update(JSON.parse(req.body))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});



app.delete('/api/transcription/:id', (req, res) => {
  deleteTrans(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});

app.listen(PORT, function () {
  console.log(`API server Listening on port ${PORT}`);
});