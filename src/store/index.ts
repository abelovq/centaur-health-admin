import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}) => {
  const middleware = [sagaMiddleware];

  const enhancers: any = [];
  const composeEnhancers = composeWithDevTools({});

  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore();
