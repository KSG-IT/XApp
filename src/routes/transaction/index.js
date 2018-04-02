// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  Toolbar,
  Button,
} from 'react-native-material-ui';
import NfcManager from 'react-native-nfc-manager';

import Container from "../../components/Container";
import { reverseHexadecimalNumber } from '../../utils/numberConverter';
import Article from '../../model/article';
import { getActiveArticles, getArticles } from "../../actions/articles";
import { goBack } from "../../actions/navigation";


type Props = {
  articles: Map<number, Article>,
  activeArticles: Map<number, boolean>,
  getActiveArticles: Function,
  getArticles: Function,
  goBack: Function,
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
    this.props.getArticles();
    this.props.getActiveArticles();

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
          leftElement="arrow-back"
          centerElement="Transaction"
          onLeftElementPress={() => this.props.goBack()}
        />

        <View style={styles.container}>
          {this.props.articles && this.props.activeArticles && (
            Array.from(this.props.activeArticles.keys()).map((id) => {
              return (
                <Button
                  key={id}
                  raised
                  primary
                  text={this.props.articles.get(id).getDisplayText()}/>
              );
            }))}
        </View>

        <Text>
          {cardId ? parseInt(reverseHexadecimalNumber(cardId), 16) : "searching.."}
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: '#000000'
  }
});

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
  articles: state.articles.articles,
  activeArticles: state.articles.activeArticles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getArticles,
    getActiveArticles,
    goBack,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen);
