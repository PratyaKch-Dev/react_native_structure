import {createSelector} from 'reselect';
import reduce from 'lodash/reduce';
// ----
export const getExampleCoreSelect = store => store.exampleStore.exampleCore;

export const getExampleValueSelector = createSelector(
  getExampleCoreSelect,
  exampleCore => exampleCore.exampleValue,
);

export const hotelDealsSelector = createSelector(
  getExampleCoreSelect,
  exampleCore => exampleCore.hotelDeals,
);

export const isLoadingHotelDealSelector = createSelector(
  getExampleCoreSelect,
  exampleCore => exampleCore.isLoadingHotelDeal,
);

export default {
  getExampleCoreSelect,
  getExampleValueSelector,

  hotelDealsSelector,
  isLoadingHotelDealSelector,
};
