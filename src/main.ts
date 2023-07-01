// access modifier
// 1. private -> hanya bisa diacess oleh class itu sendiri
// 2. public -> bisa diacess oleh semua class
// 3. protected -> bisa diacess oleh class itu sendiri dan class turunannya saja
// 4. tanfa definisi -> berlaku defaulat yaitu public

class Account {
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
}

let account = new Account(1, "abc", 1000);
console.log(account.balance);

class Bnatang {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let binatang = new Bnatang("abc", 10);
binatang.name = "TEsting Binatang";
binatang.showInfo();

class Animal {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// let animal = new Animal("abc", 10);
// animal.name = "Kucing";

class Dog extends Animal {
  public breed: string;
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  showInfo2() {
    super.showInfo();
    console.log(
      `Breed: ${this.breed} dan Age: ${this.age} dan Name: ${this.name}`
    );
  }
}

let dog = new Dog("abc", 10, "Lab");
dog.showInfo2();

class Manusia {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  setNama(nama: string) {
    this.nama = nama;
  }
}

let mhs = new Manusia("abc");
mhs.setNama("Muhammad");
console.log(mhs.nama);
