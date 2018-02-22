import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
