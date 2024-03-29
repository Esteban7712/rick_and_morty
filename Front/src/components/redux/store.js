import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer.js";

//const composed = compose(
  /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
  //applyMiddleware(thunk)
//);

//const store = createStore(rootReducer, composed);

//export default store;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
