function diplay() {
  console.log("Hello World");
}

diplay();

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(1, 2));

let greeting = function () {
  console.log("Hello World");
};

greeting();

let sum2 = function (x: number, y: number): number {
  return x + y;
};
console.log(sum2(1, 2));

function greet(greeting: string, name: string) {
  console.log(`${greeting} ${name}`);
}
greet("Hello", "World");
// greet("Hello");

function greet2(greeting: string, name?: string) {
  console.log(`${greeting} ${name}`);
}

greet2("Hello");
greet2("Hello", "World");

//default parameter
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}
console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.1));

function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
        day = 29;
      } else {
        day = 28;
      }
      break;
    default:
      throw Error("Invalid month");
  }
  return day;
}

console.log(getDay(2020, 2));
console.log(getDay(undefined, 2));

function sumz(...numbers: number[]): number {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sumz());
console.log(sumz(1, 2, 3));

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
  return a + b;
}

console.log(add(1, 2));
console.log(add("Hello ", "world"));

let tambah = (x: number, y: number): number => {
  return x + y;
};
console.log(tambah(1, 2));

let tabbah2 = (x: number, y: number) => x + y;
console.log(tabbah2(1, 2));
