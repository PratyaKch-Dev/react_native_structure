import {combineReducers} from 'redux';
// Imports: Reducer stores
import exampleStore from './example/composeReducer';
import appStore from './app/composeReducer';

export default combineReducers({
  exampleStore,
  appStore,
});
