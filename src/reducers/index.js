import {combineReducers} from "redux";

import users from "./usersReducer";
import admin from "./adminReducer";

export default combineReducers({
	users
	// admin
});