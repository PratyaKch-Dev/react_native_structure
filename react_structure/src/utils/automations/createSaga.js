import {
  all,
  takeEvery,
  take,
  put,
  select,
  takeLatest,
  call,
  cancel,
  fork,
} from 'redux-saga/effects';
// import axios from 'axios';
import reduce from 'lodash/reduce';
import split from 'lodash/split';
import size from 'lodash/size';
import join from 'lodash/join';

export const composeSaga = sagas =>
  createSaga(options => {
    const reduceSagas = reduce(
      sagas,
      (prev, curr) => {
        if (curr[0] && curr[1]) {
          prev.push(takeEvery(curr[0], curr[1], options));
        }
        return prev;
      },
      [],
    );
    return reduceSagas;
  });

const createSaga = getSagas =>
  function* saga(...args) {
    // const sagas = getSagas(...args,
    //      {
    // 	restApi: restApi,
    // }

    // )

    const sagas = getSagas(...args);
    return yield all(sagas);
  };

export const sagaRoot = sagaList => {
  const combineFork = ctx => {
    return reduce(
      sagaList,
      (prev, curr) => {
        prev.push(fork(curr, ...ctx));
        return prev;
      },
      [],
    );
  };
  console.log('combineFork :: ', combineFork);
  return createSaga((...ctx) => combineFork(ctx));
};

export default createSaga;
