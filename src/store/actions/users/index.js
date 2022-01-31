import * as types from "../../action-types";

export const createUser = (payload) => ({
  type: types.CREATE_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: types.UPDATE_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: types.DELETE_USER,
  payload,
});

export const allUsers = (payload) => ({
  type: types.ALL_USERS,
  payload,
});
