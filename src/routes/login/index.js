// @flow

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import { logIn, logOut } from '../../actions/authentication';

type Props = {
  loggedIn: boolean,
  logIn: Function,
  logOut: Function,
  navigation: Object,
}

class LoginScreen extends Component<Props> {
  render() {
    const destination = (this.props.navigation.state.params && this.props.navigation.state.params.destination) ?
      this.props.navigation.state.params.destination : "Home";

    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Log In"
          onLeftElementPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Text>You need to be logged in to access the {destination} screen</Text>
        <Button raised primary text="Log in"
                onPress={() => this.props.logIn("", "", destination)}/>
        <Button raised primary text="Log out" onPress={() => this.props.logOut()}/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    logIn,
    logOut
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
