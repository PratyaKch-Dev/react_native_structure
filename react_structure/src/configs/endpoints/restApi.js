import axios from 'axios';
import split from 'lodash/split';
import size from 'lodash/size';
//
import endpoints from '~/configs/endpoints';
//

const restApi = async ({
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
    } else if (service) {
      url = `${endpoints.config.API_URL}${service}`;
    }

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
        username: endpoints.config.USERNAME,
        password: endpoints.config.PASSWORD,
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

export default restApi;
