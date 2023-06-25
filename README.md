<div align="center">
  
# TYPESCRIPT

</div>

## Static Method

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-15-static https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\14-static
```

STATIC METHOD DAN PROPERTIES di TypeScript adalah metode dan properti yang dimiliki oleh kelas itu sendiri, bukan oleh objek yang dibuat dari kelas tersebut. STATIC METHOD DAN PROPERTIES dapat diakses tanpa membuat objek dari kelas, tetapi dengan menggunakan nama kelas sebagai prefiks¹. Untuk menambahkan STATIC METHOD DAN PROPERTIES ke kelas, kita menggunakan kata kunci **static** sebelum nama metode atau properti². Contoh:

```ts
// Membuat kelas bernama MathUtil
class MathUtil {
  // Mendeklarasikan properti static bernama PI
  static PI: number = 3.14;

  // Membuat metode static untuk menghitung luas lingkaran
  static getCircleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}

// Mengakses properti static PI
console.log(MathUtil.PI); // 3.14

// Memanggil metode static getCircleArea
console.log(MathUtil.getCircleArea(10)); // 314
```

Dalam contoh di atas, kita mendefinisikan kelas MathUtil dengan properti static PI dan metode static getCircleArea. Kita dapat mengakses properti dan metode tersebut tanpa membuat objek dari kelas MathUtil, tetapi dengan menggunakan nama kelas MathUtil sebagai prefiks. Perhatikan bahwa dalam metode static, kita juga harus menggunakan nama kelas untuk mengakses properti atau metode static lainnya².
