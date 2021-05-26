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
    const access_token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnb2FwaS50cmF2ZWxpZ28uY29tIiwiaWQiOiIzIiwiaWF0IjoxNjIyMDQwNTkxLCJleHAiOjE2MjIwNDc3OTF9.we76aruZ6DBVh6lPEc3ZQE7ZTz47LG5_OYvTQwM75Mk';

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

      console.log('hotelDealsData ::', hotelDealsData);

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
