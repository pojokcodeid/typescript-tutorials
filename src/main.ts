// type data number
let x: number;
x = 10; //nilangan bulat
x = 3.14; //bilangan desimal
x = 0b1010; //bilangan biner
x = 0o12; //bilangan octal
x = 0x12; //bilangan hexadecimal

// type data string
let y: string;
y = "Hello World";
y = "Hello World";
y = `Hello World${x}`;

// type data boolean
let z: boolean;
z = true;
z = false;

// bigint
let big: bigint;
big = 100n;

// symbol
let symbol: symbol;
symbol = Symbol("Hello World");

// null
let nul: null;
nul = null;

// undefined
let und: undefined;
und = undefined;

let nik: string = "nik001";
let namaLengkap: string = "Nikolaus";
let indexLembur: number = 160;
let basicSalary: number = 100000;

let uangLembur: number = (indexLembur / 173) * basicSalary;

console.log("NIk = " + nik);
console.log("Nama Lengkap = " + namaLengkap);
console.log("Index Lembur = " + indexLembur);
console.log("Basic Salary = " + basicSalary);
console.log("Uang Lembur = " + uangLembur.toLocaleString("id-ID"));
