import replace from 'lodash/replace';
import isEmpty from 'lodash/isEmpty';
// ---

const replaceAscii = text => {
  return !isEmpty(text) ? replace(text, /[^\x00-\x7F]/g, '') : '';
};

export default replaceAscii;
