<div align="center">
  
# TYPESCRIPT

</div>

## Union


TypeScript Union adalah tipe data yang menggabungkan dua atau lebih tipe data lainnya. Union dapat digunakan untuk mendeklarasikan variabel, parameter, atau nilai kembalian yang dapat memiliki beberapa tipe data yang berbeda. Union dapat membantu kita menangani situasi ketika nilai dapat bervariasi dalam tipe data yang mereka ambil¹. Kita menggunakan simbol pipa (|) untuk memisahkan setiap tipe data dalam union, misalnya number | string | boolean adalah tipe data dari nilai yang dapat berupa number, string, atau boolean.

Berikut adalah contoh penggunaan TypeScript Union:

```ts
// Mendeklarasikan fungsi yang menerima parameter padding yang dapat berupa number atau string
function padLeft(value: string, padding: number | string) {
  // ...
}

// Memanggil fungsi padLeft dengan parameter padding yang berbeda
padLeft("Hello world", 4); // padding berupa number
padLeft("Hello world", " "); // padding berupa string
padLeft("Hello world", true); // padding berupa boolean (salah)
Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
```

Dalam contoh di atas, kita mendefinisikan fungsi padLeft yang menerima parameter padding yang dapat berupa number atau string. Kita dapat memanggil fungsi tersebut dengan nilai padding yang sesuai dengan union type, tetapi jika kita mencoba memanggilnya dengan nilai padding yang tidak termasuk dalam union type, seperti boolean, kita akan mendapatkan kesalahan.

Untuk mengakses properti atau metode dari union type, kita hanya dapat mengakses anggota yang umum untuk semua tipe data dalam union². Contoh:

```ts
// Mendeklarasikan interface Fish dan Bird
interface Fish {
  swim(): void;
  layEggs(): void;
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

// Mendeklarasikan fungsi yang mengembalikan nilai union type Fish | Bird
function getSmallPet(): Fish | Bird {
  // ...
}

// Mengakses properti atau metode dari union type
let pet = getSmallPet();
pet.layEggs(); // OK, karena layEggs() umum untuk Fish dan Bird
pet.swim(); // Error, karena swim() hanya ada di Fish
Property 'swim' does not exist on type 'Fish | Bird'.
Property 'swim' does not exist on type 'Bird'.
```

Dalam contoh di atas, kita mendefinisikan interface Fish dan Bird, dan fungsi getSmallPet() yang mengembalikan nilai union type Fish | Bird. Kita dapat mengakses metode layEggs() dari nilai union type, karena metode tersebut umum untuk Fish dan Bird. Namun, kita tidak dapat mengakses metode swim() dari nilai union type, karena metode tersebut hanya ada di Fish.


