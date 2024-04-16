import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import UserReducer from "./userRedux";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: UserReducer,
});

export default rootReducer;
