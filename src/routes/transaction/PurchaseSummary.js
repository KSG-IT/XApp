// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import User from '../../model/user';

type Props = {
  purchaser: User,
}

type State = {}

class PurchaseSummary extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.purchaser.getName() + " has started a purchase session.."}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

const mapStateToProps = (state) => ({
  purchaser: state.users.purchaser,
});

export default connect(mapStateToProps)(PurchaseSummary);
