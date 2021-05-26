import createActionTypes from '~/utils/automations/createActionTypes';
// ---
const path = 'modules/example/example-core';

export default createActionTypes(path, ['GET_DATA', 'GET_HOTEL_DEALS']);
