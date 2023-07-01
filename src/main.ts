class Circle {
  readonly radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(10);
console.log(circle.radius);
console.log(circle.getArea());

// readonly dalan interface
interface Person {
  readonly name: string;
  readonly hobbies: ReadonlyArray<string>;
}

let person: Person = {
  name: "John",
  hobbies: ["Sports", "Cooking"],
};
console.log(person.hobbies);
console.log(person.name);

// person.hobbies.push("Sports");
// person.name = "Jane";

// readonly untuk interface type

interface IEmployee {
  empCode: number;
  empName: string;
}

let emp1: Readonly<IEmployee> = {
  empCode: 1,
  empName: "John",
};

console.log(emp1);

// emp1.empCode = 2;
// emp1.empName = "Jane";

// readonly untuk generik

type ReadonlyPoint<T> = {
  readonly [K in keyof T]: T[K];
};

type Point = {
  x: number;
  y: number;
};

type ReadonlyPoint2D = ReadonlyPoint<Point>;
let point: ReadonlyPoint2D = {
  x: 10,
  y: 20,
};

console.log(point);
