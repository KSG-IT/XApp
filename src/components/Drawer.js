import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Toolbar, Drawer } from 'react-native-material-ui';

import Container from './Container';

class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 'home',
    };
  }

  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
          centerElement="Menu"
        />
        <View style={styles.container}>
          <Drawer>
            <Drawer.Section
              items={[
                {
                  icon: 'info',
                  value: 'Home',
                  active: this.state.active === 'home',
                  onPress: () => {
                    this.setState({ active: 'home' });
                    this.props.navigation.navigate('Home');
                  },
                },
                {
                  icon: 'settings',
                  value: 'Settings',
                  active: this.state.active === 'settings',
                  onPress: () => {
                    this.setState({ active: 'settings' });
                    this.props.navigation.navigate('Settings');
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

export default DrawerMenu;
