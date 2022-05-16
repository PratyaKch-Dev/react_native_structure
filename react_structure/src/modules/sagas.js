import concat from 'lodash/concat';
// Imports: Utils
import {sagaRoot} from '~/utils/automations/createSaga';
// Imports: Module sagas
import exampleSagas from './example/composeSaga';
import appSagas from './app/composeSaga';

// --
export default sagaRoot(concat(exampleSagas, appSagas));
