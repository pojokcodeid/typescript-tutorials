<div align="center">
  
# TYPESCRIPT

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-20-enum https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\19-enum
```

## Enum

Enum di TypeScript adalah tipe data yang mendefinisikan sekumpulan konstanta yang memiliki nama. Konstanta ini dapat berupa nilai numerik atau string. Enum adalah salah satu fitur TypeScript yang bukan merupakan ekstensi tipe dari JavaScript, tetapi fitur khusus TypeScript. Enum dapat membantu mendokumentasikan maksud atau membuat kasus-kasus yang berbeda¹. TypeScript menyediakan enum numerik dan string.

Enum numerik adalah enum yang anggota-anggotanya memiliki nilai numerik, baik yang ditentukan secara eksplisit maupun secara implisit. Secara default, enum numerik akan memiliki nilai yang auto-increment dari 0². Contoh:

```ts
// Membuat enum numerik bernama Color
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}

// Mengakses anggota enum dengan nama atau nilai
console.log(Color.Red); // 0
console.log(Color[0]); // Red
```

Kita juga dapat menentukan nilai awal untuk anggota enum numerik, dan nilai selanjutnya akan mengikuti pola auto-increment². Contoh:

```ts
// Membuat enum numerik bernama Color dengan nilai awal
enum Color {
  Red = 1, // 1
  Green, // 2
  Blue // 3
}

// Mengakses anggota enum dengan nama atau nilai
console.log(Color.Green); // 2
console.log(Color[2]); // Green
```

Kita juga dapat menentukan nilai untuk setiap anggota enum numerik secara eksplisit, baik dengan konstanta atau ekspresi yang dapat dihitung². Contoh:

```ts
// Membuat enum numerik bernama Color dengan nilai eksplisit
enum Color {
  Red = 1, // 1
  Green = 2 * Red, // 2
  Blue = Green + Red // 3
}

// Mengakses anggota enum dengan nama atau nilai
console.log(Color.Blue); // 3
console.log(Color[3]); // Blue
```

Enum string adalah enum yang anggota-anggotanya memiliki nilai string yang ditentukan secara eksplisit. Enum string tidak memiliki perilaku auto-increment seperti enum numerik³. Contoh:

```ts
// Membuat enum string bernama Direction
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Mengakses anggota enum dengan nama atau nilai
console.log(Direction.Up); // UP
console.log(Direction["UP"]); // Up
```

Enum string memiliki keuntungan bahwa mereka dapat "diserialisasi" dengan baik, artinya jika kita harus membaca nilai runtime dari enum, nilainya mudah dipahami dan tidak samar-samar seperti enum numerik³.

