// @flow

import {
  LOAD_ACTIVE_ARTICLES, UPDATE_ACTIVE_ARTICLES,
  LOAD_ARTICLES_FAILURE, LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS,
} from "./constants";
import loadArticlesUtils from '../utils/loadArticles';

export const getArticles = () => (dispatch: Function) => {
  dispatch({
    type: LOAD_ARTICLES_REQUEST,
  });

  loadArticlesUtils.loadArticles()
    .then(({ data: articles }) => {
      dispatch({
        type: LOAD_ARTICLES_SUCCESS,
        payload: articles,
      });
    }).catch(error => {
    dispatch({
      type: LOAD_ARTICLES_FAILURE,
      error,
    });
  });
};

export const getActiveArticles = () => (dispatch: Function) => {
  loadArticlesUtils.loadActiveArticleIds()
    .then(({ data: activeArticles }) => {
      dispatch({
        type: LOAD_ACTIVE_ARTICLES,
        payload: activeArticles,
      })
    });
};

export const saveActiveArticles = (activeArticles: Map<number, boolean>) => (dispatch: Function) => {
  loadArticlesUtils.saveActiveArticleIds(activeArticles);
};

export const updateArticle = (activeArticles: Map<number, boolean>) => (dispatch: Function) => {
  dispatch({
    type: UPDATE_ACTIVE_ARTICLES,
    payload: activeArticles,
  });
};
