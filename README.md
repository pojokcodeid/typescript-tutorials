<div align="center">
  
# TYPESCRIPT
## Objek Oriented

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-07-objek-oriented https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\06-objek-oriented
```

Objek oriented di TypeScript adalah paradigma pemrograman yang berdasarkan pada konsep objek, yaitu entitas yang memiliki properti (atribut) dan perilaku (metode). Objek oriented di TypeScript memungkinkan kita untuk menyusun program yang terdiri dari komponen-komponen yang dapat digunakan kembali (reusable) dan mudah dimodifikasi¹.

Beberapa fitur objek oriented di TypeScript adalah:

- **Kelas**. Kelas adalah cetak biru atau rancangan untuk membuat objek. Kelas dapat memiliki properti dan metode yang mendefinisikan karakteristik dan perilaku objek. Kelas dapat dibuat dengan kata kunci **class**².

Contoh:

```ts
// Membuat kelas bernama Animal
class Animal {
  // Mendeklarasikan properti name dan age
  name: string;
  age: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Membuat metode untuk menampilkan informasi objek
  showInfo() {
    console.log(`This is ${this.name}, ${this.age} years old`);
  }
}

// Membuat objek dari kelas Animal
let animal = new Animal("Lion", 5);

// Memanggil metode showInfo
animal.showInfo(); // This is Lion, 5 years old
```

- **Pewarisan**. Pewarisan adalah mekanisme untuk mewariskan properti dan metode dari kelas lain. Pewarisan memungkinkan kita untuk membuat kelas turunan (subclass) yang memiliki karakteristik dan perilaku tambahan dari kelas induk (superclass). Pewarisan dapat dilakukan dengan kata kunci **extends**².

Contoh:

```ts
// Membuat kelas bernama Animal
class Animal {
  // Mendeklarasikan properti name dan age
  name: string;
  age: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Membuat metode untuk menampilkan informasi objek
  showInfo() {
    console.log(`This is ${this.name}, ${this.age} years old`);
  }
}

// Membuat kelas bernama Dog yang mewarisi kelas Animal
class Dog extends Animal {
  // Mendeklarasikan properti breed
  breed: string;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(name: string, age: number, breed: string) {
    // Memanggil konstruktor dari kelas Animal
    super(name, age);
    this.breed = breed;
  }

  // Membuat metode untuk menampilkan informasi objek
  showInfo() {
    // Memanggil metode dari kelas Animal
    super.showInfo();
    console.log(`This is a ${this.breed}`);
  }
}

// Membuat objek dari kelas Dog
let dog = new Dog("Max", 3, "Golden Retriever");

// Memanggil metode showInfo
dog.showInfo(); // This is Max, 3 years old. This is a Golden Retriever.
```

- **Enkapsulasi**. Enkapsulasi adalah proses untuk menyembunyikan detail implementasi dari pengguna. Enkapsulasi memungkinkan kita untuk mengontrol akses ke properti dan metode dari kelas. Enkapsulasi dapat dilakukan dengan menggunakan modifier seperti **public**, **private**, **protected**, dan **readonly**².

Contoh:

```ts
// Membuat kelas bernama Account
class Account {
  // Mendeklarasikan properti id, name, dan balance dengan modifier private
  private id: number;
  private name: string;
  private balance: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  // Membuat metode getter dan setter untuk properti name
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  // Membuat metode getter untuk properti balance
  public getBalance(): number {
    return this.balance;
  }

  // Membuat metode untuk menambahkan saldo
  public deposit(amount: number): void {
    this.balance += amount;
  }

  // Membuat metode untuk mengurangi saldo
  public withdraw(amount: number): void {
    this.balance -= amount;
  }
}

// Membuat objek dari kelas Account
let account = new Account(1, "Alice", 1000);

// Mengakses properti name melalui metode getter dan setter
console.log(account.getName()); // Alice
account.setName("Bob");
console.log(account.getName()); // Bob

// Mengakses properti balance melalui metode getter
console.log(account.getBalance()); // 1000

// Menambahkan saldo melalui metode deposit
account.deposit(500);
console.log(account.getBalance()); // 1500

// Mengurangi saldo melalui metode withdraw
account.withdraw(200);
console.log(account.getBalance()); // 1300

// Tidak dapat mengakses properti id karena modifier private
console.log(account.id); // Error: Property 'id' is private and only accessible within class 'Account'.
```

- **Polimorfisme**. Polimorfisme adalah kemampuan untuk memperlakukan objek yang berbeda dengan cara yang sama. Polimorfisme memungkinkan kita untuk menimpa (override) atau memperluas (extend) properti dan metode dari kelas induk. Polimorfisme dapat dilakukan dengan menggunakan kata kunci **super** atau **abstract**².

Contoh:

```ts
// Membuat kelas abstrak bernama Shape
abstract class Shape {
  // Mendeklarasikan properti color dengan modifier protected
  protected color: string;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(color: string) {
    this.color = color;
  }

  // Membuat metode abstrak untuk menghitung luas
  abstract getArea(): number;

  // Membuat metode untuk menampilkan informasi objek
  showInfo() {
    console.log(`This is a ${this.color} shape`);
  }
}

// Membuat kelas bernama Circle yang mewarisi kelas Shape
class Circle extends Shape {
  // Mendeklarasikan properti radius dengan modifier private
  private radius: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(color: string, radius: number) {
    // Memanggil konstruktor dari kelas Shape
    super(color);
    this.radius = radius;
  }

  // Mengimplementasikan metode abstrak untuk menghitung luas lingkaran
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  // Menimpa metode untuk menampilkan informasi objek
  showInfo() {
    // Memanggil metode dari kelas Shape
    super.showInfo();
    console.log(`This is a circle with radius ${this.radius}`);
  }
}

// Membuat kelas bernama Rectangle yang mewarisi kelas Shape
class Rectangle extends Shape {
  // Mendeklarasikan properti width dan height dengan modifier private
  private width: number;
  private height: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(color: string, width: number, height: number) {
    // Memanggil konstruktor dari kelas Shape
    super(color);
    this.width = width;
    this.height = height;
  }

  // Mengimplementasikan metode abstrak untuk menghitung luas persegi panjang
  getArea(): number {
    return this.width * this.height;
  }

   // Menimpa metode untuk menampilkan informasi objek
   showInfo() {
    // Memanggil metode dari kelas Shape
    super.showInfo();
    console.log(`This is a rectangle with width ${this.width} and height ${this.height}`);
   }
}

// Membuat objek dari kelas Circle dan Rectangle dengan tipe Shape
let shape1: Shape = new Circle("red", 10);
let shape2: Shape = new Rectangle("blue", 20, 15);

// Memanggil metode getArea dan showInfo dari objek shape1 dan shape2
shape1.getArea(); //314.1592653589793 
shape1.showInfo(); // This is a
```
