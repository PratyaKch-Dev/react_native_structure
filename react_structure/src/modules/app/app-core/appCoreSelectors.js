import {createSelector} from 'reselect';
import reduce from 'lodash/reduce';
// ----
export const getAppCoreSelect = store => store.appStore.appCore;

export const isLoadingAuthLoginSelector = createSelector(
  getAppCoreSelect,
  appCore => appCore.isLoadingAuthLogin,
);

export const authDataSelector = createSelector(
  getAppCoreSelect,
  appCore => appCore.authData,
);

export default {
  getAppCoreSelect,
  isLoadingAuthLoginSelector,
  authDataSelector,
};
