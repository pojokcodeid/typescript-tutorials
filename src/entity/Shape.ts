export class Shape {
  protected _color: string;
  constructor(color: string) {
    this._color = color;
  }

  getArea(): number {
    return 0;
  }

  showInfo(): void {
    console.log(`Color: ${this._color}`);
  }
}
