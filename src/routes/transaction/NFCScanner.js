// @flow

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button
} from 'react-native-material-ui';
import NfcManager from 'react-native-nfc-manager';

import { reverseHexadecimalNumber } from '../../utils/numberConverter';
import { loadUser } from "../../actions/users";

type Props = {
  loadUser: Function,
}

type State = {
  supported: boolean,
  enabled: boolean,
  tag: Object,
}

class NFCScanner extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      supported: true,
      enabled: false,
      tag: {},
    }
  }

  componentDidMount() {
    NfcManager.isSupported()
      .then(supported => {
        console.log("NFC is supported");
        this.setState({ supported });

        if (supported) {
          this.startNfc();
          this.startDetection();
        }
      });
  }

  startNfc() {
    NfcManager.start()
      .then(result => {
        console.log("Started NFC", result);
      })
      .catch(error => {
        console.warn("Starting NFC failed", error);
        this.setState({ supported: false });
      });

    if (Platform.OS === "android") {
      NfcManager.isEnabled()
        .then(enabled => {
          this.setState({ enabled });
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  startDetection = () => {
    NfcManager.registerTagEvent(this.onTagDiscovered)
      .then(result => {
        console.log("registerTagEvent OK", result)
      })
      .catch(error => {
        console.warn("registerTagEvent fail", error)
      })
  };

  onTagDiscovered = (tag: Object) => {
    //TODO: Find out what the Tag object contains
    console.log("Tag Discovered", tag);
    const cardIdHex = tag.id.toLowerCase();
    const cardIdDes = parseInt(reverseHexadecimalNumber(cardIdHex), 16);

    this.props.loadUser(cardIdDes);
  };

  render() {

    return (
      <View style={styles.container}>
        <Text>
          Scan a card to start a purchase..
        </Text>

        {/* This is for debugging purposes, to avoid needing to use a nfc scanning while developing*/}
        <Button
          raised
          primary
          text={"Mimic a NFC card scan"}
          onPress={() => this.onTagDiscovered({ id: "65b5df18" })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadUser,
  }, dispatch);

export default connect(null, mapDispatchToProps)(NFCScanner);