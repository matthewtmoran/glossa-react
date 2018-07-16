import path from "path";
import { storagePath } from "../../../pouch/notebook/notebook.model";

const multer = require("multer");

const imagePath = path.join(storagePath, "image");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imagePath);
  },
  filename: function(req, file, cb) {
    const filename = file.originalname.replace(
      /(\.[\w\d_-]+)$/i,
      Date.now() + "$1"
    );
    cb(null, filename);
  }
});

let upload = multer({ storage: storage }).array("file");

const imageUpload = (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      throw err;
    }
    const image = CreateImageMeta(req.files[0]);
    req.body.image = JSON.stringify(image);
    next();
  });
};

const CreateImageMeta = file => {
  return {
    filename: file.filename,
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size,
    path: path.join("image", file.filename),
    absolutePath: file.path,
    createdAt: Date.now()
  };
};

export default imageUpload;
