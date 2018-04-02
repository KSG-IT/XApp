// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  Toolbar,
  Button,
  Card,
} from 'react-native-material-ui';

import Container from "../../components/Container";
import Article from '../../model/article';
import { getActiveArticles, getArticles } from "../../actions/articles";
import { goBack } from "../../actions/navigation";
import NfcScanner from './NFCScanner';

type Props = {
  articles: Map<number, Article>,
  activeArticles: Map<number, boolean>,
  getActiveArticles: Function,
  getArticles: Function,
  goBack: Function,
}

class TransactionScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArticles();
    this.props.getActiveArticles();
  }

  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Transaction"
          onLeftElementPress={() => this.props.goBack()}
        />

        <View style={styles.search}>
          <Card style={{ container: { flex: 1 } }}>
            <NfcScanner/>
          </Card>
        </View>

        <View style={styles.articles}>
          {this.props.articles && this.props.activeArticles && (
            Array.from(this.props.activeArticles.keys()).map((id) => {
              const article = this.props.articles.get(id);
              if (article) {
                return (
                  <Button
                    key={id}
                    raised
                    primary
                    style={{ text: styles.itemText, container: { margin: 3 } }}
                    text={article.getDisplayText()}/>
                );
              }
            }))}
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  articles: {
    flex: 2 / 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  itemText: {
    textAlign: 'center',
  },
  text: {
    color: '#000000'
  },
  search: {
    flex: 1 / 3,
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
