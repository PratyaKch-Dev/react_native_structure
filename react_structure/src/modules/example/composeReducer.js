import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// ---
import {reducer as exampleCoreReducer} from './example-core';
// ---
// Apply cache
// const exampleCoreCache = {
// 	key: 'exampleCoreReducer',
// 	storage: AsyncStorage,
// }

export default combineReducers({
  exampleCore: exampleCoreReducer,
});
