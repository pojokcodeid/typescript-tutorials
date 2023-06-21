<div align="center">
  
# TYPESCRIPT

</div>

## Access Modifier

Halo, ini adalah Bing. Saya dapat membantu Anda dengan pertanyaan Anda.😊

ACCESS MODIFIER di TypeScript adalah kata kunci yang digunakan untuk mengatur tingkat akses atau visibilitas dari properti atau metode dalam sebuah kelas. ACCESS MODIFIER dapat membantu kita untuk menyembunyikan detail implementasi dari pengguna dan mengontrol bagaimana properti atau metode dapat diakses dan dimodifikasi¹. TypeScript menyediakan tiga jenis ACCESS MODIFIER, yaitu:

- **private**. ACCESS MODIFIER ini membatasi akses hanya untuk kelas yang sama. Jika kita menambahkan ACCESS MODIFIER ini ke properti atau metode, kita hanya dapat mengakses atau memodifikasi properti atau metode tersebut dalam kelas yang sama. Setiap upaya untuk mengakses atau memodifikasi properti atau metode private di luar kelas akan menghasilkan kesalahan saat kompilasi². Contoh:

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

- **protected**. ACCESS MODIFIER ini mirip dengan private, tetapi juga memungkinkan akses dari kelas turunan. Jika kita menambahkan ACCESS MODIFIER ini ke properti atau metode, kita dapat mengakses atau memodifikasi properti atau metode tersebut dalam kelas yang sama atau dalam kelas yang mewarisi kelas tersebut. Setiap upaya untuk mengakses atau memodifikasi properti atau metode protected di luar kelas atau kelas turunan akan menghasilkan kesalahan saat kompilasi². Contoh:

```ts
// Membuat kelas bernama Animal
class Animal {
  // Mendeklarasikan properti name dan age dengan modifier protected
  protected name: string;
  protected age: number;

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
  // Mendeklarasikan properti breed dengan modifier protected
  protected breed: string;

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

// Tidak dapat mengakses properti name, age, atau breed karena modifier protected
console.log(dog.name); // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
console.log(dog.age); // Error: Property 'age' is protected and only accessible within class 'Animal' and its subclasses.
console.log(dog.breed); // Error: Property 'breed' is protected and only accessible within class 'Dog' and its subclasses.
```

- **public**. ACCESS MODIFIER ini memungkinkan akses dari mana saja, baik dalam kelas maupun di luar kelas. Ini adalah ACCESS MODIFIER yang paling bebas, biasanya digunakan untuk properti atau metode yang perlu diungkapkan ke dunia luar. Jika kita tidak menentukan ACCESS MODIFIER apa pun untuk properti atau metode, mereka akan menggunakan ACCESS MODIFIER public secara default². Contoh:

```ts
// Membuat kelas bernama Animal
class Animal {
  // Mendeklarasikan properti name dan age dengan modifier public
  public name: string;
  public age: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Membuat metode untuk menampilkan informasi objek dengan modifier public
  public showInfo() {
    console.log(`This is ${this.name}, ${this.age} years old`);
  }
}

// Membuat objek dari kelas Animal
let animal = new Animal("Lion", 5);

// Mengakses properti name dan age dengan modifier public
console.log(animal.name); // Lion
console.log(animal.age); // 5

// Memanggil metode showInfo dengan modifier public
animal.showInfo(); // This is Lion, 5 years old
```
