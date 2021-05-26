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
import axios from 'axios';
import reduce from 'lodash/reduce';
import split from 'lodash/split';
import size from 'lodash/size';
import join from 'lodash/join';

import endpoints from '~/configs/endpoints';

export const restApi = async ({
  params,
  headerParams,
  headers,
  service,
  fullService,
  responseType = 'json',
  responseEncoding = 'utf8',
  method,
  auth,
  body,
  useBasicAuth,
  apiDomain,
  apiEndpoint,
  formData,
}) => {
  try {
    let url = null;
    if (apiDomain && apiEndpoint) {
      url = `https://${apiDomain}.${apiEndpoint}`;
    } else if (fullService) {
      url = fullService;
    }
    // else if (service) {
    // 	url = `${endpoints.config.API_URL}${service}`
    // }

    let setRequest = {
      method: method,
      url: url,
      responseType,
      responseEncoding,
    };

    if (headers) {
      setRequest.headers = headers;
    }

    if (auth) {
      setRequest.auth = auth;
    }

    if (useBasicAuth) {
      setRequest.auth = {
        // username: endpoints.config.USERNAME,
        // password: endpoints.config.PASSWORD,
      };
    }

    if (params) {
      setRequest.data = params;
    }

    if (body) {
      setRequest.data = body;
    }

    if (headerParams) {
      setRequest.params = headerParams;
    }

    if (formData) {
      const response = await axios.post(url, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data && response.data.errorType === 'Error') {
        throw new Error(response.data.errorMessage);
      }
      return response;
    } else {
      const response = await axios(setRequest);

      // const { data } = response

      if (response && response.data && response.data.errorType === 'Error') {
        throw new Error(response.data.errorMessage);
      }
      return response;
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.code) {
      throw new Error(error.response.data.code);
    } else {
      const errorMessageArr = split(error, 'Error: ');
      if (size(errorMessageArr) > 1) {
        throw new Error(errorMessageArr[1]);
      } else {
        throw new Error(error);
      }
    }
  }
};

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
    const sagas = getSagas(...args, {
      restApi: restApi,
    });

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
