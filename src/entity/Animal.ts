export class Animal {
  //deklarasikan property
  name: string;
  age: number;
  //membuat konstruktor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // menthod animal
  showInfo() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}
