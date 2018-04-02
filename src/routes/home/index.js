// @flow

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {
  Toolbar,
  Button,
  Card,
} from 'react-native-material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '../../components/Container';
import { goToLogin, goToTransactions, openDrawer } from '../../actions/navigation';

type Props = {
  loggedIn: boolean,
  goToLogin: Function,
  goToTransactions: Function,
  openDrawer: Function,
}

class HomeScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Home"
          onLeftElementPress={() => this.props.openDrawer()}
        />
        <Card>
          <Text>Home</Text>
          <Button raised primary text="Go to Transaction view"
                  onPress={() => this.props.goToTransactions(this.props.loggedIn)}
          />
          <Button raised primary text="Go to Login view"
                  onPress={() => this.props.goToLogin()}/>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    goToLogin,
    goToTransactions,
    openDrawer,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
