<div align="center">
  
# TYPESCRIPT

</div>

## Jenis Objek

Jenis objek di TypeScript adalah tipe yang merepresentasikan nilai yang berupa objek, yaitu kumpulan dari properti yang memiliki nama dan nilai¹. Jenis objek di TypeScript dapat dibagi menjadi beberapa kategori, yaitu:

- **Objek literal**. Objek literal adalah objek yang ditulis secara langsung dengan menggunakan tanda kurung kurawal ({}) dan menuliskan nama dan nilai properti yang dimiliki objek tersebut¹. Contoh:

```ts
// Membuat objek literal dengan properti name dan age
let person = { name: "Alice", age: 20 };
```

- **Kelas**. Kelas adalah cetak biru atau rancangan untuk membuat objek. Kelas dapat memiliki properti dan metode yang mendefinisikan karakteristik dan perilaku objek. Kelas dapat dibuat dengan kata kunci **class**². Contoh:

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

- **Interface**. Interface adalah tipe abstrak yang mendefinisikan struktur atau kontrak untuk objek. Interface dapat memiliki properti dan metode yang harus diimplementasikan oleh objek yang mengikuti interface tersebut. Interface dapat dibuat dengan kata kunci **interface**³. Contoh:

```ts
// Membuat interface bernama Person
interface Person {
  // Mendefinisikan properti name dan age
  name: string;
  age: number;

  // Mendefinisikan metode greet
  greet(): void;
}

// Membuat objek yang mengimplementasikan interface Person
let person: Person = {
  name: "Alice",
  age: 20,
  greet() {
    console.log("Hello, I am " + this.name);
  }
};

// Memanggil metode greet
person.greet(); // Hello, I am Alice
```

- **Type alias**. Type alias adalah cara untuk memberi nama atau alias untuk tipe objek yang sudah ada atau tipe lainnya. Type alias dapat dibuat dengan kata kunci **type**⁴. Contoh:

```ts
// Membuat type alias bernama Student
type Student = {
  // Mendefinisikan properti name, age, dan score
  name: string;
  age: number;
  score: number;
};

// Membuat objek dengan tipe Student
let student: Student = {
  name: "Bob",
  age: 18,
  score: 90
};
```
