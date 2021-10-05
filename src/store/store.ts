import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites', 'history', 'settings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
