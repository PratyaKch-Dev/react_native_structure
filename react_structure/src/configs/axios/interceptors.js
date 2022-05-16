import axios from 'axios';
// ---
// import { actions as errorCoreActions } from '~/modules/error/error-core'
// ---
const interceptors = store => {
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    response => {
      // console.log('response', response)
      return response;
    },
    error => {
      console.log('error', error);
      if (error.message == 'Network Error') {
        // alert('Network Error')
        // store.dispatch(
        // 	errorCoreActions.setError({
        // 		errorMessage: 'ERROR_NETWORK_ERROR',
        // 	})
        // )
      }
      return Promise.reject(error);
    },
  );
};

export default interceptors;
