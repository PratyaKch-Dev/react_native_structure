import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// ---
import {reducer as appCoreReducer} from './app-core';
// ---
// Apply cache
const appCorePersistConfig = {
  key: 'appCore',
  storage: AsyncStorage,
};
export default combineReducers({
  // appCore: appCoreReducer,
  appCore: persistReducer(appCorePersistConfig, appCoreReducer),
});
