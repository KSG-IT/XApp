import React from "react";
import { StackNavigator, DrawerNavigator, } from "react-navigation";

import HomeScreen from './home';
import SettingsScreen from './settings';
import TransactionScreen from './transaction';

import DrawerMenu from '../components/Drawer';

const stackNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: {screen: SettingsScreen },
  Transaction: {screen: TransactionScreen },
}, {
  headerMode: 'none',
  //Disable animation
  transitionConfig: () => ({ screenInterpolator: () => null }),
});

export const createRootNavigator = () => {
  return DrawerNavigator(
    {
      Stack: {
        screen: stackNavigator
      }
    }, {
      contentComponent: DrawerMenu,
      contentOptions: {
        style: {
          flex: 1,
        }
      },
    });
};
