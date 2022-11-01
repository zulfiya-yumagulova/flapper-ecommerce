import { createStore } from "redux";
import reducers from "./reducers/index";

// Creating store
// I know configureStore was introduced but I coud not connect it that's why I used createStore
const store = createStore(
  reducers,
  // That extension is used to see Redux Store in web browser's Dev Tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
