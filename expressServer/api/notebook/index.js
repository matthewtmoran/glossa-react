const express = require('express');
const router = express.Router();

const {find, create, update, remove, updateOrCreate} = require('../../../pouchdb/notebook');

// Home page route.
router.get('/', (req, res) => {
  find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('err reason', reason);
    });
});

router.post('/', (req, res) => {
  create(JSON.parse(req.body))
    .then((result) => {
      console.log('result', result);
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason')
    })
});


router.put('/', (req, res) => {
  updateOrCreate(JSON.parse(req.body))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});


router.put('/:id', (req, res) => {
  update(JSON.parse(req.body))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});


router.delete('/:id', (req, res) => {
  remove(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});

module.exports = router;