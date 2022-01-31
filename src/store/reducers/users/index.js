import { users as initialState } from "../../initialState";
import * as types from "../../action-types";

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case types.CREATE_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.DELETE_USER:
      const filteredUser = state.data.filter((user) =>
        user.id == action.payload ? null : user
      );
      return {
        ...state,
        data: filteredUser,
      };
    case types.UPDATE_USER:
      const updateUser = state.data.filter((user) =>
        user.id === action.payload.id
          ? Object.assign(user, action.payload)
          : user
      );
      return {
        ...state,
        data: updateUser,
      };
    case types.RESET_USER:
      state = [{ name: null, email: null, address: null, username: null }];
      return state;
    default:
      return state;
  }
};

export default users;
