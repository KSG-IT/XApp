import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Login',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default LoginScreen;
