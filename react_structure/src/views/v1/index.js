import concat from 'lodash/concat';
// ---
import {viewCombined} from '~/utils/hoc';
// ---
// import account from './account'
// import announcement from './announcement'
// import auth from './auth'
// import billing from './billing'
// import community from './community'
// import facility from './facility'
// import feed from './feed'
import main from './main';
// import parcel from './parcel'
// import room from './room'
// import setting from './setting'
// import user from './user'
// import utility from './utility'
// import suggestion from './suggestion'
// import repair from './repair'
// ---
const views = concat(
  // --- Add view to naviagation
  // account,
  // announcement,
  // auth,
  // community,
  // billing,
  // facility,
  // feed,
  main,
  // parcel,
  // room,
  // setting,
  // user,
  // utility,
  // suggestion,
  // repair
);

export default viewCombined(views);
