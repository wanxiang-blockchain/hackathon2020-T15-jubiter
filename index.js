/**
 * @format
 */

import './shim';
import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/pages/Main';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);