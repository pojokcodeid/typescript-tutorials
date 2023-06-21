<div align="center">
  
# TYPESCRIPT

</div>

## FUNCTION

Functions di TypeScript adalah blok kode yang dapat dipanggil berulang kali dengan memberikan input dan menghasilkan output. Functions di TypeScript dapat didefinisikan dengan sintaks yang sama dengan JavaScript, yaitu menggunakan kata kunci function, atau dengan menggunakan arrow function.

Perintah dasarnya:

```ts
function name(parameter: type, parameter:type,...): returnType {
   // do something
}
```

Contoh Functions di TypeScript adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan kata kunci function
function add(a: number, b: number): number {
  return a + b;
}

// Mendefinisikan fungsi dengan arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Memanggil fungsi
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

Functions di TypeScript juga dapat memiliki tipe data yang eksplisit untuk parameter dan nilai kembalian. Tipe data parameter ditulis setelah nama parameter, sedangkan tipe data nilai kembalian ditulis setelah tanda kurung.

Contoh Functions dengan tipe data eksplisit adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan tipe data eksplisit untuk parameter dan nilai kembalian
function greet(name: string): string {
  return "Hello, " + name;
}

// Memanggil fungsi
console.log(greet("Budi")); // Hello, Budi
```

Functions di TypeScript juga dapat memiliki parameter opsional, parameter default, parameter rest, dan lain-lain.

## FUNCTION TYPES

Function Types di TypeScript adalah tipe data yang digunakan untuk mendeskripsikan tipe dari fungsi, yaitu parameter dan nilai kembalian. Function Types dapat ditulis dengan menggunakan function type expression, call signature, construct signature, atau type alias.

Contoh Function Types dengan function type expression adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan function type expression
let add: (a: number, b: number) => number;

// Menginisialisasi variabel dengan fungsi yang sesuai dengan tipe data
add = function (a: number, b: number) {
  return a + b;
};

// Memanggil fungsi
console.log(add(2, 3)); // 5
```

Contoh Function Types dengan call signature adalah sebagai berikut:

```ts
// Mendeklarasikan interface dengan call signature
interface GreetFunction {
  (name: string): string;
}

// Mendeklarasikan variabel dengan tipe data interface
let greet: GreetFunction;

// Menginisialisasi variabel dengan fungsi yang sesuai dengan tipe data
greet = function (name: string) {
  return "Hello, " + name;
};

// Memanggil fungsi
console.log(greet("Budi")); // Hello, Budi
```

Contoh Function Types dengan construct signature adalah sebagai berikut:

```ts
// Mendeklarasikan interface dengan construct signature
interface PersonConstructor {
  new (name: string): Person;
}

// Mendeklarasikan kelas yang sesuai dengan construct signature
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Mendeklarasikan variabel dengan tipe data interface
let personFactory: PersonConstructor;

// Menginisialisasi variabel dengan kelas yang sesuai dengan tipe data
personFactory = Person;

// Membuat objek baru dengan menggunakan variabel
let person = new personFactory("Budi");

// Menampilkan properti objek
console.log(person.name); // Budi
```

Contoh Function Types dengan type alias adalah sebagai berikut:

```ts
// Mendeklarasikan type alias untuk function type expression
type AddFunction = (a: number, b: number) => number;

// Mendeklarasikan variabel dengan tipe data type alias
let add: AddFunction;

// Menginisialisasi variabel dengan fungsi yang sesuai dengan tipe data
add = function (a: number, b: number) {
  return a + b;
};

// Memanggil fungsi
console.log(add(2, 3)); // 5
```

## OPTIONAL PARAMETER

Optional Parameters di TypeScript adalah parameter yang dapat diabaikan saat memanggil fungsi. Optional Parameters ditandai dengan tanda tanya (?) setelah nama parameter. TypeScript tidak akan memeriksa jumlah dan tipe argumen untuk parameter opsional, tetapi hanya untuk parameter yang wajib. Parameter opsional yang tidak diberikan nilai akan mendapatkan nilai undefined.

Contoh Optional Parameters di TypeScript adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan parameter opsional c
function add(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    // Jika c diberikan nilai, maka tambahkan ke hasil
    return a + b + c;
  } else {
    // Jika c tidak diberikan nilai, maka kembalikan a + b saja
    return a + b;
  }
}

// Memanggil fungsi dengan dua argumen
console.log(add(2, 3)); // 5

// Memanggil fungsi dengan tiga argumen
console.log(add(2, 3, 4)); // 9
```

Optional Parameters harus diletakkan setelah parameter wajib dalam daftar parameter. Jika tidak, TypeScript akan mengeluarkan error.

Contoh error saat meletakkan parameter opsional sebelum parameter wajib adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan parameter opsional a dan parameter wajib b
function multiply(a?: number, b: number): number {
  // Error: A required parameter cannot follow an optional parameter.
  return a * b;
}
```

## DEFAULT PARAMETER

Default Parameters di TypeScript adalah parameter yang memiliki nilai awal yang ditentukan jika parameter tersebut tidak diberikan nilai atau bernilai undefined saat memanggil fungsi. Default Parameters dapat ditulis dengan menggunakan tanda sama dengan (=) diikuti dengan nilai default setelah tipe data parameter. TypeScript juga dapat menentukan tipe data parameter default dari nilai default tersebut. Default Parameters dapat membantu kita menghindari memberikan nilai parameter yang berulang-ulang atau tidak perlu saat memanggil fungsi.

Contoh Default Parameters di TypeScript adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan parameter default discount
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

