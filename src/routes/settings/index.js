// @flow

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import Container from '../../components/Container';

type Props = {
  navigation: Object,
}

class SettingsScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Settings"
          onLeftElementPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Text>Settings</Text>
      </Container>
    );
  }
}

export default SettingsScreen;
