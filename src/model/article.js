// @flow

export default function Article(id: number, name: string, price: number) {
  this._id = id;
  this._name = name;
  this._price = price;
}

Article.prototype.getPrice = function(): number {
  return this._price;
};

Article.prototype.getName = function(): string {
  return this._name;
};

Article.prototype.setName = function (name: string) {
  this._name = name;
};

Article.prototype.getId = function(): number {
  return this._id;
};

Article.prototype.getDisplayText = function(): string {
  return this._name + " - " + this._price + ",-"
};
