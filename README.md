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

STATIC METHOD DAN STATIC PROPERTIES di TypeScript adalah anggota kelas yang dapat diakses tanpa membuat objek dari kelas tersebut. Untuk mendeklarasikan static method atau property, kita menggunakan kata kunci static sebelum nama method atau property. Untuk mengakses static method atau property, kita menggunakan sintaks className.methodName atau className.propertyName. . Contoh:

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

// contoh lainnya 
class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }

  public static getHeadcount() {
    return Employee.headcount;
  }
}

let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log("nilainya = " + Employee.headcount); // 2
console.log("nilainya = " + Employee.getHeadcount()); // 2
```

Dalam contoh di atas, kita mendefinisikan kelas MathUtil dengan properti static PI dan metode static getCircleArea. Kita dapat mengakses properti dan metode tersebut tanpa membuat objek dari kelas MathUtil, tetapi dengan menggunakan nama kelas MathUtil sebagai prefiks. Perhatikan bahwa dalam metode static, kita juga harus menggunakan nama kelas untuk mengakses properti atau metode static lainnya².
