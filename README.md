<div align="center">
  
# TYPESCRIPT

</div>

## OPERASI IF

TypeScript if adalah pernyataan yang digunakan untuk mengeksekusi suatu blok kode berdasarkan kondisi tertentu. Jika kondisi bernilai true, maka blok kode di dalam if akan dieksekusi. Jika kondisi bernilai false, maka blok kode di dalam if akan dilewati.

Contoh TypeScript if adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let x: number = 10;
let y: number = 20;

// Menggunakan if untuk memeriksa kondisi
if (x > y) {
  // Blok kode ini akan dieksekusi jika x lebih besar dari y
  console.log("x is greater than y");
}

if (x < y) {
  // Blok kode ini akan dieksekusi jika x lebih kecil dari y
  console.log("x is less than y");
}
```

TypeScript juga mendukung if...else dan if...else if...else untuk mengeksekusi blok kode alternatif jika kondisi di dalam if tidak terpenuhi.

Contoh TypeScript if...else dan if...else if...else adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let x: number = 10;
let y: number = 20;

// Menggunakan if...else untuk memeriksa kondisi
if (x > y) {
  // Blok kode ini akan dieksekusi jika x lebih besar dari y
  console.log("x is greater than y");
} else {
  // Blok kode ini akan dieksekusi jika x tidak lebih besar dari y
  console.log("x is less than or equal to y");
}

// Menggunakan if...else if...else untuk memeriksa kondisi
if (x > y) {
  // Blok kode ini akan dieksekusi jika x lebih besar dari y
  console.log("x is greater than y");
} else if (x < y) {
  // Blok kode ini akan dieksekusi jika x lebih kecil dari y
  console.log("x is less than y");
} else {
  // Blok kode ini akan dieksekusi jika x sama dengan y
  console.log("x is equal to y");
}
```

TypeScript juga mendukung operator ternary ?: untuk mengeksekusi salah satu dari dua ekspresi berdasarkan kondisi tertentu.

Contoh TypeScript operator ternary ?: adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let x: number = 10;
let y: number = 20;

// Menggunakan operator ternary ?: untuk memeriksa kondisi
x > y
  ? console.log("x is greater than y")
  : console.log("x is less than or equal to y");
```

## OPERASI SWITCH

TypeScript switch adalah pernyataan yang digunakan untuk mengeksekusi salah satu dari beberapa blok kode berdasarkan nilai atau ekspresi tertentu. Switch memungkinkan kita untuk menulis kode yang lebih rapi dan mudah dibaca daripada menggunakan if...else if...else yang berulang-ulang.

Sintax Dasar:

```ts
switch (expression) {
  case constant - expression1: {
    //statements;
    break;
  }
  case constant_expression2: {
    //statements;
    break;
  }
  default: {
    //statements;
    break;
  }
}
```

Contoh TypeScript switch adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data string
let day: string = "Monday";

// Menggunakan switch untuk memeriksa nilai variabel
switch (day) {
  case "Monday":
    // Blok kode ini akan dieksekusi jika day bernilai "Monday"
    console.log("Today is Monday");
    break;
  case "Tuesday":
    // Blok kode ini akan dieksekusi jika day bernilai "Tuesday"
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    // Blok kode ini akan dieksekusi jika day bernilai "Wednesday"
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    // Blok kode ini akan dieksekusi jika day bernilai "Thursday"
    console.log("Today is Thursday");
    break;
  case "Friday":
    // Blok kode ini akan dieksekusi jika day bernilai "Friday"
    console.log("Today is Friday");
    break;
  case "Saturday":
    // Blok kode ini akan dieksekusi jika day bernilai "Saturday"
    console.log("Today is Saturday");
    break;
  case "Sunday":
    // Blok kode ini akan dieksekusi jika day bernilai "Sunday"
    console.log("Today is Sunday");
    break;
  default:
    // Blok kode ini akan dieksekusi jika day tidak bernilai salah satu dari case di atas
    console.log("Invalid day");
}
```

TypeScript juga mendukung pengelompokan beberapa case yang memiliki blok kode yang sama. Hal ini berguna untuk menghindari duplikasi kode.

Contoh TypeScript pengelompokan case adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let month: number = 2;

// Menggunakan switch untuk memeriksa nilai variabel
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    // Blok kode ini akan dieksekusi jika month bernilai salah satu dari case di atas
    console.log("This month has 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    // Blok kode ini akan dieksekusi jika month bernilai salah satu dari case di atas
    console.log("This month has 30 days");
    break;
  case 2:
    // Blok kode ini akan dieksekusi jika month bernilai 2
    console.log("This month has either 28 or 29 days");
    break;
  default:
    // Blok kode ini akan dieksekusi jika month tidak bernilai salah satu dari case di atas
    console.log("Invalid month");
}
```
