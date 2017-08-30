import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import App from './src/App';

import { StackNavigator } from 'react-navigation';
import ExploreScreen from './src/screens/ExploreScreen';

console.log(ExploreScreen);
console.log('test');

const Router = StackNavigator({
  Test: { screen: ExploreScreen }
});

AppRegistry.registerComponent('ShotPlan', () => Router);
