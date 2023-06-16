# typescript-tutorials
## Program pertama
1. Download dan Install Node js
  https://nodejs.org/en <br>
  ### cara 1
  - Install Typescript
  ```
  node -v
  npm -v
  
  npm install -g typescript
  tsc --v
  
  npm install -g ts-node
  npm install -g nodemon
  
  npm init
  tsc --init
  ```
  - ubah isi file package.json
  ```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc -w",
    "dev": "nodemon src/index.ts"
  },
  ```
  - Ubah file tsconfig.json
  ```json
  "rootDir": "./src"  // mendeklarasikan sfesifik directory
  "allowJs": true,  
  "outDir": "./build", 
   "noEmitOnError": true, // dugunakan untuk disable compile jika ada warning atau error
   
   "target": "es2016" //ubah menjadi ES5 jika ingin menggunakan standar sebelum ES6
  ```
  - tambahkan code berikut pada bagian paling bawah dari tsconfig.json jika ingin hanya folder tertentu yang di compile
  ```
  ---- disini code paling akhir dari sebelumnya ----
  },
  "include": ["src"]
  ```
  - jalankan script di bawah pada 2 terminal
  ```bash
  npm run tsc
  npm run dev
  ```
  ### cara 2 
  - jalankan file 
  ```
  tsc /directory/nama_file.ts
  node /directory/nama_file.js
  
  ts-node /dir/nama_file.ts
  ```
  ### cara 3 
  - jalankan menggunakan code runner
  
  ### cara 4
  - install deno
