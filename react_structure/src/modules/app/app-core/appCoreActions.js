import createAction from '~/utils/automations/createAction';
// ---
import types from './appCoreActionTypes';

export default createAction({
  authLogin: types.AUTH_LOGIN,
  authLogout: types.AUTH_LOGOUT,
});
