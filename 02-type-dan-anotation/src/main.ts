let say: string;
say = "Hello";
console.log(say);

function tambah(a: number, b: number): number {
  return a + b;
}
console.log(tambah(1, 2));

let mobil: { merk: string; tahun: number };
mobil = {
  merk: "Toyota",
  tahun: 2020,
};
console.log(mobil.merk);

function contoh() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Contoh di jalankan");
  };
}

class Example {
  @contoh()
  method() {}
}
new Example().method();
