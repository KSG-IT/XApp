import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import Container from "../../components/Container";

class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Settings"
          onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <Text>Settings</Text>
      </Container>
    );
  }
}

export default SettingsScreen;