// Memanggil fungsi tanpa memberikan argumen untuk discount
console.log(applyDiscount(100)); // 95

// Memanggil fungsi dengan memberikan argumen untuk discount
console.log(applyDiscount(100, 0.1)); // 90
```

Default Parameters juga merupakan parameter opsional, artinya kita dapat mengabaikan parameter default saat memanggil fungsi. Namun, berbeda dengan parameter opsional, default parameters tidak perlu diletakkan setelah parameter wajib dalam daftar parameter. Jika default parameters diletakkan sebelum parameter wajib, kita perlu secara eksplisit memberikan nilai undefined untuk mendapatkan nilai default yang ditentukan.

Contoh Default Parameters sebelum parameter wajib adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan parameter default year dan parameter wajib month
function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  // Menghitung jumlah hari dalam bulan tertentu
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
      // tahun kabisat
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
      else day = 28;
      break;
    default:
      throw Error("Invalid month");
  }
  return day;
}

// Memanggil fungsi dengan memberikan argumen untuk year dan month
console.log(getDay(2020, 2)); // 29

// Memanggil fungsi dengan memberikan argumen undefined untuk year dan argumen untuk month
console.log(getDay(undefined, 2)); // bergantung pada tahun saat ini

// Memanggil fungsi tanpa memberikan argumen untuk year dan month
console.log(getDay()); // Error: Expected at least one argument, but got zero.
```

## REST PARAMETER

Rest Parameters di TypeScript adalah parameter yang memungkinkan kita untuk menerima nol atau lebih argumen dengan tipe data tertentu sebagai sebuah array. Rest Parameters berguna ketika jumlah parameter tidak diketahui atau dapat bervariasi. Rest Parameters dikelompokkan ke dalam sebuah variabel tunggal yang dapat diakses sebagai sebuah array di dalam fungsi. Sebuah fungsi hanya dapat memiliki satu rest parameter, dan rest parameter harus muncul terakhir dalam daftar parameter.

Contoh Rest Parameters di TypeScript adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan rest parameter numbers
function sum(...numbers: number[]): number {
  // Menghitung jumlah dari semua angka dalam array
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Memanggil fungsi dengan nol argumen
console.log(sum()); // 0

// Memanggil fungsi dengan tiga argumen
console.log(sum(1, 2, 3)); // 6

// Memanggil fungsi dengan lima argumen
console.log(sum(1, 2, 3, 4, 5)); // 15
```

Rest Parameters di TypeScript dapat digunakan dalam fungsi, arrow function, atau kelas.

Contoh Rest Parameters dalam arrow function adalah sebagai berikut:

```ts
// Mendefinisikan arrow function dengan rest parameter names
let greet = (...names: string[]) => {
  // Mengembalikan sapaan untuk semua nama dalam array
  return "Hello, " + names.join(", ") + "!";
};

// Memanggil arrow function dengan satu argumen
console.log(greet("Budi")); // Hello, Budi!

// Memanggil arrow function dengan dua argumen
console.log(greet("Budi", "Ani")); // Hello, Budi, Ani!
```

## FUNCTION OVERLOADING

Function Overloadings di TypeScript adalah cara untuk mendefinisikan beberapa fungsi dengan nama yang sama tetapi dengan tanda tangan (signature) yang berbeda, yaitu parameter dan tipe data kembalian. Function Overloadings berguna ketika kita ingin menulis fungsi yang dapat dipanggil dengan berbagai cara dengan parameter yang berbeda-beda atau tipe data kembalian yang berbeda-beda. Fungsi yang tepat untuk dipanggil akan ditentukan pada saat runtime berdasarkan argumen yang diberikan.

Contoh Function Overloadings di TypeScript adalah sebagai berikut:

```ts
// Mendefinisikan fungsi dengan dua overload
function add(a: number, b: number): number; // overload pertama
function add(a: string, b: string): string; // overload kedua

// Mendefinisikan implementasi fungsi
function add(a: any, b: any): any {
  return a + b;
}

// Memanggil fungsi dengan argumen number
console.log(add(2, 3)); // 5

// Memanggil fungsi dengan argumen string
console.log(add("Hello", "World")); // HelloWorld
```

Dalam contoh di atas, kita mendefinisikan fungsi add dengan dua overload, yaitu fungsi yang menerima dua parameter number dan mengembalikan number, dan fungsi yang menerima dua parameter string dan mengembalikan string. Kemudian kita mendefinisikan implementasi fungsi add dengan menggunakan tipe data any untuk parameter dan nilai kembalian. Implementasi ini harus kompatibel dengan semua overload yang ada. Saat kita memanggil fungsi add, editor kode akan menyarankan bahwa ada overload yang tersedia seperti pada gambar berikut:

Function Overloadings di TypeScript juga dapat digunakan untuk metode dalam kelas.

Contoh Function Overloadings dalam kelas adalah sebagai berikut:

```ts
// Mendefinisikan kelas Calculator
class Calculator {
  // Mendefinisikan metode calculate dengan dua overload
  calculate(a: number, b: number, op: "+"): number; // overload pertama
  calculate(a: number, b: number, op: "-"): number; // overload kedua

  // Mendefinisikan implementasi metode calculate
  calculate(a: number, b: number, op: "+" | "-"): number {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    }
  }
}

// Membuat objek dari kelas Calculator
let calc = new Calculator();

// Memanggil metode calculate dengan argumen +
console.log(calc.calculate(2, 3, "+")); // 5

// Memanggil metode calculate dengan argumen -
console.log(calc.calculate(2, 3, "-")); // -1
```
