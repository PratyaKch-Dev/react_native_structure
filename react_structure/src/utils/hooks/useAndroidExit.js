import {useEffect} from 'react';
import RNExitApp from 'react-native-exit-app';
import {BackHandler, Alert, Platform} from 'react-native';
// ---
import useLifecycle from './useLifecycle';
// ---

export default props => {
  const handleExitAndroid = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // console.log('hardwareBackPress', props)
      Alert.alert(
        'Exit App',
        'Exiting the application?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              BackHandler.removeEventListener('hardwareBackPress');
            },
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => RNExitApp.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    });
  };

  if (Platform.OS === 'android') {
    useLifecycle(props, {
      willMount: () => {
        handleExitAndroid();
      },
      unMount: () => {
        BackHandler.removeEventListener('hardwareBackPress');
      },
    });
  }
};
