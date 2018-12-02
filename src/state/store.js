import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {all} from "redux-saga/effects";
import {createLogger} from "redux-logger";
import createSagaMiddleware from "redux-saga";

import {chatSaga} from "./ducks/chat";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js

function* rootSaga() {
  yield all([chatSaga()]);
}

export default function configureStore() {
  const middlewares = [];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger({level: "info", collapsed: true}));

  const rootReducer = combineReducers(reducers);

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
}
