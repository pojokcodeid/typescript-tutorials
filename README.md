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
https://www.typescriptlang.org/docs/handbook/2/classes.html

Abstract class di TypeScript adalah class yang menggunakan kata kunci **abstract** dan biasanya digunakan untuk mendefinisikan struktur dan perilaku dari sekelompok class yang berhubungan, sehingga mereka memiliki antarmuka yang konsisten dan dapat digunakan secara interchangeably. Abstract class tidak dapat dibuat menjadi object, tetapi hanya dapat diturunkan oleh class lain. Abstract class biasanya mencakup satu atau lebih method atau properti abstract yang harus didefinisikan oleh class turunan. Contoh penggunaan abstract class di TypeScript adalah sebagai berikut:

```typescript
abstract class Hewan {
  // Ini adalah properti abstract
  abstract nama: string;

  // Ini adalah method abstract
  abstract bersuara(): void;

  // Ini adalah method biasa
  makan(): void {
    console.log(`${this.nama} sedang makan`);
  }
}

class Kucing extends Hewan {
  // Ini adalah implementasi properti abstract
  nama: string = "Kitty";

  // Ini adalah implementasi method abstract
  bersuara(): void {
    console.log("Meow");
  }
}

// Membuat object dari class Kucing
let kucing = new Kucing();

// Memanggil method bersuara()
kucing.bersuara(); // Output: Meow

// Memanggil method makan()
kucing.makan(); // Output: Kitty sedang makan
```

## Perbedaan Abstact Class dengan Interface

Perbedaan antara abstract class dan interface di TypeScript adalah sebagai berikut:

- Abstract class dapat berisi method dan properti yang memiliki implementasi, sementara interface hanya berisi method dan properti abstract yang harus didefinisikan oleh class yang mengimplementasikannya.
- Abstract class dapat diwariskan oleh class lain menggunakan kata kunci **extends**, sementara interface tidak dapat diwariskan tetapi dapat diimplementasikan oleh class lain menggunakan kata kunci **implements**.
- Abstract class dapat memiliki constructor, sementara interface tidak dapat memiliki constructor.
- Abstract class dapat memiliki properti dan method dengan modifier seperti **public**, **private**, **protected**, atau **readonly**, sementara interface hanya dapat memiliki properti dan method dengan modifier **public** atau **readonly**.
- Abstract class dapat memiliki tipe data dengan semua tipe data, sementara interface hanya dapat memiliki tipe data yang bersifat konstan.

Contoh penggunaan abstract class dan interface di TypeScript adalah sebagai berikut:

```typescript
// Ini adalah abstract class
abstract class Kendaraan {
  // Ini adalah properti abstract
  abstract roda: number;

  // Ini adalah method abstract
  abstract klakson(): void;

  // Ini adalah method biasa
  jalan(): void {
    console.log(`Kendaraan ini berjalan dengan ${this.roda} roda`);
  }
}

// Ini adalah interface
interface BahanBakar {
  // Ini adalah properti abstract
  bensin: number;

  // Ini adalah method abstract
  isiBensin(liter: number): void;
}

// Ini adalah class yang mengimplementasikan interface dan mewarisi abstract class
class Mobil extends Kendaraan implements BahanBakar {
  // Ini adalah implementasi properti abstract
  roda: number = 4;
  bensin: number = 0;

  // Ini adalah implementasi method abstract
  klakson(): void {
    console.log("Telolet");
  }

  isiBensin(liter: number): void {
    this.bensin += liter;
    console.log(`Bensin sekarang ${this.bensin} liter`);
  }
}

// Membuat object dari class Mobil
let mobil = new Mobil();

// Memanggil method klakson()
mobil.klakson(); // Output: Telolet

// Memanggil method jalan()
mobil.jalan(); // Output: Kendaraan ini berjalan dengan 4 roda

// Memanggil method isiBensin()
mobil.isiBensin(10); // Output: Bensin sekarang 10 liter
```

## Perbedaan dan kesamaan Class dengan Abstract Class

Perbedaan antara abstract class dan class di TypeScript adalah sebagai berikut¹²:

- Abstract class adalah class yang menggunakan kata kunci **abstract** dan tidak dapat dibuat menjadi object, sementara class biasa dapat dibuat menjadi object.
- Abstract class dapat berisi method dan properti abstract yang harus didefinisikan oleh class turunan, sementara class biasa tidak dapat berisi method atau properti abstract.
- Abstract class dapat berisi method dan properti yang memiliki implementasi, sementara class biasa juga dapat berisi method dan properti yang memiliki implementasi.
- Abstract class dapat diwariskan oleh class lain menggunakan kata kunci **extends**, sementara class biasa juga dapat diwariskan oleh class lain menggunakan kata kunci **extends**.
- Abstract class dapat memiliki constructor, sementara class biasa juga dapat memiliki constructor.

Contoh penggunaan abstract class dan class di TypeScript adalah sebagai berikut:

```typescript
// Ini adalah abstract class
abstract class Kendaraan {
  // Ini adalah properti abstract
  abstract roda: number;

  // Ini adalah method abstract
  abstract klakson(): void;

  // Ini adalah method biasa
  jalan(): void {
    console.log(`Kendaraan ini berjalan dengan ${this.roda} roda`);
  }
}

// Ini adalah class biasa
class Mobil extends Kendaraan {
  // Ini adalah implementasi properti abstract
  roda: number = 4;

  // Ini adalah implementasi method abstract
  klakson(): void {
    console.log("Telolet");
  }

  // Ini adalah method biasa
  ngebut(): void {
    console.log("Mobil ini ngebut dengan kecepatan tinggi");
  }
}

// Membuat object dari class Mobil
let mobil = new Mobil();

// Memanggil method klakson()
mobil.klakson(); // Output: Telolet

// Memanggil method jalan()
mobil.jalan(); // Output: Kendaraan ini berjalan dengan 4 roda

// Memanggil method ngebut()
mobil.ngebut(); // Output: Mobil ini ngebut dengan kecepatan tinggi
```
