import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cartReducer,
});

export default rootReducers;
