import { normalize, schema } from 'normalizr';


const image = new schema.Entity('images');
const notebook = new schema.Entity('notebooks', {
  image: image
});
const transcription = new schema.Entity('transcriptions', {
  notebook: notebook
});

// Define your article

const normalizedData = normalize(originalData, article);