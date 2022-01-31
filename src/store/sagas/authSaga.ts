import { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

import { AuthActionsEnum } from '../reducers/types';
import { Logger } from '../utils';
import authService from './services/authService';

function* registerSaga(payload: any) {
  try {
    const resposne: AxiosResponse<any> = yield call(
      authService.register,
      payload
    );
    Logger.error(resposne.data);
    // history push /login ?
  } catch (err: any) {
    if (err.response != null) {
      const error = new Error(
        `Store::AuthSagas:signInRequest Request failed with status ${err.response.status} and message ${err.response.data.message}`
      );
      error.message = err.response.data.message;
      Logger.error(error);
    } else {
      Logger.error(err);
    }
  }
}

function* loginSaga(payload: any) {
  try {
    const response: AxiosResponse = yield call(authService.login, payload);

    yield put({
      type: AuthActionsEnum.SAVE_CURRENT_USER,
      payload: response.data,
    });
  } catch (err: any) {
    if (err.response != null) {
      const error = new Error(
        `Store::AuthSagas:signInRequest Request failed with status ${err.response.status} and message ${err.response.data.message}`
      );
      error.message = err.response.data.message;
      Logger.error(error);
      // yield put()
    } else {
      Logger.error(err);
    }
  }
}

function* logOutSaga() {
  try {
    yield put({ type: AuthActionsEnum.CLEAR_CURRENT_USER });
    // history push login
  } catch (error) {
    Logger.error(error);
  }
}

export default function* watchUserAuthentication() {
  yield takeEvery(AuthActionsEnum.SIGN_UP, registerSaga);
  yield takeEvery(AuthActionsEnum.SIGN_IN, loginSaga);
  yield takeEvery(AuthActionsEnum.SIGN_OUT, logOutSaga);
}
