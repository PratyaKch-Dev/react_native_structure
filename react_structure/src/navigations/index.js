import React, {Fragment, useRef, useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import {Provider, InteractionManager} from 'react-redux';
import forEach from 'lodash/forEach';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import styled from 'styled-components/native';
import {StatusBar, Platform, Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

// ---
import configStore from '~/configs/stores/';
import configSagas from '~/modules/sagas';
import {interceptors} from '~/configs/axios';

import {TemplateWithTopbar, TemplateFull, colors} from '~/templates/v1';
import viewList from '~/configs/router';

const {store, runSaga} = configStore();
runSaga(configSagas);

const ComponentWrapper = props => {
  const {componentId, Component, componentName, params} = props;
  console.log('componentIdcomponentId :: ', componentId);

  const useMount = func => useEffect(() => func(), []);

  const useCustomInteraction = (timeLocked = 2000) => {
    useMount(() => {
      const handle = InteractionManager.createInteractionHandle();

      setTimeout(
        () => InteractionManager.clearInteractionHandle(handle),
        timeLocked,
      );

      return () => InteractionManager.clearInteractionHandle(handle);
    });
  };

  const popupRef = useRef(null);

  const handleClearNavigate = async () => {
    await Navigation.updateProps('AppStack', {
      navigateProps: {},
    });
  };

  const handleNavigate = async (
    to,
    passProps,
    options,
    isRemoveProps,
    useAnimation = null,
  ) => {
    try {
      if (to) {
        if (isRemoveProps) {
          await Navigation.updateProps('AppStack', {
            navigateProps: {},
          });
        }

        let animation = {};
        if (useAnimation === 'FADE') {
          animation = {
            animations: {
              push: {
                content: {
                  alpha: {
                    from: 0,
                    to: 1,
                    duration: 300,
                  },
                },
              },
            },
          };
        }

        await Navigation.push('AppStack', {
          component: {
            id: `${componentId}-${to}`,
            name: to,
            passProps: {
              navigateProps: {
                ...passProps,
              },
            },
            options: {
              ...options,
              ...animation,
              layout: {
                backgroundColor: 'white',
                animate: false,
              },
              bottomTabs: {
                visible: false,
              },
              topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
                noBorder: true,
                borderColor: 'transparent',
                elevation: 0,
              },
            },
          },
        });
        useCustomInteraction();
      }
    } catch (e) {}
  };

  const handleGoBack = async () => {
    try {
      await handleClearNavigate();
      await Navigation.pop(componentId);
    } catch (e) {}
  };

  const handleBackHome = async () => {
    try {
      await handleClearNavigate();
      await Navigation.popToRoot(componentId);
    } catch (e) {}
  };

  const renderNavigate = () => {
    return {
      to: handleNavigate,
      back: handleGoBack,
      home: handleBackHome,
      clear: handleClearNavigate,
    };
  };

  const handleClosePopup = () => {
    popupRef.current.onClosePopup();
  };

  const handleOpenPopup = popupComponent => {
    popupRef.current.onOpenPopup(popupComponent);
  };

  const popupProps = {
    onOpenPopup: handleOpenPopup,
    onClosePopup: handleClosePopup,
  };

  const navigate = renderNavigate();

  const template = {
    /** TemplateWithTopbar props
     * @param {Function} navigate
     * @param {Function} onBack
     * @param {Boolean} useBack
     * @param {Boolean} useScrollable
     * @param {Node} children
     * @param {Node} rightNode
     * @param {String} bodyBackgroundColor
     * @param {String} iconBackColor
     * @param {String} title
     */
    TemplateWithTopbar: templateProps => (
      <TemplateWithTopbar {...templateProps} navigate={navigate} />
    ),
    /** TemplateFull props
     * @param {Function} navigate
     * @param {Function} onBack
     * @param {Boolean} useBack
     * @param {Boolean} useSafe
     * @param {Node} children
     * @param {String} bodyBackgroundColor
     * @param {String} iconBackColor
     */
    TemplateFull: templateProps => (
      <TemplateFull {...templateProps} navigate={navigate} />
    ),
  };

  ////////

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {};
  }, []);

  const handleListener = listener => {
    if (listener) {
      listener();
    }
  };

  return (
    <ComponentBackgroundWrapper>
      <Toast ref={ref => Toast.setRef(ref)} />
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === 'android' ? '#ffffff' : '#ffffff'}
      />
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {insets => (
            <ActionSheetProvider>
              <Fragment>
                <Fragment>
                  <Component
                    {...props}
                    navigate={navigate}
                    safeArea={insets}
                    Template={template}
                    // Layout={renderLayout}
                    componentName={componentName}
                    parentComponentId={componentId}
                  />
                </Fragment>

                {/* <Popup ref={popupRef} /> */}
              </Fragment>
            </ActionSheetProvider>
          )}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </ComponentBackgroundWrapper>
  );
};

export const startApp = async passProps => {
  console.log('setRootttttt');
  await Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        name: 'AppStack',
        children: [
          {
            component: {
              name: 'StartAppView',
              passProps: {
                navigateProps: {
                  ...passProps,
                },
              },
              options: {
                layout: {
                  backgroundColor: 'white',
                },
                popGesture: false,
                animations: {
                  push: {
                    content: {
                      alpha: {
                        from: 0,
                        to: 1,
                        duration: 300,
                      },
                    },
                  },
                },
                bottomTabs: {
                  visible: false,
                  drawBehind: true,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false,
                  noBorder: true,
                  borderColor: 'transparent',
                  elevation: 0,
                },
              },
            },
          },
        ],
      },
    },
    layout: {
      orientation: ['portrait'],
    },
  });
};

const renderRegisterComponent = () => {
  console.log('thisWorkingggg', Navigation);

  forEach(viewList, value => {
    Navigation.registerComponent(
      value.name,
      () => props =>
        (
          <Provider store={store}>
            {/* <StartAppView /> */}
            <ComponentWrapper
              {...props}
              Component={value.component}
              componentName={value.name}
              params={value.params}
            />
          </Provider>
        ),
      () => gestureHandlerRootHOC(ComponentWrapper),
    );
  });
};

Navigation.events().registerAppLaunchedListener(async () => {
  SplashScreen.hide();
  // await migrateStore(store)
  await interceptors(store);
  // await notifications(store)
  // await quickAction(store)
  // await setLanguage('th')
  await startApp();
});

const ComponentBackgroundWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export default renderRegisterComponent;
