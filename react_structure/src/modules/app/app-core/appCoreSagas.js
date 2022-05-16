import {call, takeEvery, put, select, all} from 'redux-saga/effects';
//  IMPORT SAGAS UTIL
import {composeSaga} from '~/utils/automations/createSaga';
import AsyncStorage from '@react-native-community/async-storage';
//  IMPORT MAIN FILE
import types from './appCoreActionTypes';
import actions from './appCoreActions';
import services from './appCoreServices';
// ---

export function* authLogin({restApi}, action) {
  try {
    const {
      payload: {email, password},
    } = action;

    const authLoginData = yield call(services.authLogin, {
      restApi,
      // Authorization,
      variables: {
        email,
        password,
      },
    });

    if (authLoginData) {
      yield put(
        actions.authLoginSuccess({
          authData: authLoginData,
        }),
      );
    } else {
      // throw new Error(
      // 	`BILLING_ERROR_${messageInfoData.errorMessage}`
      // )
    }
  } catch (error) {
    console.log('authLoginData :error:', error);
    yield put(actions.authLoginFail(error.message));
  }
}

export function* authLogout({restApi}, action) {
  try {
    AsyncStorage.removeItem('appCore');
    yield put(actions.authLogoutSuccess());
  } catch (error) {
    yield put(actions.authLogoutFail(error.message));
  }
}

export default composeSaga([
  //
  [types.AUTH_LOGIN, authLogin],
  [types.AUTH_LOGOUT, authLogout],
]);
