<div align="center">
  
# TYPESCRIPT

</div>

## Readonly Property

Halo, ini adalah Bing. Saya dapat membantu Anda dengan pertanyaan Anda.😊

TypeScript READONLY PROPERTY adalah properti yang tidak dapat diubah setelah diinisialisasi. Properti yang ditandai dengan READONLY PROPERTY hanya dapat ditetapkan nilai saat deklarasi atau dari dalam konstruktor kelas yang sama. Semua penugasan lain tidak diperbolehkan¹. Untuk menambahkan READONLY PROPERTY ke properti, kita menggunakan kata kunci **readonly**². Contoh:

```ts
// Membuat kelas bernama Circle
class Circle {
  // Mendeklarasikan properti radius dengan modifier readonly
  readonly radius: number;

  // Membuat konstruktor untuk menginisialisasi properti
  constructor(radius: number) {
    this.radius = radius;
  }

  // Membuat metode untuk menghitung luas lingkaran
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Membuat objek dari kelas Circle
let circle = new Circle(10);

// Mengakses properti radius
console.log(circle.radius); // 10

// Mengakses metode getArea
console.log(circle.getArea()); // 314.1592653589793

// Tidak dapat mengubah properti radius karena modifier readonly
circle.radius = 20; // Error: Cannot assign to 'radius' because it is a read-only property.
```

Dalam contoh di atas, kita mendefinisikan kelas Circle dengan properti radius yang memiliki modifier readonly. Kita dapat menginisialisasi nilai radius melalui konstruktor, dan mengaksesnya melalui objek circle. Namun, kita tidak dapat mengubah nilai radius setelah objek circle dibuat, karena properti tersebut bersifat readonly.

Contoh Readonly Properties dalam interface dan type alias adalah sebagai berikut:
```ts
// Mendefinisikan interface Person
interface Person {
  // Mendeklarasikan properti readonly name dengan tipe data string
  readonly name: string;

  // Mendeklarasikan properti readonly hobbies dengan tipe data ReadonlyArray<string>
  readonly hobbies: ReadonlyArray<string>;
}

// Membuat objek dari interface Person
let person: Person = {
  name: "Budi",
  hobbies: ["reading", "writing", "coding"],
};

// Mengakses properti name dan hobbies yang bersifat readonly
console.log(person.name); // Budi
console.log(person.hobbies); // ["reading", "writing", "coding"]

// Mencoba mengubah properti name dan hobbies yang bersifat readonly
person.name = "Ani"; // Error: Cannot assign to 'name' because it is a read-only property.
person.hobbies.push("gaming"); // Error: Property 'push' does not exist on type 'readonly string[]'.
```
