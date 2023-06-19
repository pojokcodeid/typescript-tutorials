# Typescript
- Clone Projeck
perintah dasarnya : <br>
git clone -b nama-branch link-repo dir-tujuan
- contoh
```
git clone -b part-05-typedata-primitif https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\04-typedata-primitif
```
## Type Data Promitif
Type data primitif di TypeScript adalah type data yang memiliki nilai yang tidak dapat diubah atau dimodifikasi. Type data primitif di TypeScript adalah:

- **number**: type data untuk menyimpan angka, baik bilangan bulat maupun desimal, termasuk notasi biner, heksadesimal, oktal, dan eksponensial. Contoh:

```typescript
let x: number;
x = 10; //Bilangan bulat
x = 3.14; //Bilangan desimal
x = 0b1010; //Bilangan biner
x = 0xff; //Bilangan heksadesimal
x = 1e3; //Bilangan eksponensial
```

- **string**: type data untuk menyimpan teks atau kumpulan karakter. Contoh:

```typescript
let s: string;
s = "Hello"; //String literal
s = "World"; //String literal
s = `Hello ${s}`; //String literal dengan template expression
```

- **boolean**: type data untuk menyimpan nilai logika, yaitu **true** atau **false**. Contoh:

```typescript
let b: boolean;
b = true; //Nilai benar
b = false; //Nilai salah
```

- **bigint**: type data untuk menyimpan angka yang lebih besar dari batas maksimum type data **number**, yaitu 2^53 - 1². Type data **bigint** ditandai dengan huruf **n** di akhir angka. Contoh:

```typescript
let big: bigint;
big = 9007199254740992n; //Angka lebih besar dari Number.MAX_SAFE_INTEGER
big = BigInt(9007199254740992); //Menggunakan konstruktor BigInt()
```

- **symbol**: type data untuk menyimpan nilai unik yang tidak dapat diubah. Type data **symbol** dibuat dengan menggunakan fungsi **Symbol()**. Contoh:

```typescript
let sym1: symbol;
let sym2: symbol;
sym1 = Symbol("key"); //Membuat symbol dengan deskripsi "key"
sym2 = Symbol("key"); //Membuat symbol lain dengan deskripsi "key"
console.log(sym1 === sym2); //false, karena setiap symbol bersifat unik
```

- **null**: type data untuk menyimpan nilai kosong atau tidak ada. Contoh:

```typescript
let n: null;
n = null; //Nilai null
```

- **undefined**: type data untuk menyimpan nilai yang belum didefinisikan. Contoh:

```typescript
let u: undefined;
u = undefined; //Nilai undefined
```
