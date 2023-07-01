abstract class Hewan {
  abstract name: string;
  age: number;
  constructor(age: number) {
    this.age = age;
  }

  abstract bersuara(): void;

  makan() {
    console.log(`${this.name} sedang makan`);
  }
}

class Kucing extends Hewan {
  name: string;
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }

  bersuara() {
    console.log("Miau");
  }
}

let kucing = new Kucing("Kucing", 2);
kucing.bersuara();
kucing.makan();

abstract class Kendaraan {
  abstract roda: number;
  abstract klakson(): void;
  jalan() {
    console.log("Jalan");
  }
}

interface BahanBakar {
  bensin: number;
  isiBensin(liter: number): void;
}

class Mobil extends Kendaraan implements BahanBakar {
  roda: number;
  bensin: number;
  constructor(roda: number, bensin: number) {
    super();
    this.roda = roda;
    this.bensin = bensin;
  }

  isiBensin(liter: number) {
    this.bensin += liter;
  }

  klakson(): void {
    console.log("Klakson Mobil");
  }
}

let mobil = new Mobil(4, 100);
mobil.klakson();
mobil.isiBensin(50);
mobil.jalan();
