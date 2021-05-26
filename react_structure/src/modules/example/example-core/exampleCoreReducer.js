import types from './exampleCoreActionTypes';
// ---
export const initialState = {
  exampleValue: undefined,
  isLoadingValue: false,

  hotelDeals: [],
  isLoadingHotelDeal: false,
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
    case types.GET_HOTEL_DEALS: {
      return {
        ...state,
        isLoadingHotelDeal: true,
      };
    }
    case types.GET_HOTEL_DEALS_SUCCESS: {
      return {
        ...state,
        hotelDeals: action.payload.hotelDeals,
        isLoadingHotelDeal: false,
      };
    }
    case types.GET_HOTEL_DEALS_FAIL: {
      return {
        ...state,
        isLoadingHotelDeal: false,
      };
    }

    default:
      return state;
  }
};
