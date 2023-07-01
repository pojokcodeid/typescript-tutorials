"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mydata2 = void 0;
var Mydata2;
(function (Mydata2) {
    class Mahasiswa {
        get nama_1() {
            return this._nama;
        }
        set nama_1(value) {
            this._nama = value;
        }
        constructor(nama) {
            this._nama = nama;
        }
    }
    Mydata2.Mahasiswa = Mahasiswa;
})(Mydata2 || (exports.Mydata2 = Mydata2 = {}));
