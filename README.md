# typescript-tutorials
## Cara membuat variable
Bagaimana cara membuat variabel di TypeScript. Ada beberapa cara untuk mendeklarasikan variabel di TypeScript, yaitu:

- Menggunakan kata kunci **var**, yang merupakan cara lama untuk membuat variabel di JavaScript. Variabel yang dibuat dengan var memiliki cakupan fungsi, yang berarti mereka dapat diakses di mana saja dalam fungsi yang sama, bahkan sebelum mereka dideklarasikan. Contoh:

```typescript
function test() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); // 10
}
```

- Menggunakan kata kunci **let**, yang merupakan cara baru untuk membuat variabel di JavaScript (ES6). Variabel yang dibuat dengan let memiliki cakupan blok, yang berarti mereka hanya dapat diakses dalam blok kode tempat mereka dideklarasikan. Variabel let juga tidak dapat diakses sebelum mereka dideklarasikan, yang disebut sebagai zona mati sementara. Contoh:

```typescript
function test() {
  console.log(x); // ReferenceError: x is not defined
  let x = 10;
  console.log(x); // 10
}

if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined
```

- Menggunakan kata kunci **const**, yang juga merupakan cara baru untuk membuat variabel di JavaScript (ES6). Variabel yang dibuat dengan const mirip dengan let, kecuali mereka tidak dapat diubah setelah mereka dideklarasikan. Variabel const juga harus diberi nilai saat dideklarasikan. Contoh:

```typescript
const PI = 3.14;
console.log(PI); // 3.14
PI = 3.15; // TypeError: Assignment to constant variable.
```

Selain menggunakan kata kunci var, let, atau const, Anda juga dapat menambahkan anotasi tipe setelah nama variabel untuk menentukan tipe data dari variabel tersebut. Anotasi tipe berguna untuk memberi tahu TypeScript tentang jenis nilai yang dapat disimpan dalam variabel, sehingga TypeScript dapat melakukan pemeriksaan tipe dan mencegah kesalahan saat kompilasi. Contoh:

```typescript
let name: string = "Budi"; // variabel name hanya bisa menyimpan nilai string
name = 10; // Error: Type 'number' is not assignable to type 'string'.

const age: number = 25; // variabel age hanya bisa menyimpan nilai number
age = "25"; // Error: Type 'string' is not assignable to type 'number'.
```
