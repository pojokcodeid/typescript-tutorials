# Typescript

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-06-typedata-special https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\05-typedata-special
```

# Tipe Data Special

## Type Data ANY

Tipe data any di TypeScript adalah tipe data yang digunakan untuk merepresentasikan nilai yang bisa memiliki tipe apapun. Tipe data any digunakan ketika kita berurusan dengan program pihak ketiga dan mengharapkan variabel apapun tetapi kita tidak tahu tipe pasti dari variabel tersebut. Tipe data any digunakan karena membantu kita untuk memilih dan meninggalkan pemeriksaan tipe saat kompilasi.

```ts
let a: any;
a = 10;
a = "Hello";
a = true;
a = [1, 2, 3];
a = { a: 1, b: 2 };
console.log(a);

// Mendeklarasikan array dengan tipe data any
let arr: any[] = ["John", 212, true];

// Menambahkan elemen dengan tipe data berbeda
arr.push("Smith");
console.log(arr);
```

## Type Data UNKNOWN

Type data unknown adalah alternatif serupa, tetapi lebih aman untuk any.

```ts
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
```

## Type Data Never

Tipe data never di TypeScript adalah tipe data yang digunakan untuk merepresentasikan nilai yang tidak pernah terjadi. Tipe data never digunakan ketika kita yakin bahwa sesuatu tidak akan pernah terjadi. Misalnya, kita menulis sebuah fungsi yang tidak akan pernah mengembalikan nilai atau selalu melempar sebuah eksepsi.

```ts
// Mendeklarasikan fungsi yang melempar eksepsi dan tidak mengembalikan nilai
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
throwError("Something went wrong");

// Type guard yang memeriksa apakah tipe adalah never
function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
}

// Contoh fungsi yang menggunakan type guard assertNever
function printAnimal(animal: "cat" | "dog" | "bird"): void {
  switch (animal) {
    case "cat":
      console.log("Meow");
      break;
    case "dog":
      console.log("Woof");
      break;
    case "bird":
      console.log("Tweet");
      break;
    default:
      // Jika animal bukan salah satu dari ketiga pilihan di atas, maka tipe animal adalah never
      assertNever(animal); // Akan melempar error jika animal bukan cat, dog, atau bird
  }
}

printAnimal("cat");

// Mendeklarasikan variabel dengan tipe data never
let nothing: never;

// Menginisialisasi dengan nilai apapun akan menimbulkan error
nothing = null; // Error: Type 'null' is not assignable to type 'never'
nothing = 0; // Error: Type 'number' is not assignable to type 'never'
nothing = "hello"; // Error: Type 'string' is not assignable to type 'never'
```
