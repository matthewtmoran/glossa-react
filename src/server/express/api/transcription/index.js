const express = require('express');
const router = express.Router();

const {find, create, update, deleteTrans} = require('../../../pouch/transcription');

// Home page route.
router.get('/', (req, res) => {
  find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('err reason', reason);
      handleError(res, reason);
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
      handleError(res, reason);
    })
});


router.put('/:id', (req, res) => {
  update(JSON.parse(req.body))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      handleError(res, reason);

    })
});


router.delete('/:id', (req, res) => {
  deleteTrans(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason);
      handleError(res, reason);
    })
});



function handleError(res, err) {
  return res.status(500).send(err);
}

module.exports = router;