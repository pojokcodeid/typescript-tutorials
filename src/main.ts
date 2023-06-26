class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  public greet(): void {
    console.log("Hello, I am ".concat(this.name));
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

let emp = new Employee("Rizky");
emp.greet();
console.log(emp.getName());
emp.setName("Rizky Kurniawan");
console.log(emp.getName());
