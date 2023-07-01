interface IEemployee {
  empCode: number;
  empName: string;
  getSalary: (empCode: number) => number;
}

class Employee implements IEemployee {
  empCode: number;
  empName: string;
  constructor(empCode: number, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }

  getSalary(empCode: number): number {
    if (empCode === this.empCode) {
      return 1000;
    }
    return 0;
  }
}

let emp = new Employee(1, "John");
console.log(emp.getSalary(1));

interface Person {
  name: string;
  age: number;
}

let p1: Person = { name: "John", age: 30 };
console.log(p1.name);

interface Greeting {
  (name: string): string;
}

let hello: Greeting = (name: string) => {
  return "Hello " + name;
};

console.log(hello("John"));

interface NumberArray {
  [index: number]: number;
}

let arr1: NumberArray = [1, 2, 3];
console.log(arr1);

interface SquareConfig {
  color?: string;
  width?: number;
}

function CreateSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = CreateSquare({ color: "black" });
console.log(mySquare);

interface Point {
  readonly x: number;
  readonly y: number;
}

let pp1: Point = { x: 10, y: 20 };
console.log(pp1.x);

interface Shape {
  area(): number;
}

interface Colorful {
  color: string;
}

interface Circle extends Shape, Colorful {
  radius: number;
}

class Coba implements Circle {
  color: string;
  radius: number;
  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }
  area(): number {
    return this.radius * this.radius;
  }
}

let coba = new Coba("red", 10);
console.log(coba.area());
