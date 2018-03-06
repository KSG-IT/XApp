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

class DrawerMenu extends Component {
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
                    this.props.goToSettings(this.props.loggedIn);
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

const mapStateToProps = (state, props) => ({
  loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    goToSettings,
    goToHome,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
