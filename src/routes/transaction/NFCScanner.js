// @flow

import React, { Component } from 'react';
import {
  Platform,
  Text,
} from 'react-native';
import NfcManager from 'react-native-nfc-manager';

import { reverseHexadecimalNumber } from '../../utils/numberConverter';

type Props = {
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

  componentDidMount() {
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
    console.log("Tag Discovered", tag);
    this.setState({ tag });
  };

  render(){
    const cardId = this.state.tag.id ? this.state.tag.id.toLowerCase() : "";

    return (
      <Text>
        {cardId ? parseInt(reverseHexadecimalNumber(cardId), 16) : "searching.."}
      </Text>
    );
  }
}

export default NFCScanner;