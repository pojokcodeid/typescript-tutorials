import { Accunt } from "./entity/Accunt";
import { Animal } from "./entity/Animal";
import { Shape } from "./entity/Shape";

//membuat objek
let animal = new Animal("Lion", 10);
animal.showInfo();

class Dog extends Animal {
  // deklarasikan property
  breed: string;
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  showInfo() {
    super.showInfo();
    console.log(`My breed is ${this.breed}`);
  }
}

let dog = new Dog("Max", 10, "German Shepherd");
dog.showInfo();

let account = new Accunt(1, "Max", 100);
account.id = 100;
account.deposit(100000);
console.log(account);

class Circle extends Shape {
  private _radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this._radius = radius;
  }

  getArea(): number {
    return Math.PI * this._radius * this._radius;
  }

  showInfo(): void {
    super.showInfo();
    console.log(`My radius is ${this.getArea()}`);
  }
}

class Ractangle extends Shape {
  private _width: number;
  private _height: number;
  constructor(color: string, width: number, height: number) {
    super(color);
    this._width = width;
    this._height = height;
  }

  getArea(): number {
    super.getArea();
    return this._width * this._height;
  }

  showInfo(): void {
    super.showInfo();
    console.log(`My width is ${this.getArea()}`);
  }
}

let shape1: Shape = new Circle("red", 10);
let shape2: Shape = new Ractangle("blue", 10, 10);

console.log(shape1.getArea());
console.log(shape2.getArea());
shape1.showInfo();
shape2.showInfo();
