import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// ---
import configReducer from '~/modules/reducers';
// import logger from './logger'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root_v3',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: 0,
  whitelist: [],
};

const reducer = persistReducer(persistConfig, configReducer);

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  // logger({})
)(createStore);

// sagaMiddleware.run(configSagas)

export default () => {
  let store = createStoreWithMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  let persistor = persistStore(store);

  return {
    store,
    persistor,
    runSaga: sagaMiddleware.run,
  };
};
