// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation'

import { addListener } from '../utils/redux';
import SettingsScreen from './settings';
import ChooseActiveArticlesScreen from './settings/ChooseActiveArticles';
import HomeScreen from './home';
import LoginScreen from './login';
import TransactionsScreen from './transaction';
import DrawerMenu from '../components/Drawer';

const stackNavigator = new StackNavigator({
  Settings: {screen: SettingsScreen},
  ChooseActiveArticles: {screen: ChooseActiveArticlesScreen},
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Transactions: {screen: TransactionsScreen}
}, {
  initialRouteName: "Home",
  headerMode: "none",
  //Disable animation
  transitionConfig: () => ({screenInterpolator: () => null}),
});

export const Navigator = new DrawerNavigator({
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

type Props = {
  navigation: Object,
  dispatch: Function,
};

class RootNavigator extends Component<Props> {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener
      })}/>
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(RootNavigator)
