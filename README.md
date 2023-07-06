<div align="center">
  
# TYPESCRIPT

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-19-array-tuples https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\18-array-tuples
```

# ARRAY DAN TUPLE

## Array

Array adalah tipe khusus dari tipe data yang dapat menyimpan banyak nilai dari tipe data yang berbeda secara berurutan menggunakan sintaks khusus.

TypeScript mendukung array, mirip dengan JavaScript. Ada dua cara untuk mendeklarasikan array:

1. menggunakan kurung siku

```ts
let fruits: string[] = ["Apple", "Orange", "Banana"];
```

2. Menggunakan tipe array generik

```ts
let fruits: Array<string> = ["Apple", "Orange", "Banana"];
```

note :
kita bisa langsung menginisiasi array seperti di javascript, tetapi jadinya kita tidak mendapatkan manfaat dari typescript
conoth :

```js
let arr = [1, 3, "Apple", "Orange", "Banana", true, false];
```

ini akan setara degan

```ts
let arr3: any = [1, 3, "Apple", "Orange", "Banana", true, false];
```

Array dapat dideklarasikan dan diinisialisasi secara terpisah.

```ts
let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];
```

dalam TypeScript dapat berisi elemen dari tipe data yang berbeda menggunakan sintaks tipe larik umum, seperti yang ditunjukkan di bawah ini.

```ts
let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
// or
let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
```

## Mengakses Elemen Array

Elemen array dapat diakses menggunakan indeks elemen misalnya ArrayName[index]. Indeks array dimulai dari nol, jadi indeks elemen pertama adalah nol, indeks elemen kedua adalah satu, dan seterusnya.

```ts
let fruits: string[] = ["Apple", "Orange", "Banana"];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
```

Gunakan for loop untuk mengakses elemen array seperti yang ditunjukkan di bawah ini.

```ts
let fruits: string[] = ["Apple", "Orange", "Banana"];

for (let index in fruits) {
  console.log(fruits[index]); // output: Apple Orange Banana
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // output: Apple Orange Banana
}
```

Metode Array di typescript bisa menggunakan metode yang ada di javascript
contoh beberapa metode :

```ts
let fruits: Array<string> = ["Apple", "Orange", "Banana"];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits.pop()); //output: Orange

fruits.push("Papaya");
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

fruits = fruits.concat(["Fig", "Mango"]);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango']

console.log(fruits.indexOf("Papaya")); //output: 2
```

## Tuple

Tupe data tuple di TypeScript adalah tipe data yang digunakan untuk merepresentasikan kumpulan data dengan tipe yang berbeda-beda dan jumlah yang tetap.

```ts
// variable biasa
let empId: number = 1;
let empName: string = "Steve";

// Tuple type variable
let employee: [number, string] = [1, "Steve"];
```

Variabel tipe tuple dapat mencakup beberapa tipe data seperti yang ditunjukkan di bawah ini.

```ts
let employee: [number, string] = [1, "Steve"];
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
```

Kita bisa mendeklarasikan tuple dengan nama.

```ts
// Membuat tuple dari tipe string dan number
let person: [name: string, age: number] = ["Alice", 20];
console.log(person);
```

Anda juga dapat mendeklarasikan array tuple.

```ts
let employee: [number, string][];
employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];
```

mendeklarasikan tuple readonly

```ts
// tuples readonly
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// jika di tambahkan atau di edit akan error
//ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);
```

mendeklarasikan toples dengan sisanya adalah number

```ts
// mendeklarasikan toples dengan sisanya adalah number
let numbers: [first: string, second: boolean, ...rest: number[]] = [
  "contoh",
  true,
  3,
  4,
  5,
  6,
  7,
];
console.log(numbers);
```

Mendeklarasikan tuple dengan elemen opsional

```ts
let person2: [name: string, age?: number] = ["Andi"];

console.log(person2);
```

## Mengakses Elemen Tuple

Kita dapat mengakses elemen tuple menggunakan indeks, sama seperti array. Indeks dimulai dari nol.

```ts
let employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"
```

## Tambahkan Elemen ke dalam Tuple

Anda dapat menambahkan elemen baru ke tuple menggunakan metode push().

```ts
let employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
```

Nama-nama elemen tuple hanya digunakan untuk memberikan konteks dan dokumentasi. Anda tidak dapat mengakses elemen tuple dengan nama-nama tersebut. Anda tetap harus menggunakan indeks numerik untuk mengakses elemen tuple
