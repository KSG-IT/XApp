import React, { Component } from 'react';
import {
  Text,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
import NfcManager from 'react-native-nfc-manager';

import Container from "../../components/Container";
import { reverseHexadecimalNumber } from '../../utils/numberConverter';

class TransactionScreen extends Component {
  constructor(props) {
    super(props);

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
        this.setState({supported});

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
        this.setState({supported: false});
      });

    if (Platform.OS === "android") {
      NfcManager.isEnabled()
        .then(enabled => {
          this.setState({enabled});
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

  onTagDiscovered = tag => {
    console.log("Tag Discovered", tag);
    this.setState({tag});
  };



  render() {
    const cardId = this.state.tag.id ? this.state.tag.id.toLowerCase() : "";


    return (
      <Container>
        <Toolbar
          leftElement="menu"
          centerElement="Transaction"
          onLeftElementPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Text>
          {cardId ? parseInt(reverseHexadecimalNumber(cardId), 16) : "searching.."}
        </Text>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps)(TransactionScreen);
