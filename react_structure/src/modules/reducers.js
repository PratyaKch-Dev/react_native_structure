import {combineReducers} from 'redux';
// Imports: Reducer stores
import exampleStore from './example/composeReducer';

export default combineReducers({
  exampleStore,
});
