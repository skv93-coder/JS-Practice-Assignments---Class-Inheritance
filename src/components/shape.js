// declare class

// export class using module.exports
class Shape {
  constructor() {
    this.color = "color";
    this.drawShap = this.drawShap.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  drawShap() {}
  calculateArea() {}
}
module.exports = Shape;
