import concat from 'lodash/concat';
// ---
import {viewCombined} from '~/utils/hoc';
// ---
import main from './main';
// ---
const views = concat(
  // --- Add view to naviagation
  main,
);

export default viewCombined(views);
