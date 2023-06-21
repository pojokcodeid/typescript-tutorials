<div align="center">
  
# TYPESCRIPT

</div>

## OPERASI FOR LOOP

TypeScript for loop adalah perulangan yang digunakan untuk mengeksekusi suatu blok kode secara berulang-ulang selama kondisi tertentu terpenuhi. For loop memiliki sintaks yang terdiri dari tiga bagian, yaitu inisialisasi, kondisi, dan inkremen.

Sintax dasar :

```ts
for (first expression; second expression; third expression ) {
    // statements to be executed repeatedly
}
```

Contoh TypeScript for loop adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let sum: number = 0;

// Menggunakan for loop untuk menjumlahkan angka dari 1 sampai 10
for (let i: number = 1; i <= 10; i++) {
  // Blok kode ini akan dieksekusi sebanyak 10 kali
  sum += i; // Menambahkan nilai i ke sum
}

// Menampilkan hasil penjumlahan
console.log(sum); // 55
```

TypeScript juga mendukung for...of loop dan for...in loop untuk mengulangi elemen-elemen dari suatu koleksi seperti array, string, map, set, dan lain-lain.

Contoh TypeScript for...of loop adalah sebagai berikut:

```ts
// Mendeklarasikan array dengan tipe data string
let fruits: string[] = ["apple", "banana", "orange"];

// Menggunakan for...of loop untuk menampilkan setiap elemen array
for (let fruit of fruits) {
  // Blok kode ini akan dieksekusi sebanyak jumlah elemen array
  console.log(fruit); // apple, banana, orange
}
```

Contoh TypeScript for...in loop adalah sebagai berikut:

```ts
// Mendeklarasikan objek dengan tipe data any
let person: any = {
  name: "Budi",
  age: 25,
  gender: "male",
};

// Menggunakan for...in loop untuk menampilkan setiap properti objek
for (let key in person) {
  // Blok kode ini akan dieksekusi sebanyak jumlah properti objek
  console.log(key + ": " + person[key]); // name: Budi, age: 25, gender: male
}
```

## OPERASI WHILE LOOP

TypeScript while loop adalah perulangan yang digunakan untuk mengeksekusi suatu blok kode selama kondisi tertentu bernilai truthy. While loop akan mengevaluasi kondisi sebelum memasuki blok kode. Jika kondisi bernilai truthy, maka blok kode akan dieksekusi. Jika kondisi bernilai falsy, maka perulangan akan berhenti.

Sintax dasar :

```ts
while (condition expression) {
    // code block to be executed
}
```

Contoh TypeScript while loop adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let i: number = 1;

// Menggunakan while loop untuk menampilkan angka dari 1 sampai 5
while (i <= 5) {
  // Blok kode ini akan dieksekusi selama i kurang dari atau sama dengan 5
  console.log(i); // 1, 2, 3, 4, 5
  i++; // Menambahkan nilai i sebesar 1
}
```

TypeScript juga mendukung do...while loop yang mirip dengan while loop, namun mengevaluasi kondisi setelah memasuki blok kode. Do...while loop akan mengeksekusi blok kode setidaknya sekali sebelum mengecek kondisi.

Contoh TypeScript do...while loop adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let i: number = 1;

// Menggunakan do...while loop untuk menampilkan angka dari 1 sampai 5
do {
  // Blok kode ini akan dieksekusi setidaknya sekali sebelum mengecek kondisi
  console.log(i); // 1, 2, 3, 4, 5
  i++; // Menambahkan nilai i sebesar 1
} while (i <= 5); // Kondisi yang dievaluasi setelah blok kode
```

## OPERASI BREAK

TypeScript break adalah pernyataan yang digunakan untuk menghentikan atau keluar dari suatu perulangan, switch, atau blok berlabel. Break berguna untuk mengakhiri perulangan lebih awal ketika kondisi tertentu terjadi. Break akan memindahkan kontrol program ke pernyataan selanjutnya setelah perulangan, switch, atau blok berlabel.

Contoh TypeScript break dalam perulangan adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data number
let i: number = 1;

// Menggunakan while loop untuk menampilkan angka dari 1 sampai 5
while (i <= 5) {
  // Blok kode ini akan dieksekusi selama i kurang dari atau sama dengan 5
  console.log(i); // 1, 2, 3
  i++; // Menambahkan nilai i sebesar 1
  if (i > 3) {
    // Menggunakan break untuk menghentikan perulangan jika i lebih besar dari 3
    break;
  }
}
```

Contoh TypeScript break dalam switch adalah sebagai berikut:

```ts
// Mendeklarasikan variabel dengan tipe data string
let day: string = "Monday";

// Menggunakan switch untuk mengecek nilai variabel
switch (day) {
  case "Monday":
    // Blok kode ini akan dieksekusi jika day bernilai "Monday"
    console.log("Today is Monday");
    break; // Menggunakan break untuk keluar dari switch
  case "Tuesday":
    // Blok kode ini tidak akan dieksekusi karena sudah keluar dari switch
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    // Blok kode ini tidak akan dieksekusi karena sudah keluar dari switch
    console.log("Today is Wednesday");
    break;
}
```
