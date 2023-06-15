# typescript-tutorials
## Type Data Primitif

Anda ingin mengetahui tentang **typedata primitif** di **TypeScript** dan contohnya. Menurut hasil pencarian web, typedata primitif adalah jenis data dasar di JavaScript yang membentuk data selain fungsi dan objek. TypeScript mengenali tujuh jenis data primitif berikut di JavaScript:

- **bigint**: sebuah tipe numerik yang dapat merepresentasikan bilangan bulat dalam format presisi sembarang.
- **boolean**: sebuah tipe logika yang dapat memiliki nilai true atau false.
- **null**: sebuah tipe khusus yang hanya memiliki satu nilai, null, yang berarti tidak ada nilai atau objek.
- **number**: sebuah tipe numerik yang dapat merepresentasikan bilangan bulat dan pecahan.
- **string**: sebuah tipe teks yang dapat merepresentasikan urutan karakter apa pun.
- **symbol**: sebuah tipe unik dan tidak berubah yang dapat digunakan sebagai kunci untuk properti objek.
- **undefined**: sebuah tipe khusus yang hanya memiliki satu nilai, undefined, yang berarti nilai tidak ditetapkan.

Untuk menentukan tipe dari sebuah variabel, Anda dapat menggunakan anotasi tipe setelah nama variabel, seperti `let myName: string = "Alice"`. Anda juga dapat menggunakan array, tuple, enum, dan tipe lain untuk membuat struktur data yang lebih kompleks. Untuk tipe lanjutan, Anda dapat merujuk ke dokumentasi TypeScript⁴.

Berikut adalah beberapa contoh penggunaan typedata primitif di TypeScript:

```typescript
// bigint
let big: bigint = 100n; // menggunakan akhiran n untuk menunjukkan bigint
console.log(big); // 100n

// boolean
let isDone: boolean = false; // menggunakan true atau false
console.log(isDone); // false

// null
let nothing: null = null; // hanya bisa memiliki nilai null
console.log(nothing); // null

// number
let age: number = 25; // bisa berupa bilangan bulat atau pecahan
console.log(age); // 25

// string
let name: string = "Budi"; // bisa menggunakan kutip ganda atau tunggal
console.log(name); // Budi

// symbol
let sym: symbol = Symbol("key"); // menggunakan fungsi Symbol untuk membuat simbol unik
console.log(sym); // Symbol(key)

// undefined
let unknown: undefined = undefined; // hanya bisa memiliki nilai undefined
console.log(unknown); // undefined
```
