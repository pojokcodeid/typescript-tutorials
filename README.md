<div align="center">
  
# TYPESCRIPT

</div>

## GENERIC

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-16-generik https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\14-generik
```

## GENERIC TYPES

TypeScript Generics adalah konsep pemrograman yang memungkinkan kita untuk membuat komponen yang dapat bekerja dengan berbagai macam tipe data, bukan hanya satu tipe data. Dengan generics, kita dapat menulis kode yang dinamis dan dapat digunakan kembali. Selain itu, kita dapat menerapkan generics pada kelas, interface, dan fungsi. Generics di TypeScript menggunakan sintaks berbasis tipe variabel, yaitu variabel khusus yang bekerja pada tipe data, bukan nilai.

Contoh TypeScript Generics:

```typescript
// membuat fungsi generik dengan tipe variabel T
function identity<T>(arg: T): T {
  return arg;
}

// memanggil fungsi generik dengan tipe string
let output = identity<string>("Hello");

// memanggil fungsi generik dengan tipe number
let output2 = identity<number>(42);

// memanggil fungsi generik dengan inferensi tipe
let output3 = identity("World"); // output3 bertipe string
```

## GENERIC CONSTRAINTS

Generic Constraints di TypeScript adalah cara untuk membatasi tipe data yang dapat digunakan sebagai tipe variabel pada generics. Dengan generic constraints, kita dapat menentukan syarat atau persyaratan tertentu yang harus dipenuhi oleh tipe variabel. Generic constraints di TypeScript menggunakan kata kunci extends dan dapat merujuk pada tipe data lain, termasuk kelas, interface, atau tipe variabel lain.

Contoh Generic Constraints di TypeScript:

```typescript
// membuat interface
interface Lengthwise {
  length: number;
}

// membuat fungsi generik dengan generic constraint
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // OK, karena T memiliki properti length
  return arg;
}

// memanggil fungsi generik dengan objek yang sesuai dengan generic constraint
loggingIdentity({ length: 10, value: 3 }); // OK

// memanggil fungsi generik dengan objek yang tidak sesuai dengan generic constraint
loggingIdentity(3); // Error, karena number tidak memiliki properti length
```

## GENERIC INTERFACES

Generic Interfaces di TypeScript adalah interface yang menggunakan tipe variabel sebagai salah satu anggotanya. Dengan generic interfaces, kita dapat mendeskripsikan bentuk dari sebuah objek, fungsi, atau metode yang dapat bekerja dengan berbagai macam tipe data. Generic interfaces di TypeScript menggunakan sintaks berbasis tipe variabel, yaitu variabel khusus yang bekerja pada tipe data, bukan nilai.

Contoh Generic Interfaces di TypeScript:

```typescript
// mendefinisikan generic interface dengan tipe variabel T
interface IProcessor<T> {
  result: T;
  process(a: T, b: T): T;
}

// membuat kelas yang mengimplementasikan generic interface dengan tipe number
class NumberProcessor implements IProcessor<number> {
  result: number;
  process(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }
}

// membuat objek dari kelas NumberProcessor
let np = new NumberProcessor();

// memanggil metode process dengan argumen bertipe number
np.process(10, 20); // 30
```

## GENERIC CLASSES

Generic Classes di TypeScript adalah kelas yang menggunakan tipe variabel sebagai salah satu anggotanya. Dengan generic classes, kita dapat membuat kelas yang dapat bekerja dengan berbagai macam tipe data, bukan hanya satu tipe data. Generic classes di TypeScript menggunakan sintaks berbasis tipe variabel, yaitu variabel khusus yang bekerja pada tipe data, bukan nilai.

Contoh Generic Classes di TypeScript:

```typescript
// mendefinisikan generic class dengan tipe variabel T
class Stack<T> {
  private items: T[] = [];
  // menambahkan elemen ke stack
  push(element: T): void {
    this.items.push(element);
  }
  // menghapus elemen dari stack
  pop(): T {
    return this.items.pop();
  }
}

// membuat objek dari generic class dengan tipe number
let stack = new Stack<number>();

// memanggil metode push dengan argumen bertipe number
stack.push(10);
stack.push(20);

// memanggil metode pop dan menampilkan hasilnya
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
```
