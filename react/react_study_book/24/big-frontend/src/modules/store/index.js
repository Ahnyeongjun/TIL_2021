import createSaga from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../saga";
import rootReducer from "../redux";

const saga = createSaga();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);


export default store;
