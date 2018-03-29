// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import {
  Toolbar,
  Button,
} from 'react-native-material-ui';
import NfcManager from 'react-native-nfc-manager';

import Container from "../../components/Container";
import { reverseHexadecimalNumber } from '../../utils/numberConverter';


type Props = {
  navigation: Object,
}

type State = {
  supported: boolean,
  enabled: boolean,
  tag: Object,
}

class TransactionScreen extends Component<Props, State> {
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

  onTagDiscovered = tag => {
    console.log("Tag Discovered", tag);
    this.setState({ tag });
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

        <View style={styles.container}>
          {items.map((color) => {
            return (
              <Button raised primary style={styles.item} text={color}/>
            );
          })}
        </View>

        <Text>
          {cardId ? parseInt(reverseHexadecimalNumber(cardId), 16) : "searching.."}
        </Text>
      </Container>
    );
  }
}

const items = [
  "test", "test2", "test3",
  "test", "test2", "test3",
  "test", "test2", "test3",
  "test", "test2", "test3"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 120,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  text: {
    color: '#000000'
  }
});

const mapStateToProps = (state, props) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps)(TransactionScreen);
