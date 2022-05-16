import {call, takeEvery, put, select, all} from 'redux-saga/effects';
//  IMPORT SAGAS UTIL
import {composeSaga} from '~/utils/automations/createSaga';
//  IMPORT MAIN FILE
import types from './exampleCoreActionTypes';
import actions from './exampleCoreActions';
import services from './exampleCoreServices';
// ---
export function* getData({restApi}, action) {
  // export function* getData(action) {
  try {
    const {
      payload: {accessToken, refreshToken},
    } = action;
    yield put(
      actions.getDataSuccess({
        exampleValue: 'test',
      }),
    );
  } catch (error) {
    yield put(actions.getDataFail(error.message));
  }
}

export function* getHotelDeals({restApi}, action) {
  try {
    const access_token = '';

    if (access_token) {
      const Authorization = `Bearer ${access_token}`;
      const hotelDealsData = yield call(services.getHotelDeal, {
        restApi,
        Authorization,
        variables: {
          limit: '50',
          page: '1',
        },
      });

      if (hotelDealsData) {
        yield put(
          actions.getHotelDealsSuccess({
            hotelDeals: hotelDealsData.hotelDeals,
          }),
        );
      } else {
        // throw new Error(
        // 	`BILLING_ERROR_${messageInfoData.errorMessage}`
        // )
      }
    } else {
      // throw new Error('BILLING_ERROR')
    }
  } catch (error) {
    yield put(actions.getHotelDealsFail(error.message));
  }
}

export default composeSaga([
  //
  [types.GET_DATA, getData],
  [types.GET_HOTEL_DEALS, getHotelDeals],
]);
