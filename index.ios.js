/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import App from './src/app'

const reactApp = StackNavigator(
  {
    Main: {screen: App},
  },
  {
    headerMode:'none',
    mode:'modal',
  }
);

AppRegistry.registerComponent('reactApp', () => reactApp);
