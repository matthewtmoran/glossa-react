import express from 'express';
import NotebookPouch from '../../../pouch/notebook';
import path from 'path';
import {storagePath} from '../../../pouch/notebook/notebook.model';

var multer = require('multer');
let imagePath = path.join(storagePath, 'image');

let router = express.Router();


//TODO: move function to controller

const {
  find,
  create,
  update,
  remove,
  updateOrCreate
} = NotebookPouch;

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
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason')
    })
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath)
  },
  filename: function (req, file, cb) {
    let date = '-' + Date.now();
    let name = file.originalname.replace(/(\.[\w\d_-]+)$/i, date + '$1');
    cb(null, name)
  }
});

let upload = multer({ storage: storage }).array('file');

const imageUpload = ((req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('uploadError');
      throw err;
    }
    console.log('req.files', req.files);
    //build image object data
    // console.log('req.files', req.files);

    let notebook = JSON.parse(req.body.notebook);
    notebook.image = ImageMeta(req.files[0]);
    req.body.notebook = JSON.stringify(notebook);

    next();
  });
});

function ImageMeta(file) {
  return {
    originalName:file.originalName,
    mimetype: file.mimetype,
    size: file.size,
    path: path.join('image', file.filename),
    absolutePath: file.path,
    filename: file.filename,
    createdAt: Date.now(),
  };
}

router.put('/', imageUpload, (req, res, next) => {
  console.dir(JSON.parse(req.body.notebook), {depth: null, colors: true});

  updateOrCreate(JSON.parse(req.body.notebook))
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((reason) => {
      console.log('reason', reason)
    })
});

// router.put('/', (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log('uploadError');
//       throw err;
//     }
//     console.log('upload image success?');
//     console.log('req.files', req.files);
//   });
//
//   // let notebook = JSON.parse(req.body.notebook);
//   // let media = JSON.parse(req.body.media);
//
//   let body = req.body;
//
//   // updateOrCreate(JSON.parse(req.body))
//   //   .then((result) => {
//   //     res.status(200).send(result);
//   //   })
//   //   .catch((reason) => {
//   //     console.log('reason', reason)
//   //   })
// });


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