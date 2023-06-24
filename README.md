<div align="center">
  
# TYPESCRIPT

</div>

## Interfaces

Interfaces di TypeScript adalah tipe abstrak yang mendeskripsikan bentuk dari sebuah objek, yaitu nama properti dan tipe data yang dapat dimilikinya. Interface berfungsi sebagai kontrak untuk kelas, fungsi, atau objek yang mengimplementasikannya, artinya mereka harus mengikuti sintaks yang ditentukan oleh interface. Interface tidak menghasilkan kode apa pun atau memiliki biaya runtime, tetapi mereka membantu dengan pengecekan tipe dan pencegahan kesalahan. TypeScript menggunakan kata kunci interface untuk mendefinisikan interface

contoh :

```ts
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}
```
Dalam contoh di atas, IEmployee interface menyertakan dua properti empCodedan empName dan dua metode yaitu getSalary dan getManagerName. ini berarti objek yang menggunakan harus mendifiniskikan dua properti dan dua method.

## Implement Interface
Mirip dengan bahasa seperti Java dan C#, Interface di TypeScript dapat diimplementasikan dengan Kelas. Kelas yang mengimplementasikan Interface harus benar-benar sesuai dengan struktur Interface.

contoh :
```ts
interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (empCode: number) => number;
}

class Employee implements IEmployee {
  empCode: number;
  name: string;
  constructor(empCode: number, name: string) {
    this.empCode = empCode;
    this.name = name;
  }
  getSalary(empCode: number): number {
    if (empCode === this.empCode) {
      return 20000;
    }
    return 0;
  }
}

let emp = new Employee(1, "sai");
console.log(emp.getSalary(1));
```
## Interface as Type
Interface sebagai tipe di TypeScript berarti bahwa interface dapat digunakan untuk mendefinisikan tipe dari sebuah variabel, fungsi, atau kelas. Interface juga dapat diimplementasikan oleh kelas yang harus mengikuti bentuk yang ditentukan oleh interface. Interface sebagai tipe membantu dengan pengecekan tipe dan pencegahan kesalahan.

Contoh interface sebagai tipe variabel:
```ts
interface Person {
  name: string;
  age: number;
}

let p1: Person = { name: "Alice", age: 25 }; // valid
let p2: Person = { name: "Bob", age: "30" }; // invalid, age harus number
let p3: Person = { name: "Charlie" }; // invalid, age harus ada
```
Interface ini menentukan bahwa variabel dengan tipe Person harus memiliki properti name dan age dengan tipe data string dan number secara berturut-turut.
Contoh interface sebagai tipe fungsi:
```ts
interface Greeting {
  (name: string): string;
}

let hello: Greeting = function (name) {
  return "Hello, " + name;
};

let hi: Greeting = function (name) {
  return "Hi, " + name;
};

console.log(hello("Alice")); // Hello, Alice
console.log(hi("Bob")); // Hi, Bob
```
Interface ini menentukan bahwa fungsi dengan tipe Greeting harus menerima parameter bernama name dengan tipe data string dan mengembalikan nilai dengan tipe data string.

## Interface for Array Type
Interface untuk tipe array di TypeScript berarti bahwa interface dapat digunakan untuk mendefinisikan tipe dari sebuah array dan elemen-elemennya. Interface untuk tipe array dapat menggunakan indeks numerik atau simbolik untuk menentukan tipe dari elemen-elemen array.

Contoh interface untuk tipe array dengan indeks numerik:
```ts
interface NumberArray {
  [index: number]: number;
}

let arr1: NumberArray = [1, 2, 3]; // valid
let arr2: NumberArray = ["a", "b", "c"]; // invalid, elemen harus number
let arr3: NumberArray = { 0: 1, 1: 2, 2: 3 }; // valid, objek dengan indeks numerik
```
Interface ini menentukan bahwa array dengan tipe NumberArray harus memiliki elemen-elemen dengan tipe data number.

Contoh interface untuk tipe array dengan indeks simbolik:
```ts
interface StringArray {
  [index: string]: string;
}

let arr4: StringArray = ["a", "b", "c"]; // valid
let arr5: StringArray = [1, 2, 3]; // invalid, elemen harus string
let arr6: StringArray = { a: "a", b: "b", c: "c" }; // valid, objek dengan indeks string
```
Interface ini menentukan bahwa array dengan tipe StringArray harus memiliki elemen-elemen dengan tipe data string.

## Optional Property
Interface dengan properti opsional di TypeScript berarti bahwa interface dapat mendefinisikan properti yang mungkin ada atau tidak ada pada objek yang mengimplementasikannya. Properti opsional ditandai dengan tanda tanya (?) di akhir nama properti dalam deklarasi interface. Properti opsional berguna ketika Anda ingin membuat pola seperti “option bags” di mana Anda melewatkan objek ke fungsi yang hanya memiliki beberapa properti yang diisi.

Contoh interface dengan properti opsional:
```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);
```
Interface ini menentukan bahwa objek yang mengimplementasikannya dapat memiliki properti bernama color dan/atau width dengan tipe data string dan number secara berturut-turut. Fungsi createSquare menerima objek dengan tipe interface tersebut dan mengembalikan objek baru dengan warna dan luas yang sesuai. Objek mySquare hanya melewatkan properti color, sehingga properti width akan menggunakan nilai defaultnya.

## Read only Properties
Interface dengan properti readonly di TypeScript berarti bahwa interface dapat mendefinisikan properti yang hanya dapat dibaca dan tidak dapat diubah setelah objek yang mengimplementasikannya dibuat. Properti readonly ditandai dengan kata kunci readonly di awal nama properti dalam deklarasi interface. Properti readonly berguna ketika Anda ingin mencegah modifikasi pada properti tertentu.

Contoh interface dengan properti readonly:
```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error, cannot assign to readonly property
```
Interface ini menentukan bahwa objek dengan tipe Point harus memiliki properti x dan y dengan tipe data number yang tidak dapat diubah setelah objek dibuat. Jika mencoba mengubah nilai properti tersebut, akan terjadi kesalahan kompilasi.

## Extending Interfaces
Interface yang memperluas interface lain di TypeScript berarti bahwa interface dapat mewarisi properti dan metode dari interface lain dan menambahkan atau menimpa properti dan metode sendiri. Ini adalah cara untuk menerapkan pewarisan, sebuah mekanisme di mana interface anak dapat mengakses properti dan metode dari interface induk. Memperluas interface membantu kita untuk membuat interface yang lebih generik dan fleksibel dan menggunakan kembali interface yang ada. Sebuah interface dapat memperluas satu atau lebih interface lain menggunakan kata kunci extends, misalnya:

```ts
interface Shape {
  area(): number;
}

interface Colorful {
  color: string;
}

interface Circle extends Shape, Colorful {
  radius: number;
}

class Coba implements Circle {
  radius: number;
  color: string;
  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let coba = new Coba(10, "red");
console.log(coba.area());
```
