const CREATE = 'transcription/CREATE';
const UPDATE = 'transcription/UPDATE';
const REMOVE = 'transcription/REMOVE';
const SELECT = 'transcription/SELECT';

const BEGIN_UPDATE = 'transcription/BEGIN_UPDATE';
const COMPLETE_UPDATE = 'transcription/COMPLETE_UPDATE';
const FAILED_UPDATE = 'transcription/FAILED_UPDATE';

const FETCH_LIST = "product/FETCH_LIST_REQUEST";
const FETCH_LIST_COMPLETED = "product/FETCH_LIST_COMPLETED";
const FETCH_LIST_FAILED = "product/FETCH_LIST_FAILED";
const HYDRATE = "product/HYDRATE";

export {
  CREATE,
  UPDATE,
  REMOVE,
  SELECT,
  FETCH_LIST,
  FETCH_LIST_COMPLETED,
  FETCH_LIST_FAILED,
  HYDRATE,
  BEGIN_UPDATE,
  COMPLETE_UPDATE,
  FAILED_UPDATE
};
