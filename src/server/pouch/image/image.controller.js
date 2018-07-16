import ImageDb from './image.model';

//this file communicates with the database and returns the data
//either to express or node api

const findOne = () => {

};

const find = () => {
  return new Promise((resolve, reject) => {
    ImageDb.allDocs({
      include_docs: true,
      attachments: true
    }).then((result) => {
      let items = result.rows.map((row) => {
        return row.doc;
      });
      resolve(items);
    }).catch(function (err) {
      console.log(err);
      reject(err)
    });
  })
};

const create = (image) => {
  return new Promise((resolve, reject) => {

    return ImageDb.post(image).then((response) => {
      if (!response.ok) {
        reject(response)
      }

      return ImageDb.get(response.id).then((t) => {
        resolve(t);
      });

    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  })
};

const update = (image) => {
  return new Promise((resolve, reject) => {
    ImageDb.get(image._id).then((doc) => {
      image._rev = doc._rev;
      return ImageDb.put(image).then((response) => {
        if (!response.ok) {
          reject(response)
        }
        resolve(image);
      })
    }).catch((err) => {
      console.log(err);
      reject(err);
    });

  })
};

const remove = (imageId) => {
  return new Promise((resolve, reject) => {
    ImageDb.get(imageId)
      .then((doc) => {
        ImageDb.remove(doc._id, doc._rev)
          .then((response) => {
            resolve(response);
          })
          .catch((reason) => {
            reject(reason);
          })
      })
      .catch((reason) => {
        reject(reason);
      })

  })
};

const updateOrCreate = (data) => {
  return new Promise((resolve, reject) => {
    //if there is no id with doc we are sending its a new document
    if (!data._id) {
      //posting it creates a dynamic id
      ImageDb.post(data)
        .then((response) => {
          ImageDb.get(response.id)
            .then(res => resolve(res))
            .catch(reason => {
              reject(reason)
            })
        })
        .catch(reason => reject(reason))
      //otherwise its an existing doc so retrieve it
    } else {
      ImageDb.get(data._id).catch((err) => {
        if (err.name === 'not_found') {
          //if for whatever reason we can't find it post it again...
          ImageDb.post(data)
            .then((response) => {
              ImageDb.get(response._id)
                .then(res => resolve(res))
                .catch(reason => reject(reason))
            })
            .catch(reason => reject(reason))
        } else { // hm, some other error
          throw err;
        }
        //  if we get a doc back update it
      }).then((doc) => {
        //update rev id
        data._rev = doc._rev;
        //put updates with id
        ImageDb.put(data).then(response => !response.ok ? reject(response) : resolve(data));
      }).catch((err) => {
        reject(err)
      });
    }

  })
};

export {
  find,
  create,
  remove,
  update,
  updateOrCreate
}
