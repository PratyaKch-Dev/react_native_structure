import urljoin from 'url-join';
// ================ MAP API ================ //
import environment from '../env.json';

// API VERSIONS

import v1 from './v1';

// ---
export default staging => {
  const apiEndpointV1 = environment.ENV[staging].API_ENDPOINT;
  return {
    v1: v1(apiEndpointV1),
  };
};
