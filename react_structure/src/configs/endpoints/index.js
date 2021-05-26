import {Platform} from 'react-native';
// --
import apis from './apis';
import environment from './env.json';

// change staging to 'DEVELOPMENT' for use on DEV MODE
const envList = {
  PRODUCTION: 'PRODUCTION',
  DEVELOPMENT: 'DEVELOPMENT',
};
let staging = envList.DEVELOPMENT;
const envName = staging;

// const staging = envList.DEVELOPMENT // <--- Development
// const staging = envList.PREPRODUCTION // <--- Test flight
// const staging = envList.PRODUCTION // <--- Up to store

const platformKey = Platform.OS;

const getEnv = () => {
  return {
    appName: 'react_structure',
    platform: environment.platform,
    config: environment.ENV[staging],
    apis: apis(staging),
  };
};

export default getEnv();
