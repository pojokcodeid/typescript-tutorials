export namespace Mydata2 {
  export class Mahasiswa {
    private _nama: string;
    public get nama_1(): string {
      return this._nama;
    }
    public set nama_1(value: string) {
      this._nama = value;
    }

    constructor(nama: string) {
      this._nama = nama;
    }
  }
}
