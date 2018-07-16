const CREATE = "notebook/CREATE";
const REMOVE = "notebook/REMOVE";
const UPDATE = "notebook/UPDATE";
const SELECT = "notebook/SELECT";
const DESELECT = "notebook/DESELECT";
const REQUEST = "notebook/REQUEST";
const RECEIVED = "notebook/RECEIVED";
const SAVE = "notebook/SAVE";

const API_REQUESTING = "notebook/API/REQUESTING";
const API_COMPLETE = "notebook/API/COMPLETE";
const API_FAILED = "notebook/API/FAILED";

const SHOW = "notebook/SHOW_IMAGE";
const HIDE = "notebook/HIDE_IMAGE";

const UPLOAD_SUCCESS = "notebook/UPLOAD_SUCCESS";
const UPLOAD_FAIL = "notebook/UPLOAD_FAIL";

const FETCH_NOTEBOOKS = "notebook/FETCH_NOTEBOOKS";

const CACHE_NOTEBOOK = "notebook/CACHE_NOTEBOOK";
const CACHE_IMAGE = "notebook/CACHE_IMAGE";
const RESTORE_IMAGE = "notebook/RESTORE_IMAGE";
const RESTORE_NOTEBOOK = "notebook/RESTORE_NOTEBOOK";
const CLEAR_CACHE = "notebook/CLEAR_CACHE";

export {
  CREATE,
  REMOVE,
  UPDATE,
  SELECT,
  DESELECT,
  RECEIVED,
  REQUEST,
  SHOW,
  HIDE,
  FETCH_NOTEBOOKS,
  API_REQUESTING,
  API_COMPLETE,
  API_FAILED,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  CACHE_NOTEBOOK,
  CACHE_IMAGE,
  RESTORE_IMAGE,
  RESTORE_NOTEBOOK,
  CLEAR_CACHE,
  SAVE
};
