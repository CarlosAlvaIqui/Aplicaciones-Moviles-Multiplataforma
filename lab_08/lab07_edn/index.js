/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SocketIOClient from 'socket.io-client';

global.socket = SocketIOClient('http://192.168.0.5:8080');

AppRegistry.registerComponent(appName, () => App);
