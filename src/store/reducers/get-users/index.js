import { getUsers as initialState } from "../../initialState";
import * as types from "../../action-types";

const getUsers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_USERS_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };
    default:
      return state;
  }
};

export default getUsers;
