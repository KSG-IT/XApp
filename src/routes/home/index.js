import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {
  Toolbar,
  Button
} from 'react-native-material-ui';

import Container from "../../components/Container";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Home"
          onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <Text>Home</Text>
        <Button raised primary text="Go to Transaction view" onPress={() => this.props.navigation.navigate('Transaction')} />
      </Container>
    );
  }
}

export default HomeScreen;
