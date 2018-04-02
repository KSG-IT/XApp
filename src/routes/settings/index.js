// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
} from 'react-native';
import {
  Toolbar,
  Button,
} from 'react-native-material-ui';

import Container from '../../components/Container';
import { goBack, goToChooseActiveArticles } from "../../actions/navigation";

type Props = {
  goBack: Function,
  goToChooseActiveArticles: Function,
}

class SettingsScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Settings"
          onLeftElementPress={() => this.props.goBack()}
        />
        <Text>Settings</Text>
        <Button raised primary text="Choose active articles"
                onPress={() => this.props.goToChooseActiveArticles()}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    goBack,
    goToChooseActiveArticles,
  }, dispatch);

export default connect(null, mapDispatchToProps)(SettingsScreen);
