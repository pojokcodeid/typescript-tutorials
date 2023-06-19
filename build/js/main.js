"use strict";
// number
let x;
x = 10; //bilangan bulat
x = 3.14; //decimal
x = 0b1010; //biner
x = 0xff; //hex
x = 1e3; //bialngan eksponensial
// string
let y;
y = "hello";
y = "hello";
y = `hello${y}`;
// boolean
let z;
z = true;
z = false;
//bigint
let big;
big = 9007199254740992n; //Angka lebih besar dari Number.MAX_SAFE_INTEGER
big = BigInt(9007199254740992); //Menggunakan konstruktor BigInt()
//symbol
let s;
s = Symbol("hello");
s = Symbol("Key");
//null
let n;
n = null;
//undefined
let u;
u = undefined;
let nama = "Pojok Code";
let nik = "nik0001";
let indexLembur = 120;
let basicSalary = 5000000;
let toatalLembur = (indexLembur / 172) * basicSalary;
console.log("Nama = " + nama);
console.log("NIK = " + nik);
console.log("Total Lembur = " + toatalLembur);
let foo = BigInt(100); // the BigInt function
let bar = 100n; // a BigInt literal
console.log("foo = " + foo);
