import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./user.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
});
