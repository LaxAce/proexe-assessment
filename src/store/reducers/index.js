import { combineReducers } from "redux";
import getUsers from "./get-users";
import users from "./users";

const rootReducer = combineReducers({
  getUsers,
  users,
});

export default rootReducer;
