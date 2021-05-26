import I18n from 'i18n-js';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-community/async-storage';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import 'moment/min/locales';
// ---
import {en, th} from '~/configs/locale';
import {onSetQuickAction} from '~/configs/quickAction';
// ---

LocaleConfig.locales['th'] = {
  monthNames: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  monthNamesShort: [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ],
  dayNames: [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
  ],
  dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
  today: 'วันนี้',
};

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today',
};

LocaleConfig.defaultLocale = 'en';

const translationGetters = {
  en: () => {
    return en;
  },
  th: () => {
    return th;
  },
};

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  I18n.translations = {
    en,
    th,
  };
  I18n.locale = languageTag;
  // const langTag =
  // 	languageTag === 'en-EN' || languageTag === 'en'
  // 		? 'en'
  // 		: 'th'
  // LocaleConfig.defaultLocale = langTag
};

setI18nConfig();

export const changeLanguage = async localeText => {
  await AsyncStorage.setItem('locale', localeText);
  I18n.locale = localeText;
  const checkLocale = localeText === 'th-TH' ? 'th' : localeText;
  LocaleConfig.defaultLocale = checkLocale;
  moment.locale(checkLocale);
};

export const setLanguage = async localeText => {
  // console.log('localeText', localeText)
  const localeStorage = await AsyncStorage.getItem('locale');
  if (localeStorage && localeStorage !== '') {
    I18n.locale = localeStorage;
    const checkLocale = localeStorage === 'th-TH' ? 'th' : localeStorage;
    LocaleConfig.defaultLocale = checkLocale;
    moment.locale(checkLocale);
  } else {
    I18n.locale = localeText;
    const checkLocale = localeText === 'th-TH' ? 'th' : localeText;
    LocaleConfig.defaultLocale = checkLocale;
    moment.locale(checkLocale);
  }
};

export const currentLocale = local => {
  const currentLocale = local ? local : I18n.currentLocale();

  let current = 'th';
  if (currentLocale === 'en' || currentLocale === 'en-EN') {
    current = 'en';
  }
  return current;
};

// ---
export default I18n;
