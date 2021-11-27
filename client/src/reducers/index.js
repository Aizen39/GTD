import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./user.reducer";
import postReducer from "./post.reduce";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
});
