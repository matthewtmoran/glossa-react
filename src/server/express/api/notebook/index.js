import express from "express";
import NotebookPouch from "../../../pouch/notebook";
import {
  findAll,
  createPost,
  updateOrCreatePost,
  deletePost
} from "./controller";
const router = express.Router();

// Home page route.
router.get("/", findAll);
router.post("/", createPost);
router.put("/", updateOrCreatePost);
router.delete("/:id", deletePost);

// router.put("/:id", (req, res) => {
//   update(JSON.parse(req.body))
//     .then(result => {
//       res.status(200).send(result);
//     })
//     .catch(reason => {
//       console.log("reason", reason);
//     });
// });

module.exports = router;
