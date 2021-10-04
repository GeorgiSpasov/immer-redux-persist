import {fork} from 'redux-saga/effects';
import newsSagas from 'store/news/newsSagas';

export default function* sagas() {
  yield fork(newsSagas);
}
