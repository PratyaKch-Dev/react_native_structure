import createApi from '~/utils/automations/createApi';
// ---

import authentication from './authentication';

// ---
export default endpoint => {
  const apis = [authentication];
  return createApi({
    apis,
    endpoint,
    version: 'v2',
  });
};
