class MathUtil {
  static PI: number = 3.14;

  static getCalculateArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getCalculateArea(5));

class Employee {
  static headcount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }
  public static getHeadCount() {
    return Employee.headcount;
  }
}

let jon = new Employee("Jon", "Snow", "King");
let anna = new Employee("Anna", "Snow", "Queen");

console.log("nilai = " + Employee.getHeadCount());
console.log("nilai = " + Employee.headcount);
