import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),

  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>

    );
  }
}

export default HomeScreen;