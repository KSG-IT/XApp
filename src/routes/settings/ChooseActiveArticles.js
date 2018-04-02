// @flow

import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {
  ScrollView,
} from 'react-native';
import {
  Toolbar,
  Checkbox,
  Card,
} from 'react-native-material-ui';

import Container from '../../components/Container';
import { goBack } from "../../actions/navigation";
import Article from "../../model/article";
import { getActiveArticles, getArticles, saveActiveArticles, updateArticle } from "../../actions/articles";

type Props = {
  navigation: Object,
  goBack: Function,
  getArticles: Function,
  getActiveArticles: Function,
  updateArticle: Function,
  saveActiveArticles: Function,
  articles: Map<number, Article>,
  activeArticles: Map<number, boolean>,
}

class ChooseActiveArticlesScreen extends Component<Props> {
  componentDidMount() {
    this.props.getArticles();
    this.props.getActiveArticles();
  }

  onCheck = (checked: boolean, id: number) => {
    //TODO: Find a better way to do this...
    let updatedActiveArticles = new Map();
    for(let [k,v] of this.props.activeArticles) {
     updatedActiveArticles.set(k, v);
    }
    if(checked) {
      updatedActiveArticles.set(id, checked);
    } else {
      updatedActiveArticles.delete(id);
    }

    this.props.updateArticle(updatedActiveArticles);
  };

  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Choose Active Articles"
          onLeftElementPress={() => {
            this.props.saveActiveArticles(this.props.activeArticles);
            this.props.goBack();
          }}
        />
        <Card>
          <ScrollView>
            {
              Array.from(this.props.articles.values()).map(article =>
                <Checkbox
                  key={article.getId()}
                  label={article.getName() + " - " + article.getPrice() + ",-"}
                  value={article.getId()}
                  checked={this.props.activeArticles.has(article.getId()) ? this.props.activeArticles.get(article.getId()) : false}
                  onCheck={this.onCheck}
                />
              )
            }
          </ScrollView>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  activeArticles: state.articles.activeArticles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    goBack,
    getArticles,
    updateArticle,
    getActiveArticles,
    saveActiveArticles,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseActiveArticlesScreen);
