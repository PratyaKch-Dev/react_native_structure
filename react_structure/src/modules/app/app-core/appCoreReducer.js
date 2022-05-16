import types from './appCoreActionTypes';
// ---
export const initialState = {
  authData: null,
  isLoadingAuthLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN: {
      return {
        ...state,
        isLoadingAuthLogin: true,
      };
    }
    case types.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        authData: action.payload.authData,
        isLoadingAuthLogin: false,
      };
    }
    case types.AUTH_LOGIN_FAIL: {
      return {
        ...state,
        isLoadingAuthLogin: false,
      };
    }
    case types.AUTH_LOGOUT: {
      return {
        ...state,
      };
    }
    case types.AUTH_LOGOUT_SUCCESS: {
      return initialState;
    }
    case types.AUTH_LOGOUT_FAIL: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
