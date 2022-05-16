import createActionTypes from '~/utils/automations/createActionTypes';
// ---
const path = 'modules/app/app-core';

export default createActionTypes(path, ['AUTH_LOGIN', 'AUTH_LOGOUT']);
