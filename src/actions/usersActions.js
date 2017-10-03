import * as types from './actionTypes';

export function addData(id, email, password) {
  return { type: types.ADD_USER_DATA, id, email, password }
}

export function editData(id, email, password) {
  return { type: types.EDIT_USER_DATA, id, email, password }
}

export function deleteData(id) {
  return { type: types.DELETE_USER_DATA, id }
}

export function deleteAll() {
  return { type: types.DELETE_USER_ALL }
}

export function loadData() {
  return { type: types.LOAD_USER_DATA }
}