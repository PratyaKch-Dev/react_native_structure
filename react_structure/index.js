/**
 * @format
 */
import navigation from '~/navigations/index';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StartAppView from '~/views/v1/main/StartAppView';

// AppRegistry.registerComponent(appName, () => StartAppView);
navigation();
