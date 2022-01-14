import taskReducer from "./reducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({ taskReducer });
export default rootReducer;
