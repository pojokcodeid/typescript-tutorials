let a: any;
a = 1;
a = "1";
a = true;
a = {};
a = [];
a = null;
a = undefined;

console.log(a);

let arr: any[] = ["Jon", 121, true];
arr[0] = "Jon Wik";
arr.push("Smit");
console.log(arr);

// type data unknown
let w: unknown = 1;
w = "string";
w = {
  runNonExixtsMethod: () => {
    console.log("runNonExixtsMethod contoh 2");
  },
} as { runNonExixtsMethod: () => void };
if (typeof w === "object" && w !== null) {
  (w as { runNonExixtsMethod: () => void }).runNonExixtsMethod();
}

// type data never
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
// throwError("error");

function assertNever(x: never): never {
  throw new Error("error" + x);
}

function printAnimal(animal: "cat" | "dog" | "bird"): void {
  switch (animal) {
    case "cat":
      console.log("meow");
      break;
    case "dog":
      console.log("woof");
      break;
    case "bird":
      console.log("tweet");
      break;
    default:
      assertNever(animal);
  }
}

printAnimal("cat");

let nothing: never;

// nothing= null;
// nothing= undefined;
// nothing="hello";
