<div align="center">
  
# TYPESCRIPT
## NAMESPACE

</div>

- Clone Projeck
  perintah dasarnya : <br>
  git clone -b nama-branch link-repo dir-tujuan
- contoh

```
git clone -b part-10-namespace https://github.com/pojokcodeid/typescript-tutorials.git C:\typescript-tutorial\09-namespace
```
referensi : <br>
https://www.typescriptlang.org/docs/handbook/namespaces.html

Namespaces adalah cara khusus TypeScript untuk mengorganisir kode. Namespaces adalah objek JavaScript yang diberi nama di dalam namespace global. Hal ini membuat namespaces sangat sederhana untuk digunakan. Tidak seperti modul, mereka dapat mencakup beberapa file, dan dapat digabungkan menggunakan --outFile1.

Namespaces dapat digunakan untuk menyimpan antarmuka, kelas, fungsi, atau variabel yang berhubungan dengan suatu topik tertentu. Misalnya, kita dapat membuat namespace Validation untuk menyimpan validator string1. Untuk membuat namespace, kita gunakan kata kunci namespace diikuti dengan nama namespace. Untuk mengekspor anggota namespace agar dapat diakses di luar namespace, kita gunakan kata kunci export di depannya.

## Reference Path

contoh buat file data.ts

```ts
namespace Mydata {
  export function sayHello() {
    console.log("Hello World 2");
  }
}
```

panggil pada file main.ts

```ts
/// <reference path="./data.ts" />

Mydata.sayHello();
```

note :
untuk menjalankan compile kita tidak bisa menggunakan

```bash
tsc -W
-- atau
tsc
```

gunakan perintah berikut

```bash
tsc --outFile ./build/js/main.js ./src/main.ts -W
```

## menggunakan Module
referensi <br>
https://www.typescriptlang.org/docs/handbook/modules.html

buat file data.ts

```ts
export namespace Mydata {
  export function sayHello() {
    console.log("Hello World 2");
  }
}
```

panggil pada file main.ts

```ts
import { Mydata } from "./data";

Mydata.sayHello();
```

jalankan build dengan perintah

```bash
tsc -W
-- atau
tsc
-- ata
tsc --module commonjs -W
```
