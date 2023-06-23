export class Accunt {
  private _id: number;
  private _name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }
  public get balance(): number {
    return this._balance;
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  deposit(amount: number) {
    this._balance += amount;
  }

  withdraw(amount: number) {
    this._balance -= amount;
  }
}
