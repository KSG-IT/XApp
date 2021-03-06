import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555555",
    paddingBottom: "15%",
  },
});

export default Container;
