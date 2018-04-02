import { LOAD_ACTIVE_ARTICLES, LOAD_ARTICLES_SUCCESS, UPDATE_ACTIVE_ARTICLES, } from "../actions/constants";

const initialState = {
  articles: new Map(),
  activeArticles: new Map(),
};

function articles(state = initialState, action) {
  if (action.type === LOAD_ARTICLES_SUCCESS) {
    return {
      ...state,
      articles: action.payload,
    }
  } else if (action.type === LOAD_ACTIVE_ARTICLES) {
      return {
        ...state,
        activeArticles: action.payload,
      }
    } else if (action.type === UPDATE_ACTIVE_ARTICLES) {
      return {
        ...state,
        activeArticles: action.payload,
      }
  }

  return state;
}

export default articles;
