import {normalize, schema} from 'normalizr';

const image = new schema.Entity('images');
const notebook = new schema.Entity(
  'notebooks',
  {image: image},
  {idAttribute: notebook => notebook._id},
);
// const notebook = new schema.Entity(
//   'byId',
//   {},
//   // {
//   //   image: image,
//   // },
//   {idAttribute: notebook => notebook._id},
// );

const notebookList = [notebook];
// console.log('notebookList', notebookList);

// Define your article
const notebookNormalizer = notebookResult => {
  console.log('notebookResult ', notebookResult);
  console.log('normalized reuslts', normalize(notebookResult, notebookList));
  return normalize(notebookResult, notebookList);
};

export default notebookNormalizer;
