import types from './exampleCoreActionTypes';
// ---
export const initialState = {
  exampleValue: undefined,
  isLoadingValue: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA: {
      return {
        ...state,
        isLoadingValue: true,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        exampleValue: action.payload.exampleValue,
        isLoadingValue: false,
      };
    }
    case types.GET_DATA_FAIL: {
      return {
        ...state,
        isLoadingValue: false,
      };
    }
    default:
      return state;
  }
};
