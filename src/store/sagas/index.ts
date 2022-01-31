import { fork, all } from 'redux-saga/effects';
import watchUserAuthentication from './authSaga';

export default function* rootSaga() {
  yield all([fork(watchUserAuthentication)]);
}
