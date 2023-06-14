# typescript-tutorials
## Persiapan dan Pengenalan
1. Download dan Install Node js
  https://nodejs.org/en <br>
  
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
  "allowJs": true,  
  "outDir": "./build", 
  ```bash
  - jalankan script di bawah pada 2 terminal
  ```
  npm run tsc
  npm run dev
  ```
