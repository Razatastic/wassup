import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer
});

export default rootReducer;
