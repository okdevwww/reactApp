import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './pages/home';
import Playlist from './pages/playlist';
import Wallet from './pages/wallet';
import Profile from './pages/profile';
import Ranking from './pages/ranking';

const App = StackNavigator(
  {
    Home: {screen: Home},
    Playlist:{screen:Playlist},
    Wallet:{screen:Wallet},
    Profile:{screen:Profile},
    Ranking:{screen:Ranking}
  },
  {
    headerMode:'none',
    mode:'modal',
  }
);
export default App;
// AppRegistry.registerComponent('App', () => App);