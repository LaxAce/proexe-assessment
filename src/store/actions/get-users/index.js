import * as types from "../../action-types";
import AxiosCall from "../../../utils/axios";

export const getUsersStart = () => ({
  type: types.GET_USERS_START,
});

export const getUserSuccess = (payload) => ({
  type: types.GET_USERS_SUCCESS,
  payload,
});

export const getUsersFail = (payload) => ({
  type: types.GET_USERS_FAIL,
  payload,
});

export const getUsersCleanup = () => ({
  type: types.GET_USERS_CLEANUP,
});

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const requestObj = {
      path: "karolkproexe/jsonplaceholderdb/data",
      method: "GET",
    };
    const data = await AxiosCall(requestObj);
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUsersFail(error));
  }
};
