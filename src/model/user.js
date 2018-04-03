// @flow

export default function User(idDec: number,
                             name: string,
                             balance: number) {
  this._idDec = idDec;
  this._name = name;
  this._balance = balance;
}

User.prototype.getName = function(): string {
  return this._name;
};

User.prototype.getId = function(): number {
  return parseInt(this._idDec);
};

User.prototype.getBalance = function(): number {
  return parseInt(this._balance);
};
