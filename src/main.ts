// number
let x: number;

x = 10; //bilangan bulat
x = 3.14; //decimal
x = 0b1010; //biner
x = 0xff; //hex
x = 1e3; //bialngan eksponensial

// string
let y: string;
y = "hello";
y = "hello";
y = `hello${y}`;

// boolean
let z: boolean;
z = true;
z = false;

//bigint
let big: bigint;
big = 9007199254740992n; //Angka lebih besar dari Number.MAX_SAFE_INTEGER
big = BigInt(9007199254740992); //Menggunakan konstruktor BigInt()

//symbol
let s: symbol;
s = Symbol("hello");
s = Symbol("Key");

//null
let n: null;
n = null;

//undefined
let u: undefined;
u = undefined;

let nama: string = "Pojok Code";
let nik: string = "nik0001";
let indexLembur: number = 120;
let basicSalary: number = 5000000;

let toatalLembur: number = (indexLembur / 172) * basicSalary;
console.log("Nama = " + nama);
console.log("NIK = " + nik);
console.log("Total Lembur = " + toatalLembur);

let foo: bigint = BigInt(100); // the BigInt function
let bar: bigint = 100n; // a BigInt literal

console.log("foo = " + foo);
