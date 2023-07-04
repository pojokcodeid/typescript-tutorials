let sum: number = 0;

for (let i: number = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

let fruits: string[] = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

let person: any = {
  name: "Budi",
  age: 25,
  gender: "male",
};

for (let key in person) {
  console.log(key + " : " + person[key]);
}

let i: number = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

i = 1;

while (i <= 5) {
  console.log(i);
  i++;
  if (i > 3) {
    break;
  }
}

let day: string = "monday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Invalid day");
    break;
}
