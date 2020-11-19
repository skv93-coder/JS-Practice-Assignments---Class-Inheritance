// declare class

// export class using module.exports
class Shape {
  constructor() {
    this.color = "color";
    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  drawShape() {}
  calculateArea() {}
}
module.exports = Shape;
