import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
