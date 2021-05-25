import concat from 'lodash/concat';
// Imports: Utils
import {sagaRoot} from '~/utils/automations/createSaga';
// Imports: Module sagas
import exampleSagas from './example/composeSaga';

// --
export default sagaRoot(concat(exampleSagas));
