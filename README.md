<div align="center">
  
# TYPESCRIPT
## FUNCTION

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-08-function https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\07-function
```

Functions di TypeScript adalah blok kode yang dapat dipanggil berulang kali dengan memberikan input dan menghasilkan output. Functions di TypeScript dapat didefinisikan dengan sintaks yang sama dengan JavaScript, yaitu menggunakan kata kunci function, atau dengan menggunakan arrow function.

Perintah dsdar fungsi

```ts
function name(parameter: type, parameter:type,...): returnType {
   // do something
}
```

contoh Functaion tanpa parameter

```ts
function display() {
  console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript
```

Contoh Fungsi dengan parameter

```ts
function Sum(x: number, y: number): number {
  return x + y;
}

console.log(Sum(2, 3)); // returns 5
```

### Fungsi Anonim

Fungsi anonim adalah salah satu yang didefinisikan sebagai ekspresi. Ekspresi ini disimpan dalam sebuah variabel. Jadi, fungsinya sendiri tidak memiliki nama. Fungsi-fungsi ini dipanggil menggunakan nama variabel tempat fungsi disimpan.
contoh:

```ts
let greeting = function () {
  console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript!
```

Fungsi anomim dengan parameter :

```ts
let Sum = function (x: number, y: number): number {
  return x + y;
};

console.log(Sum(2, 3)); // returns 5
```

### Parameter Fungsi

Parameter adalah nilai atau argumen yang diteruskan ke suatu fungsi. Di TypeScript, kompiler mengharapkan suatu fungsi untuk menerima jumlah dan jenis argumen yang tepat seperti yang didefinisikan dalam tanda tangan fungsi. Jika fungsi mengharapkan tiga parameter, kompiler memeriksa apakah pengguna telah memberikan nilai untuk ketiga parameter yaitu memeriksa kecocokan yang tepat.

```ts
function Greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
Greet("Hi"); // Compiler Error: Expected 2 arguments, but got 1.
Greet("Hi", "Bill", "Gates"); //Compiler Error: Expected 2 arguments, but got 3.
```

### Parameter Opsional

TypeScript memiliki fungsionalitas parameter opsional. Parameter yang mungkin atau mungkin tidak menerima nilai dapat ditambahkan dengan tanda '?' untuk menandainya sebagai opsional.

```ts
function Greet(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
Greet("Hi"); // OK, returns "Hi undefined!".
Greet("Hi", "Bill", "Gates"); //Compiler Error: Expected 2 arguments, but got 3.
```

### Default Parameter

Default Parameters di TypeScript adalah parameter yang memiliki nilai awal yang ditentukan jika parameter tersebut tidak diberikan nilai atau bernilai undefined saat memanggil fungsi. Default Parameters dapat ditulis dengan menggunakan tanda sama dengan (=) diikuti dengan nilai default setelah tipe data parameter.

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

contoh lainnya :

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

### REST PARAMETER

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

### FUNCTION OVERLOADING

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
    let hasil = 0;
    if (op === "+") {
      hasil = a + b;
    } else if (op === "-") {
      hasil = a - b;
    }
    return hasil;
  }
}

// Membuat objek dari kelas Calculator
let calc = new Calculator();

// Memanggil metode calculate dengan argumen +
console.log(calc.calculate(2, 3, "+")); // 5

// Memanggil metode calculate dengan argumen -
console.log(calc.calculate(2, 3, "-")); // -1
```

## Arrow Function

Arrow function di TypeScript adalah sebuah fungsi anonim yang memiliki sintaks yang lebih singkat daripada fungsi biasa. Arrow function menggunakan tanda panah tebal => untuk memisahkan parameter dan tubuh fungsi. Arrow function juga memiliki lingkup leksikal untuk kata kunci this, yang berarti mereka mewarisi nilai this dari fungsi atau kelas yang mengandungnya

```ts
// Fungsi biasa
function tambah(x: number, y: number): number {
  return x + y;
}

// Arrow function
let tambah = (x: number, y: number): number => {
  return x + y;
};

// Arrow function dengan satu pernyataan
let tambah = (x: number, y: number) => x + y;
```
