import express from "express";
import ImagePouch from "../../../pouch/image";
import path from "path";
import imageUpload from "./upload";
import { storagePath } from "../../../pouch/image/image.model";

var multer = require("multer");
let imagePath = path.join(storagePath, "image");

let router = express.Router();

//TODO: move function to controller

const { find, create, update, remove, updateOrCreate } = ImagePouch;

// const CreateImageMeta = file => ({
//   originalname: file.originalname,
//   mimetype: file.mimetype,
//   size: file.size,
//   path: path.join("image", file.filename),
//   absolutePath: file.path,
//   filename: file.filename,
//   createdAt: Date.now()
// });

// Home page route.
router.get("/", (req, res) => {
  find()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("err reason", reason);
      throw reason;
    });
});

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, imagePath);
//   },
//   filename: function(req, file, cb) {
//     let date = "-" + Date.now();
//     let name = file.originalname.replace(/(\.[\w\d_-]+)$/i, date + "$1");
//     cb(null, name);
//   }
// });

// const upload = multer({ storage: storage }).array("file");

// const imageUpload = (req, res, next) => {
//   upload(req, res, err => {
//     if (err) {
//       throw err;
//     }
//     const image = CreateImageMeta(req.files[0]);
//     console.log("image:", image);
//     req.body.image = JSON.stringify(image);
//     next();
//   });
// };

router.post("/", imageUpload, (req, res) => {
  console.log("image post triggered");
  console.log(typeof req.body.image);
  console.log(req.body.image);
  const image = JSON.parse(req.body.image);
  console.log("image", image);
  create(JSON.parse(req.body.image))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason");
    });
});

router.put("/", imageUpload, (req, res, next) => {
  console.log("image put being triggered");
  console.dir(JSON.parse(req.body.image), { depth: null, colors: true });

  updateOrCreate(JSON.parse(req.body.image))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason", reason);
    });
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
//   // let image = JSON.parse(req.body.image);
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

router.put("/:id", (req, res) => {
  update(JSON.parse(req.body))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason", reason);
    });
});

router.delete("/:id", (req, res) => {
  remove(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason", reason);
    });
});

module.exports = router;
