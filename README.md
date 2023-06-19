## CARA MEMBUAT VARIABEL

Variabel adalah sebuah tempat untuk menyimpan nilai dalam program. Cara penulisan variabel di TypeScript mengikuti aturan-aturan berikut:

- Variabel harus diawali dengan huruf, underscore (_), atau tanda dollar ($).
- Variabel tidak boleh mengandung spasi atau karakter spesial, kecuali underscore (_) atau tanda dollar ($).
- Variabel tidak boleh menggunakan kata kunci yang sudah ada di TypeScript, seperti `let`, `const`, `var`, `function`, `class`, `interface`, dll.
- Variabel bersifat case-sensitive, artinya membedakan huruf besar dan kecil. Misalnya, `nama` dan `Nama` adalah dua variabel yang berbeda.
- Variabel harus diberi nama yang jelas dan deskriptif, sesuai dengan nilai atau fungsi yang disimpan.

Cara menulis variabel dengan dua kata atau lebih di TypeScript adalah dengan menggunakan camelCase, yaitu cara penulisan dimana karakter pertama setiap kata ditulis dengan huruf besar, kecuali kata pertama. Contoh:

```typescript
let firstName = "Budi"; // variabel dengan satu kata
let lastName = "Santoso"; // variabel dengan satu kata
let fullName = firstName + " " + lastName; // variabel dengan dua kata
let birthDate = new Date(2000, 1, 1); // variabel dengan dua kata
let totalScore = 100; // variabel dengan dua kata
```

Cara menuliskan variabel di TypeScript adalah dengan menggunakan kata kunci **let**, **const**, atau **var**. Kata kunci **let** dan **const** adalah cara baru untuk mendeklarasikan variabel di TypeScript yang lebih disarankan daripada menggunakan kata kunci **var**. Perbedaan antara **let** dan **const** adalah bahwa **let** dapat diubah nilainya, sedangkan **const** tidak.

Contoh menuliskan variabel dengan **let**:

```typescript
let x: number; //Mendeklarasikan variabel x dengan type data number
x = 10; //Mengisi variabel x dengan nilai 10
x = 20; //Mengubah nilai variabel x menjadi 20
```

Contoh menuliskan variabel dengan **const**:

```typescript
const y: string = "Hello"; //Mendeklarasikan dan mengisi variabel y dengan type data string dan nilai "Hello"
y = "World"; //Error, tidak bisa mengubah nilai variabel y
```

Contoh menuliskan variabel dengan **var**:

```typescript
var z: boolean = true; //Mendeklarasikan dan mengisi variabel z dengan type data boolean dan nilai true
z = false; //Mengubah nilai variabel z menjadi false
```

conto perbedaannya

```ts
// contoh var
function testVar() {
  var a = 10;
  if (true) {
    var a = 20; // mengubah nilai a
    console.log(a); // 20
  }
  console.log(a); // 20
}

// contoh let
function testLet() {
  let a = 10;
  if (true) {
    let a = 20; // mendeklarasikan variabel baru a
    console.log(a); // 20
  }
  console.log(a); // 10
}

testVar();
testLet();
```

Ketika menuliskan variabel di TypeScript, kita juga dapat menentukan type data dari variabel tersebut dengan menggunakan anotasi type. Anotasi type ditulis setelah nama variabel dengan tanda titik dua (:) dan nama type datanya. Contoh:

```typescript
let a: number; //Mendeklarasikan variabel a dengan type data number
let b: string = "Hello"; //Mendeklarasikan dan mengisi variabel b dengan type data string dan nilai "Hello"
let c: boolean = true; //Mendeklarasikan dan mengisi variabel c dengan type data boolean dan nilai true
```

Menentukan type data dari variabel dapat membantu kita untuk mencegah kesalahan penulisan nilai yang tidak sesuai dengan type data yang diharapkan. Jika kita tidak menentukan type data dari variabel, maka TypeScript akan menentukan type data secara implisit berdasarkan nilai awal yang diberikan. Contoh:

```typescript
let a = 10; //Type data number
let b = "Hello"; //Type data string
let c = true; //Type data boolean
```

## IMPICIT DAN EXPLICIT VARIABLE

Implicit dan explicit variable di TypeScript adalah dua cara untuk menentukan type data dari sebuah variabel. Implicit variable adalah variabel yang type datanya ditentukan secara otomatis oleh TypeScript berdasarkan nilai yang diberikan. Explicit variable adalah variabel yang type datanya ditentukan secara manual oleh programmer dengan menggunakan anotasi type.

Contoh implicit variable:

```typescript
let x = 10; //Type data number
let y = "Hello"; //Type data string
let z = true; //Type data boolean
```

Contoh explicit variable:

```typescript
let x: number = 10; //Type data number
let y: string = "Hello"; //Type data string
let z: boolean = true; //Type data boolean
```

Keuntungan dari menggunakan implicit variable adalah lebih fleksibel dan hemat waktu, karena tidak perlu menulis type data secara eksplisit. Keuntungan dari menggunakan explicit variable adalah lebih jelas dan mudah dibaca, karena type data terlihat secara eksplisit. Selain itu, explicit variable juga dapat mencegah kesalahan penulisan type data yang tidak sesuai dengan nilai yang diberikan.
