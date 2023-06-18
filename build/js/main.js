"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let say;
say = "Hello";
console.log(say);
function tambah(a, b) {
    return a + b;
}
console.log(tambah(1, 2));
let mobil = {
    merk: "Toyota",
    tahun: 2020
};
console.log(mobil.merk);
function contoh() {
    return function (target, propertyKey, descriptor) {
        console.log("Contoh di jalankan");
    };
}
class Example {
    method() { }
}
__decorate([
    contoh()
], Example.prototype, "method", null);
new Example().method();
