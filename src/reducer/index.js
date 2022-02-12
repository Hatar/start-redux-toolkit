import { combineReducers } from "redux";
import counter from "../reducer/counter";
import users from "../reducer/users";

export default combineReducers({ counter, users });
