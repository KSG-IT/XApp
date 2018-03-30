// @flow

import Article from './article';
import User from "./user";

export default function Purchase(purchaser: User) {
  this._purchaser = purchaser;
  this._articles = new Map();
}

Purchase.prototype.addArticle = function(article: Article): boolean {
  if(this._articles.has(article)) {
    this._articles.set(article, this._articles.get(article)+1);
  } else {
    this._articles.set(article, 1);
  }
  return true;
};

Purchase.prototype.removeArticle = function(article: Article): boolean {
  if(this._articles.has(article)) {
    if(this._articles.get(article) === 1) {
      this._articles.delete(article);
    } else {
      this._articles.set(article, this._articles.get(article)-1);
    }
    return true;
  } else {
    return false;
  }
};

Purchase.prototype.getTotalPrice = function(): number {
  let sum = 0;
  for (let [key, value] of this._articles.entries()) {
    sum += key.getPrice() * value;
  }

  return sum;
};
