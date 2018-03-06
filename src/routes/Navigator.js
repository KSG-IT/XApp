import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation'

import { addListener } from '../utils/redux';
import SettingsScreen from './settings';
import HomeScreen from './home';
import LoginScreen from './login';
import TransactionsScreen from './transaction';
import DrawerMenu from '../components/Drawer';

const stackNavigator = new StackNavigator({
  Settings: {screen: SettingsScreen},
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


class RootNavigator extends Component {
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
