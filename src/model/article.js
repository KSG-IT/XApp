// @flow

export default function Article(id: string, name: string, price:number) {
  this._id = id;
  this._name = name;
  this._price = price;
}

Article.prototype.getPrice = function(): number {
  return this._price;
};
