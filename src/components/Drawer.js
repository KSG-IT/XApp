// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
StyleSheet,
View
} from 'react-native';
import { Toolbar, Drawer } from 'react-native-material-ui';

import Container from './Container';
import { goToHome, goToSettings } from '../actions/navigation';

type State = {
  active: string,
}

type Props = {
  loggedIn: boolean,
  navigation: Object,
  goToSettings: Function,
  goToHome: Function,
}

class DrawerMenu extends Component<Props, State> {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: "home",
    };
  }

  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate("DrawerClose")}
          centerElement="Menu"
        />
        <View style={styles.container}>
          <Drawer>
            <Drawer.Section
              items={[
                {
                  icon: "info",
                  value: "Home",
                  active: this.state.active === "home",
                  onPress: () => {
                    this.setState({ active: "home" });
                    this.props.goToHome();
                  },
                },
                {
                  icon: "settings",
                  value: "Settings",
                  active: this.state.active === "settings",
                  onPress: () => {
                    this.setState({ active: "settings" });
                    this.props.goToSettings();
                  },
                },
              ]}
            />
          </Drawer>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    goToSettings,
    goToHome,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
