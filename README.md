<div align="center">
  
# TYPESCRIPT
## ABSTRACT CLASS

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-12-abstractclass https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\11-abstractclass
```

referensi : <br>
https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content

Class di TypeScript adalah sebuah fitur yang memungkinkan kita untuk membuat struktur data yang memiliki properti dan metode. Class juga dapat mewarisi sifat dari class lain dengan menggunakan kata kunci extends. Class di TypeScript mendukung fitur-fitur seperti constructor, field, method, access modifier, static member, abstract class, dan decorator

Contoh class di TypeScript:

```ts
// Membuat class Employee dengan properti identifier dan method greet
class Employee {
  // Membuat field identifier dengan tipe string
  identifier: string;

  // Membuat constructor untuk menginisialisasi field identifier
  constructor(identifier: string) {
    this.identifier = identifier;
  }

  // Membuat method greet untuk menampilkan pesan sapaan
  greet() {
    console.log(`Hello, I am ${this.identifier}`);
  }
}

// Membuat objek dari class Employee
let emp1 = new Employee("Alice");
let emp2 = new Employee("Bob");

// Memanggil method greet dari objek emp1 dan emp2
emp1.greet(); // Hello, I am Alice
emp2.greet(); // Hello, I am Bob
```

## Cara Membuat Field

Cara membuat field di class adalah dengan menulis nama field dan tipe datanya di dalam kurung kurawal yang mengapit definisi class. Field adalah variabel yang menyimpan data yang berkaitan dengan class. Field dapat memiliki hak akses seperti public, private, atau protected.

## Konstruktor

Konstruktor di TypeScript adalah sebuah metode khusus yang dipanggil saat kita membuat objek dari sebuah class. Konstruktor biasanya digunakan untuk menginisialisasi properti-properti dari class atau melakukan operasi-operasi awal1. Konstruktor dapat memiliki parameter dengan anotasi tipe, nilai default, dan overload

## Membuat Objek

Cara membuat objek dari class adalah dengan menggunakan kata kunci new yang diikuti dengan nama class dan tanda kurung. Objek adalah sebuah variabel yang menyimpan nilai dari sebuah class. Objek dapat mengakses properti dan metode yang ada di dalam class.

```ts
// Membuat objek dari class Employee
let emp1 = new Employee("Alice");
let emp2 = new Employee("Bob");

// Memanggil method greet dari objek emp1 dan emp2
emp1.greet(); // Hello, I am Alice
emp2.greet(); // Hello, I am Bob
```

## Membuat Method

Cara membuat method di class adalah dengan menulis nama method dan tipe kembalian (jika ada) di dalam kurung kurawal yang mengapit definisi class. Method adalah fungsi yang melakukan suatu tindakan atau operasi yang berkaitan dengan class. Method dapat memiliki parameter untuk menerima input dan return untuk mengembalikan output¹.

Contoh membuat method di class:

```typescript
// Membuat class Employee dengan properti identifier dan method greet
class Employee {
  // Membuat field identifier dengan tipe string
  identifier: string;

  // Membuat constructor untuk menginisialisasi field identifier
  constructor(identifier: string) {
    this.identifier = identifier;
  }

  // Membuat method greet untuk menampilkan pesan sapaan
  greet() {
    console.log(`Hello, I am ${this.identifier}`);
  }
}
```

Terkait dengan access modifier, static member, abstract class, dan decorator di bahas dalam materi terpisah.
