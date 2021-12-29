import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

let store;

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() //Eventually this needs to be 'ReactReduxDevTools'
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export default store;
