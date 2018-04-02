// @flow

import RNFS from 'react-native-fs';

import assortmentDatabase from '../assortmentDatabase';
import Article from '../model/article';

const path = RNFS.DocumentDirectoryPath + "/activeArticles.txt";

const loadArticlesUtils = {
  loadArticles(): Promise<Object> {
    let articles = new Map();

    assortmentDatabase.forEach(function (article) {
      article.__proto__ = Article.prototype;
      articles.set(article.getId(), article);
    });

    return Promise.resolve({ data: articles });
  },

  loadActiveArticleIds(): Promise<Object> {
    return RNFS.readFile(path, "utf8")
      .then((content) => {
        return Promise.resolve({ data: new Map(JSON.parse(content)) });
      })
      .catch((error) => {
        console.log(error);
        return Promise.resolve({ data: new Map() });
      });
  },

  saveActiveArticleIds(activeArticles: Map<number, boolean>) {
    RNFS.writeFile(
      path,
      JSON.stringify([...activeArticles]),
      "utf8"
    ).then((success) => {
      console.log('WRITTEN');
    }).catch((error) => {
      console.log(error);
    });
  }
};

export default loadArticlesUtils;
