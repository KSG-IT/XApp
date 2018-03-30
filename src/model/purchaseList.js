// @flow

import Purchase from "./purchase";
import User from "./user";

export default function PurchaseList(id: string, owner: User) {
  this._id = id;
  this._owner = owner;
  this._purchases = [];
}

Purchase.prototype.addPurchase = function(purchase: Purchase): boolean {
  this._purchases.push(purchase);

  return true;
};

