import NotebookPouch from "../../../pouch/notebook";
const { find, create, update, remove, updateOrCreate } = NotebookPouch;

function findAll(req, res) {
  find()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("err reason", reason);
    });
}

function createPost(req, res) {
  create(JSON.parse(req.body))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason");
    });
}

function updateOrCreatePost(req, res) {
  console.log("req.body", req.body);
  updateOrCreate(JSON.parse(req.body))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason", reason);
    });
}

function deletePost(req, res) {
  remove(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(reason => {
      console.log("reason", reason);
    });
}

export { findAll, createPost, updateOrCreatePost, deletePost };
