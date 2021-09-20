import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
