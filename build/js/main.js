"use strict";
var Employee = /** @class */ (function () {
    // Membuat constructor untuk menginisialisasi field identifier
    function Employee(identifier) {
        this.identifier = identifier;
    }
    // Membuat method greet untuk menampilkan pesan sapaan
    Employee.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.identifier));
    };
    return Employee;
}());
// Membuat objek dari class Employee
var emp1 = new Employee("Alice");
var emp2 = new Employee("Bob");
// Memanggil method greet dari objek emp1 dan emp2
emp1.greet(); // Hello, I am Alice
emp2.greet(); // Hello, I am Bob
