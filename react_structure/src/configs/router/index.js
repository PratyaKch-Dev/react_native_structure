import concat from 'lodash/concat';
// ---
import {viewCombined} from '~/utils/hoc';
// ---
import v1 from '~/views/v1';

// ---
// const views = concat(v1);

export default viewCombined(v1);
