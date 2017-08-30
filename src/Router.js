import React from 'react';
import { TabNavigator } from 'react-navigation';
import { ExploreScreen } from './screens/ExploreScreen';

export const Router = TabNavigator({
	Explore: { screen: ExploreScreen, }
});