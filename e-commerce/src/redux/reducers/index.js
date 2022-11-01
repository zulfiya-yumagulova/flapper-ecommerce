import basketReducer from "./basketReducer";
import { combineReducers } from "redux";

// Combining Reducers
const reducers = combineReducers({
  basketReducer,
});

export default reducers;
