import express from 'express';
import TranscriptionPouch from '../../../pouch/transcription';
let router = express.Router();

const {
  find,
  create,
  update,
  remove,
} = TranscriptionPouch;

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


router.put('/', (req, res) => {
  update(JSON.parse(req.body))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      handleError(res, reason);

    })
});


router.delete('/:id', (req, res) => {
  console.log('delete called');
  remove(req.params.id)
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