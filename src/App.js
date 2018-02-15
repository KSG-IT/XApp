/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NfcManager from 'react-native-nfc-manager';
// import NFC, {NfcDataType, NdefRecordType} from "react-native-nfc";

import users from './testDatabase';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      supported: true,
      enabled: false,
      tag: {},
    }
  }

  componentDidMount() {
    // this.bindNfcListener();

    NfcManager.isSupported()
      .then(supported => {
        console.log("NFC is supported");
        this.setState({ supported });

        if (supported) {
          this.startNfc();
          this.startDetection();
        }
      })
  }

  // bindNfcListener(){
  //   NFC.addListener((payload)=>{
  //     console.log(payload);
  //   })
  // }

  startNfc() {
    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log('ios session closed');
      }
    })
      .then(result => {
        console.log('Started NFC', result);
      })
      .catch(error => {
        console.warn('Starting NFC failed', error);
        this.setState({supported: false});
      });

    if (Platform.OS === 'android') {
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
        console.log('registerTagEvent OK', result)
      })
      .catch(error => {
        console.warn('registerTagEvent fail', error)
      })
  };

  onTagDiscovered = tag => {
    console.log('Tag Discovered', tag);
    this.setState({ tag });
  };

  render() {
    const cardId = this.state.tag.id ? this.state.tag.id.toLowerCase() : "";
    const cardUser = users[cardId];

    console.log(cardId, cardUser);
    if(cardId) {
      // console.log(cardId.match(/[a-fA-F0-9]{2}/g).reverse().join(''), cardUser);
    }


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Societeten - XApp
        </Text>
        <Text>
          {cardId ? (cardUser ? cardUser.name : "Unknown card") : "Searching"}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
