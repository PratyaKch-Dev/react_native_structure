import {createSelector} from 'reselect';
import reduce from 'lodash/reduce';
// ----
export const getExampleCoreSelect = store => store.exampleStore.exampleCore;

export const getExampleValueSelector = createSelector(
  getExampleCoreSelect,
  exampleCore => exampleCore.exampleValue,
);

export default {
  getExampleCoreSelect,
  getExampleValueSelector,
};
