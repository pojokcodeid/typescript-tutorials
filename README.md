<div align="center">
  
# TYPESCRIPT

</div>

## Array dan Tuples

TypeScript Array dan tuples adalah dua tipe data yang dapat digunakan untuk menyimpan kumpulan nilai. Namun, ada beberapa perbedaan antara array dan tuple dalam TypeScript. Berikut ini adalah beberapa perbedaan tersebut:

- Tipe elemen: Dalam array, tipe elemen-elemen harus sama, sedangkan dalam tuple, setiap elemen dapat memiliki tipe yang berbeda¹.
- Panjang: Array dapat memiliki panjang yang berubah, sedangkan tuple memiliki panjang tetap¹.
- Metode: Array memiliki metode bawaan seperti push, pop, slice, dan lain-lain, sedangkan tuple tidak memiliki metode bawaan².
- Akses elemen: Array dan tuple sama-sama dapat mengakses elemen dengan indeks numerik, tetapi tuple juga dapat mengakses elemen dengan label³.

Berikut adalah contoh penggunaan TypeScript Array dan tuples:

```ts
// Membuat array dari tipe string
let fruits: string[] = ["apple", "banana", "orange"];

// Membuat tuple dari tipe string dan number
let person: [name: string, age: number] = ["Alice", 20];

// Menambahkan elemen ke array dengan metode push
fruits.push("mango"); // ["apple", "banana", "orange", "mango"]

// Mengubah elemen array dengan indeks
fruits[0] = "pear"; // ["pear", "banana", "orange", "mango"]

// Mengakses elemen array dengan indeks
console.log(fruits[1]); // banana

// Mengubah elemen tuple dengan indeks atau label
person[0] = "Bob"; // ["Bob", 20]
person.name = "Charlie"; // ["Charlie", 20]

// Mengakses elemen tuple dengan indeks atau label
console.log(person[1]); // 20
console.log(person.age); // 20
```
